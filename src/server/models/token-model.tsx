import { Schema } from 'mongoose';

export const TokenModel = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'UserInfo' },
  refreshToken: { type: String, required: true }
});
