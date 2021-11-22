const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(`User ${payload.name} verified`);
    console.log("Payload: ", payload);
    const { sub, email, name, picture } = payload;
    const userId = sub;
    return { userId, email, fullname: name, photoUrl: picture };
};

module.exports = googleAuth;