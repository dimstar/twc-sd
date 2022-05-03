const { GoogleSpreadsheet } = require('google-spreadsheet');

const authKey = JSON.parse(process.env.JOIN_SHEET_KEY || '');

exports.handler = async event => {
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
    const newRow = await sheet.addRow({ newsletter_signup, ...data });
    // save the row
    newRow.save();

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
