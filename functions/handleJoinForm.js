const { GoogleSpreadsheet } = require('google-spreadsheet');
const querystring = require('querystring');

const authKey = JSON.parse(process.env.JOIN_SHEET_KEY || '');

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.JOIN_SHEET_ID || '');
    await doc.useServiceAccountAuth(authKey, data => console.log(data));
    await doc.loadInfo();
    // get the first sheet
    const sheet = doc.sheetsByIndex[0];
    // parses the request body into json
    const data = JSON.parse(event.body);
    // add the row to the sheet
    await sheet.addRow(data);

    // sends the data along to a slack signup for general TWC
    await fetch(process.env.TWC_SIGNUP_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.encode(data)
    });

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
