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
  }
};
