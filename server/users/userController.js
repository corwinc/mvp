// var User = require('./userModel.js');

// module.exports = {

//   signin: function(req, res, next) {
//     // request will include username, password
//     console.log('signin request: ', req);
//     var username = req.body.username;
//     var password = req.body.password;
//     // run check if username and password match:
//     User.findOne({'username': username}, function(err, user) {
//       if (err) { return handleError(err)};
//       console.log('%s is a %s', user.password);
//     })
//     .then(function(user) {
//       if (!user) {
//         next(new Error('user does not exist'))
//       } else {
//         // return result of compare password function
//         // then: with foundUser boolean(?): create token and send
//       }
//     })
//     // query db for user
//     // if passwords, with hash, are similar: route to movies page
//     // else keep on sign in and show error
//     // else
//       // return next(new Error('no user'));
//     .fail(function(error) {
//       next(error);
//     })
//   }, 

//   signup: function(req, res, next) {

//   }, 

//   checkAuth: function(req, res, next) {
    
//   }

// };