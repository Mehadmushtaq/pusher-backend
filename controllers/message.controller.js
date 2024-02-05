const { pusher } = require("../utils/pusher");
const multer = require("multer");
const path = require("path");

const {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");

const firebase = require("../firebase");

const db = getFirestore(firebase);

// const getMessages = async (req, res) => {
//   //dummy data
//   const messages = [
//     { id: 1, username: 'user1', message: 'Hello, Pusher!' },
//     { id: 2, username: 'user2', message: 'Hi there!' },
//   ];

//   res.json(messages);
// };

const newMessage = async (req, res) => {
  const { channel_name, message, sender } = req.body;
  const attachment = req?.file;

  const newMessage = { id: Date.now(), message, sender, attachment };

  await pusher.trigger(channel_name, "new-message", newMessage);

  res.json({ message: "completed" });
};

const getMessages = async (req, res) => {
  const channel_name = req.query.channel_name;

  const messages = [];

  const snapshot = await getDocs(
    collection(db, "channels", channel_name, "messages")
  );

  snapshot.forEach((doc) => {
    messages.push(doc.data());
  });

  res.json(messages);
};

module.exports = { newMessage, getMessages };
