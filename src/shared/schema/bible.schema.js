import * as mongoose from 'mongoose';

const Verse = new mongoose.Schema(
  {
    name: Number,
    text: String,
  },
  { _id: false },
);

const Chapter = new mongoose.Schema(
  {
    name: Number,
    verses: [Verse],
  },
  { _id: false },
);

const Book = new mongoose.Schema(
  {
    name: String,
    order: Number,
    chapters: [Chapter],
  },
  { _id: false },
);

export const Bible = mongoose.model(
  'Bible',
  new mongoose.Schema(
    {
      lang: { type: String, lowercase: true },
      name: { type: String },
      version: { type: String, uppercase: true },
      book: [Book],
    },
    {
      timestamps: true,
    },
  ),
);
