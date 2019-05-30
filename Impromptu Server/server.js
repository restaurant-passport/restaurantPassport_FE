const express = require("express");
const cors = require("cors");
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let passports = [
  {
    city: "Eugene",
    restaurants: ["Toshi's Ramen", "Makoto", "Tacovore"]
  },
  {
    city: "San Diego",
    restaurants: ["The Broken Yolk", "Searsucker", "Water Grill"]
  }
];
server.get("/passports", (req, res) => {
  res.json(passports);
});
let passportId = passports.length;

server.post("/passports", (req, res) => {
  const { city, restaurants } = req.body;
  const newPassport = { city, restaurants, id: passportId };
  if (!city) {
    return sendUserError("Passport already exists", res);
  }
  const findPassportByName = passport => {
    return passport.city === city;
  };
  if (passports.find(findPassportByName)) {
    return sendUserError(`${city} already exists.`, res);
  }

  passports.push(newPassport);
  passportId++;
  res.json(passports);
});

server.put("/passports/:id", (req, res) => {
  const { id } = req.params;
  const { city } = req.body;
  const findPassportById = passport => {
    return passport.id == id;
  };
  const foundPassport = passports.find(findPassportById);
  if (!foundPassport) {
    return sendUserError("No Passport found by that ID", res);
  } else {
    if (city) foundPassport.city = city;
    res.json(passports);
  }
});

server.delete("/passport/:id", (req, res) => {
  const { id } = req.params;
  const foundPassport = passports.find(passport => passport.id == id);

  if (foundPassport) {
    const PassportRemoved = { ...foundPassport };
    passports = passports.filter(passport => passport.id != id);
    res.status(200).json(passports);
  } else {
    sendUserError("No passport by that ID exists in the DB", res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
