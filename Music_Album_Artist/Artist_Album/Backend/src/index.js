const express=require("express");

const songcontroller=require("./controllers/song.controller")
const albumcontroller=require("./controllers/album.controller")
//const {register, login} = require("./controllers/auth.controller")
const userController=require("./controllers/user.controller")
const app=express();

app.use(express.json());


//const passport = require("./configs/passport")




// app.use(passport.initialize());

// passport.serializeUser(function({user, token}, done) {
//     done(null, {user, token});
// });
  
// passport.deserializeUser(function({user, token}, done) {
//     done(err, {user, token});
// });

// app.get("/auth/google/failure", function(req, res) {
//     return res.send("Something went wrong");
// })

// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         failureRedirect: '/auth/google/failure'
// }), function(req, res) {
//     const {user, token} = req.user
//     return res.status(200).json({user, token });
// });

app.use("/register", userController);
// app.post("/login", login);
app.use("/albums",albumcontroller)


app.use("/songs",songcontroller)


module.exports = app;