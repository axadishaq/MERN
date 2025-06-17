// module.exports = reqFilter = (req, res, next) => {
//    if (!req.query.age) {
//       res.send("Enter Age");
//    } else if (req.query.age < 18) {
//       res.send("Can't access!");
//    } else if (req.query.age > 18) {
//       res.send("C!");
//    } else {
//       next();
//    }
// };

// middleware.js
const reqFilter = (req, res, next) => {
   const age = parseInt(req.query.age, 10); // Convert string to number

   if (!req.query.age) {
      res.send("Enter Age!");
   } else if (isNaN(age)) {
      res.send("Age must be a number!");
   } else if (age < 18) {
      res.send("Can't access!");
   } else {
      next();
   }
};

module.exports = reqFilter;
