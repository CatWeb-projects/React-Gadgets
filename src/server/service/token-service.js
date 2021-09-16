import { verify } from 'jsonwebtoken';
import { TokenModel } from '../models/token-model';

export const TokenService = {
  generateTokens: (payload) => {
    const accessToken = verify(payload, 'jwt-secret-key', { expiresIn: '30m' });
    const refreshToken = verify(payload, 'jwt-refresh-key', {
      expiresIn: '30d'
    });
    return {
      accessToken,
      refreshToken
    };
  },

  saveToken: async (userId, refreshToken) => {
    const tokenData = await TokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
  }
};
