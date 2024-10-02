const db = require("../models");
const Car = db.cars;

exports.create = (req, res) => {
    const car = {
        brand: req.body.brand,
        model: req.body.model,
        engine: req.body.engine
    }

    Car.create(car).then((data) => {
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    Car.findAll().then((data) => {
        res.send(data);
    })
}

exports.update = (req, res) => {
    console.log("llegó aquí")
    const id = req.params.id;
    console.log(id)

    const updatedCar = {
        brand: req.body.brand,
        model: req.body.model,
        engine: req.body.engine
    };
    console.log(updatedCar);

    Car.update(updatedCar, {
        where: { id: id }
    })
    .then(() => {
        console.log("Car was updated successfully.")
        res.send({message: "Car was updated successfully."});
       
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Car.destroy({ where: {id: id}}).then (() => {
        console.log("The element got deleted successfully.")
        res.send({message: "Deleted."});
    })
}