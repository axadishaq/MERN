const moogoose = require("mongoose");

moogoose
   .connect(
      "mongodb+srv://axadishaqofficial:mxa0DRGDhac80Pt4@cluster0.jelct1a.mongodb.net/MyProducts"
   )
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });
