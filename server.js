const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

let houses = [
    {
        "_id":1,
        "name": "Farmhouse",
        "size": 2000,
        "bedrooms": 3,
        "bathrooms": 2.5,
        "features": [
            "wrap around porch",
            "attached garage"
        ],
        "main_image": "farm.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "farm-floor1.webp"
            },
            {
                "name": "Basement",
                "image": "farm-floor2.webp"
            }
        ]
    },
    {
        "_id":2,
        "name": "Mountain House",
        "size": 1700,
        "bedrooms": 3,
        "bathrooms": 2,
        "features": [
            "grand porch",
            "covered deck"
        ],
        "main_image": "mountain-house.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "mountain-house1.webp"
            },
            {
                "name": "Optional Lower Level",
                "image": "mountain-house2.webp"
            },
            {
                "name": "Main Level Slab Option",
                "image": "mountain-house3.jpg"
            }
        ]
    },
    {
        "_id":3,
        "name": "Lake House",
        "size": 3000,
        "bedrooms": 4,
        "bathrooms": 3,
        "features": [
            "covered deck",
            "outdoor kitchen",
            "pool house"
        ],
        "main_image": "farm.webp",
        "floor_plans": [
            {
                "name": "Main Level",
                "image": "lake-house1.webp"
            },
            {
                "name": "Lower Level",
                "image": "lake-house2.webp"
            }
        ]
    }
]

app.get("/api/houses/", (req, res)=>{ //this is the get request, make sure you put this in your front end 
    console.log("in get request");
    res.send(houses);
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});


//when you start you need npm init --yes and npm install express