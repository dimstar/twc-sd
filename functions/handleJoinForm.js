const { GoogleSpreadsheet } = require('google-spreadsheet');
const querystring = require('querystring');
const fetch = require('node-fetch');

const authKey = JSON.parse(process.env.JOIN_SHEET_KEY || '');

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.JOIN_SHEET_ID || '');
    await doc.useServiceAccountAuth(authKey, data => console.log(data));
    await doc.loadInfo();
    // get the first sheet
    const sheet = doc.sheetsByIndex[0];
    // parses the request body into json
    // eslint-disable-next-line camelcase
    const { newsletter_signup, ...data } = JSON.parse(event.body);
    // add the row to the sheet
    await sheet.addRow({ newsletter_signup, ...data });

    // sends the data along to a slack signup for general TWC
    const res = await fetch(process.env.TWC_SIGNUP_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.encode(data)
    });

    const resText = await res.text();

    // debugging
    console.log('res: ', resText);

    if (res.status >= 300) {
      throw new Error(resText);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `success`
      })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString()
    };
  }
};
