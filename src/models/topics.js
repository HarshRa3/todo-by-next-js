// models/Topics.js
import mongoose from 'mongoose';

let Topics;

try {
  Topics = mongoose.model('Topics');
} catch {
  const topicSchema = new mongoose.Schema({
    title: String,
    description: String
  });

  Topics = mongoose.model('Topics', topicSchema);
}

export default Topics;
