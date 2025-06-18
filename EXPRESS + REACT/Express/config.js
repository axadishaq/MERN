const moogoose = require("mongoose");

moogoose
   .connect(
      "mongodb conntection string/MyProducts"
   )
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });
