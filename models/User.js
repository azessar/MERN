const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
      education: {
        type: String,
        required: true
    },
      age: {
        type: String,
        required: true
    },
      politicalLeaning: {
        type: String,
        required: true
    },
      religiousAffilation: {
        type: String,
        required: true
    },
      gender: {
        type: String,
        required: true
    },
      location: {
        type: String,
        required: true
    },
      petChoice: {
        type: String,
        required: true
    },
    takenQuizzes: {
      type: Array, 
      default: []
      },
    createdQuizzes: {
      type: Array, 
      default: []
      },
    answers: {
    type: Array,
    default: []
  },
    ethnicity: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);
