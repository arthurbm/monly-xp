const grantType = process.env.GRANT_TYPE;
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const authData = new URLSearchParams();

if (grantType && clientID && clientSecret) {
  authData.append('grant_type', grantType);
  authData.append('client_id', clientID);
  authData.append('client_secret', clientSecret);
}

export { authData };
