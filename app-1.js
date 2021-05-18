const express = require("express"); // library || initializing express
const logger = require("morgan"); // initializing morgan || morgan grabs specific incoming data
const path = require("path"); // path returns a huge object - has a method called join

const app = express(); // calling express


app.set("views", path.join(__dirname, "views")); //views refers to the folder inside our vs code directory__dirname grabs and displays the path of the directory in terminal
app.set("view engine", "ejs"); //set means i want to use for static file


//middleware - app.use 
app.use(logger("dev")); // middleware: abilities to log out the requests we're making
app.use(express.json()); // w/out this the app doesn't do anything

app.use(express.static(path.join(__dirname, "public")));


//get requests
app.get('/', function(req, res) { // 2nd arg = path / backend API
    res.render("index", {
        user: null,
        teams: [{team: "lakers"}, {team: "knicks"}, {team: "magic"}],
    });
    //req = handles incoming data 
    //res = show data on screen - respond w/ some form of string
    // res.send('hello class'); 
    // res.json({ // below are the most common data types 
    //     name: 'daisy',
    //     friends: ["michael", "ciaran", "celeste"],
    //     food: {
    //         food1: "yogurt",
    //         food2: "quinoa",
    //     },
    //     boolean1: true,
    //     boolean2: false,
    //     number: 123,
    // });
});

app.get("/:product/:id", function (request, response) { //get req 
    console.log(request.params); //given to us by express to extract value of product and id (will pair product:(key) pants: (value) id: (key)to 1(value) || /:product/:id makes it dynamic since we're referring to specifics on a page
    response.json({ // the object is the data for our APIs
        price: 260,
        type: request.params.product,
        id: request.params.id,
    });
});

app.post('/create-product', function(req, res) { // post = create
    console.log(req.body);
    res.json({
        data: req.body,
    });
});
// instead of making 100s of different paths to listen to usin app.get(/), we can make it dynamic by adding parameters to the path("/:product") + console.log(request.params); <- to extract the certain certain product from the object --//-- params is part of express

// app/get("/:product/:id")

app.listen(3000, function(){ // listenening to app on p3000 - hardcode
    console.log(`Server is running on PORT:$(3000)}`); //literal
});

// cmd k - clears screen console while server is running
// cntrl c - turns off server
