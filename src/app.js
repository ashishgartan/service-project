console.log("app started");
const express = require("express");
const app = express();
const routes = require("./routes/main");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const bodyParser = require("body-parser");

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/myproject1")
    .then(() => {
        console.log("database connected at 27017");

        //     Service.create([{
        //         icon: 'fa-solid fa-swatchbook',
        //         title: 'Provide best course',
        //         description:'We provide best courses that help students in placements.',
        //         linkText: 'https://www.kuk.ac.in',
        //         link: 'click'
        //     },
        //     {
        //         icon: '<fa-solid fa-layer-group',
        //         title: 'Learn Coding',
        //         description:'We provide best courses that help students in placements.',
        //         linkText: 'https://www.kuk.ac.in',
        //         link: 'click'
        //     },
        //     {
        //         icon: 'fa-solid fa-cubes',
        //         title: 'Provide best course',
        //         description:'We provide best courses that help students in placements.',
        //         linkText: 'https://www.kuk.ac.in',
        //         link: 'click'
        //     }
        // ]);
        // Slider.create([{
        //     title: "Learn Java in easy manner",
        //     subTitle: "Java for web and application development",
        //     imageUrl: "/static/img/comp1.jpg"
        // },{
        //     title: "Learn C++ in easy manner",
        //     subTitle: "C++ for game development",
        //     imageUrl: "/static/img/pad.jpg"
        // },{
        //     title: "Learn C# in easy manner",
        //     subTitle: "C# for window applications",
        //     imageUrl: "/static/img/slider.jpg"
        // }]);

        // Detail.create({
        //     brandName: "Ultra Rod tec solution",
        //     brandIconUrl: "https://cdn-icons-png.flaticon.com/512/5651/5651266.png",
        //     links: [{
        //         label: "Home",
        //         url: "/",
        //     },
        //     {
        //         label: "Services",
        //         url: "/services",
        //     },
        //     {
        //         label: "Gallery",
        //         url: "/gallery",
        //     },
        //     {
        //         label: "About",
        //         url: "/about",
        //     },
        //     {
        //         label: "Contact Us",
        //         url: "/contact-us",
        //     },]
        // })
        //     .then((createdDetail) => {
        //         console.log("Detail created:", createdDetail);
        //     })
        //     .catch((error) => {
        //         console.error("Error creating Detail:", error);
        //     });
    })
    .catch((err) => {
        console.log(err);
    });
// /static/img/sample.png
app.use("/static", express.static("public"));

app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use("", routes);
//template engines
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");


app.listen(process.env.PORT || 5556, () => {
    console.log("server started at 5556");
});