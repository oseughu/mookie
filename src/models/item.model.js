import mongoose from 'mongoose'

const { Schema, model } = mongoose

const itemSchema = new Schema(
  {
    name: String,
    description: String,
    price: String
  },
  {
    timestamps: true
  }
)

const Item = model('Item', itemSchema)

export default Item
