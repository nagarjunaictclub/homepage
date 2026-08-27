/**
 * Appends values in a Spreadsheet.
 * @param {string} spreadsheetId The spreadsheet ID.
 * @param {string} range The range of values to append.
 * @param {object} valueInputOption Value input options.
 * @param {(string[])[]} _values A 2d array of values to append.
 * @return {obj} spreadsheet information
 */
export async function appendValues(spreadsheetId: String, range: String, valueInputOption: Object, _values: String[]): Promise<Object> {
  const { GoogleAuth } = require('google-auth-library');
  const { google } = require('googleapis');
  const credentials = {
    "client_email": process.env.GMAIL_EMAIL_ADDRESS || "",
    "client_id": process.env.GOOGLE_CLIENT_ID || "",
    "project_id": process.env.GOOGLE_PROJECT_ID || "poetic-inkwell-364417",
    "auth_uri": process.env.GOOGLE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
    "token_uri": process.env.GOOGLE_TOKEN_URI || "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": process.env.GOOGLE_AUTH_PROVIDER_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": process.env.GOOGLE_CLIENT_SECRET || "",
    "redirect_uris": [
      "https://www.nagarjunaictclub.com"
    ],
    "javascript_origins": [
      "https://www.nagarjunaictclub.com"
    ]
  };
  // const auth = new GoogleAuth({
  //   scopes: 'https://www.googleapis.com/auth/spreadsheets',
  // });

  const auth = google.auth.fromJSON(credentials);
  const service = google.sheets({ version: 'v4', auth });

  const resource = {
    _values,
  };
  try {
    const result = await service.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    console.log(`${result.data.updates.updatedCells} cells appended.`);
    return result;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}