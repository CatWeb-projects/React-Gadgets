import jwt from 'jsonwebtoken';
import { model } from 'mongoose';
import { TokenModel } from '../models/token-model';

export const TokenService = {
  generateTokens: (payload) => {
    const accessToken = jwt.sign(payload, 'jwt-secret-key', {
      expiresIn: '30m'
    });
    const refreshToken = jwt.sign(payload, 'jwt-refresh-key', {
      expiresIn: '30d'
    });
    return {
      accessToken,
      refreshToken
    };
  },

  saveToken: async (userId, refreshToken) => {
    const TokenInfo = model('Token', TokenModel);
    const tokenData = await TokenInfo.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenInfo.create({ user: userId, refreshToken });
    return token;
  }
};
