import { model } from 'mongoose';
import { UserModel } from '../models/user-model';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from './mail-service';
import { TokenService } from './token-service';

export const UserService = {
  registration: async (email, password) => {
    const UserInfo = model('UserInfo', UserModel);
    const candidate = await UserInfo.findOne({ email });
    if (candidate) {
      throw new Error(`User with this ${email} already exists`);
    }
    if (!password) {
      throw new Error(`Please insert a password`);
    }
    const hashPassword = bcrypt && (await bcrypt.hash(password, 3));
    const activationLink = uuidv4();
    const user = await UserInfo.create({
      email,
      password: hashPassword,
      activationLink: activationLink
    });
    await MailService.sendActivationMail(email, activationLink);
    const tokens = await TokenService.generateTokens({ ...user });
    user && (await TokenService.saveToken(user.id, tokens.refreshToken));

    return {
      ...tokens,
      user
    };
  },

  login: async (email, password) => {
    const UserInfo = model('UserInfo', UserModel);
    const user = email && (await UserInfo.findOne({ email }));
    if (!user) {
      throw Error('User with this email not found');
    }
    const checkPassMatch = await bcrypt.compare(password, user.password);
    if (!checkPassMatch) {
      throw Error('Password does not match');
    }
    const tokens = user && (await TokenService.generateTokens({ ...user }));
    user && (await TokenService.saveToken(user.id, tokens.refreshToken));

    return {
      ...tokens,
      user
    };
  },

  logout: async (refreshToken) => {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  },

  refresh: async (refreshToken) => {
    if (!refreshToken) {
      throw Error(401, 'User is not authorized');
    }

    const userData =
      refreshToken && (await TokenService.validateRefreshToken(refreshToken));
    const tokenFromDB =
      refreshToken && (await TokenService.findToken(refreshToken));
    if (!userData || !tokenFromDB) {
      throw Error(401, 'User is not valid');
    }

    const UserInfo = model('UserInfo', UserModel);
    const user = await UserInfo.findById(userData._doc);
    user &&
      tokenFromDB &&
      (await TokenService.saveToken(user._id, tokenFromDB.refreshToken));

    return {
      refreshToken: tokenFromDB.refreshToken,
      user: user
    };
  }
};
