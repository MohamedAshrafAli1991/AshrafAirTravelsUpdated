const mongoose = require('mongoose');

const user = mongoose.Schema(
  {
    token: {
      type: String,
      unique: true,
      require: [true, 'token is mandatory'],
    },
    name: {
      type: String,
      nullable: true,
    },
    phoneNumber: {
      type: String,
      require: [true, 'phone number is mandatory'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'employee', 'broker', 'admin', 'superAdmin'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      require: [true, 'isActive is mandatory'],
      default: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
    modifiedBy: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', user);
