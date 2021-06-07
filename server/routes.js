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
});

router.get("/getallcar", async (req, res) => {
	Car.find({}, function(err, cars) {
		let carMap = {data:[]};
		cars.forEach(function(car) {
			carMap.data.push(car);
		});
		res.send(carMap);  
	  });
  })

module.exports = router