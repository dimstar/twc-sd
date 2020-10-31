const { GoogleSpreadsheet } = require('google-spreadsheet');

const authKey = JSON.parse(process.env.JOIN_SHEET_KEY);

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.JOIN_SHEET_ID);
    await doc.useServiceAccountAuth(authKey, data => console.log(data));
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const data = JSON.parse(event.body);
    // add the row to the sheet
    await sheet.addRow(data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `row added`
      })
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.toString()
    };
  }
};
