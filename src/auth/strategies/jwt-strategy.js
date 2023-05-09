const JwtStrategy = require('passport-jwt').Strategy;
const { fromAuthHeaderAsBearerToken } = require('passport-jwt').ExtractJwt;
const { userService } = require('../../user-module');
module.exports = function (passport) {
  const opts = {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: 'key1',
  };
  return passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await userService.findOne(jwt_payload.id);
        return done(null, user);
      } catch (error) {
        done(error);
      }
    })
  );
};
