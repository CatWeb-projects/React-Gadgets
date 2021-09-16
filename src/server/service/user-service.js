import { model } from 'mongoose';
import { UserModel } from '../models/user-model';
import { bcrypt } from 'bcrypt';
import { uuid } from 'uuid';
import { MailService } from './mail-service';
import { TokenService } from './token-service';

export const UserService = {
  registration: async (email, password) => {
    const UserInfo = model('UserInfo', UserModel);
    const candidate = await UserInfo.findOne({ email });
    if (candidate) {
      throw new Error(`User with this ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 3);
    console.log(password, 'pass');
    const activationLink = uuid.v4();
    const user = await UserInfo.create({
      id,
      email,
      password: hashPassword,
      activationLink
    });
    await MailService.sendActivationMail(email, activationLink);
    const tokens = await TokenService.generateTokens({ ...user });
    await tokenService.saveToken(user.id, tokens.refreshToken);

    return {
      ...tokens
    };
  }
};
