const express = require("express");
const { Mongoose } = require("mongoose");
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const routes = express.Router();



routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ "_id": "65acc4852eff3550bb4b9ccf" });
    const sliders = await Slider.find();
    const services = await Service.find();
    res.render("index", {
        details: details,
        sliders: sliders,
        services: services
    });
});


routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id": "65acc4852eff3550bb4b9ccf" });
    res.render("gallery", { details: details });
});

routes.post("/process-contact-form", async (req, res) => {

    // save data to db
    try {
        const data = await Contact.create(req.body);
        console.log(data);
        res.redirect('/');
    }
    catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


module.exports = routes;