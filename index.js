const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyDHPa-YI_nqSTUYblAvVmhITBv4W-H-aqo",
  authDomain: "thefitnesshub-2f54a.firebaseapp.com",
  projectId: "thefitnesshub-2f54a",
  storageBucket: "thefitnesshub-2f54a.appspot.com",
  messagingSenderId: "426013927829",
  appId: "1:426013927829:web:25bcf67fe5e8a1e5d96e9c",
};

io.on("connection", (socket) => {
  socket.emit("firebaseConfig", firebaseConfig);
});

const folderPath = __dirname + "/components"; // Replace with the actual path to the folder you want to serve

// Serve the folder using express.static middleware
app.use(express.static(folderPath));
app.use(express.static(__dirname + "/public/pages"));
app.use(express.static(__dirname + "/public/racism"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/style", (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});
app.get("/genSel", (req, res) => {
  res.sendFile(__dirname + "/public/genSel.css");
});
app.get("/learn", (req, res) => {
  res.sendFile(__dirname + "/public/learn.html");
});
app.get("/homecss", (req, res) => {
  res.sendFile(__dirname + "/public/home.css");
});

server.listen(3000, () => console.log(`Listening on port ${3000}`));
