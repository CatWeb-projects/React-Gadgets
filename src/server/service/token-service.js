import { model } from 'mongoose';
import jwt from 'jsonwebtoken';
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

  validateAccessToken: (token) => {
    try {
      const UserData = jwt.verify(token, 'jwt-secret-key');
      return UserData;
    } catch (e) {
      return null;
    }
  },

  validateRefreshToken: (token) => {
    try {
      const UserData = jwt.verify(token, 'jwt-refresh-key');
      return UserData;
    } catch (e) {
      return null;
    }
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
  },

  removeToken: async (refreshToken) => {
    const TokenInfo = model('Token', TokenModel);
    const tokenData = await TokenInfo.deleteOne({ refreshToken });
    return tokenData;
  },

  findToken: async (refreshToken) => {
    const TokenInfo = model('Token', TokenModel);
    const tokenData = await TokenInfo.findOne({ refreshToken });
    return tokenData;
  }
};
