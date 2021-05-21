const express = require("express")
const Car = require('./schema');
const router = express.Router()

// add car
router.post("/addcar", async (req, res) => {
  const { name, modal, year } = req.body;
  try {
	const car = new Car();
	car.name = name;
	car.modal = modal;
	car.year = year;
	car.save();
	res.send('sucsses');

  } catch (error) {
	  res.send(error);
  }
})

module.exports = router