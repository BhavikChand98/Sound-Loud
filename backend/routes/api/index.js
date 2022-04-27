// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// // Test Route
// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
//* Similar to pokedex practice
const discoverRouter = require("./discover");
router.use("/discover", discoverRouter);











module.exports = router;

//! References for testing Authentication
// //* Testing Auth Middleware Routes
// //* Test Set Token Cookie
// // GET /api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// //* Test Restore User
// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// //* Test Require Auth
// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
// //* Testing Auth Middleware Routes End

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });