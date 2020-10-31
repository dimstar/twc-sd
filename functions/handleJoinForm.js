const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.JOIN_SHEET_ID);
    await doc.useServiceAccountAuth({
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIAVTE_KEY_ID,
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
    });
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
