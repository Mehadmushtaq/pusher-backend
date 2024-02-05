const pusher = require('../utils/pusher');

const handler = (req, res) => {
  const { socket_id, channel_name, username } = req.body;

  // use JWTs here to authenticate users before continuing

  const randomString = Math.random().toString(36).slice(2);

  const presenceData = {
    user_id: randomString,
    user_info: {
      username,
    },
  };

  try {
    const auth = pusher.authenticate(socket_id, channel_name, presenceData);
    res.send(auth);
  } catch (error) {
    console.error(error);
  }
};
