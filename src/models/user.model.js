import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    email: String,
    password: String
  },
  {
    timestamps: true
  }
)

userSchema.plugin(passportLocalMongoose)

export const User = model('User', userSchema)
