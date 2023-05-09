const bcrypt = require('bcrypt');
const { userService } = require('../user-module');
const jwt = require('jsonwebtoken');
const {
  DuplicateException,
  UnauthorizedException,
} = require('../error-handler/http-exceptions');

exports.signUp = async (data) => {
  try {
    // validate email
    const isExists = await userService.getByEmail(data.email);
    if (isExists)
      throw new DuplicateException({ message: 'duplicated resource' });

    //hasing and salting password
    const hashed = await bcrypt.hash(data.password, 10);

    //create user
    const user = await userService.create({ ...data, password: hashed });

    //creat tokens
    const tokens = generateTokens(user.id, user.email);

    //send tokens
    return tokens;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.login = async (data) => {
  try {
    // find user
    const user = await userService.getByEmail(data.email);
    console.log(user);
    if (!user) throw new UnauthorizedException();

    //hasing and salting password
    const match = await bcrypt.compare(data.password, user.password);
    console.log(data.password);

    if (!match) throw new UnauthorizedException();

    //creat tokens
    const tokens = generateTokens(user.id, user.email);
    //send tokens
    return tokens;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function generateTokens(id, email) {
  const access_token = jwt.sign({ id, email }, 'key1', { expiresIn: '1h' });
  return { access_token };
}
