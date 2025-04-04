const { verifyUser } = require("../middleware/verifyUser.middleware");
const { verifyToken } = require("../middleware/verifyToken.middleware");
const isAuthenticated = require("../middleware/isAuthenticated.middleware");

//Routes
const testRoutes = require("../routes/test.routes");
const userRoutes = require("../routes/user.routes");
const protectedRoutes = require("../routes/protected.routes");

module.exports = (app) => {
  //Routes
  app.use("/", testRoutes);

  app.use("/auth", userRoutes);

  app.use("/protected", verifyToken, protectedRoutes);
};
