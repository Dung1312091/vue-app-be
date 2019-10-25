import mongoose, { Schema } from 'mongoose';
import  bcrypt from 'bcrypt';
import { STATUS } from '../../constains';

const AdminSchema = new Schema(
  {
    name    : { type: String, required: true },
    email   : { type: String, unique: true, index: true },
    phone   : { type: String, required: true },
    status  : { type: String, required: true, default: STATUS.ACTIVE },
    password: {type: String, required: true, default: "123456"}
  },
  {
    timestamps: true
  }
);

AdminSchema.pre('save', function(next) {
  let admin = this;
  if (!admin.isModified('password')) {
    return next();
  }

  admin.password = admin.generatePassword(admin.password);
  return next();
});

AdminSchema.methods.generatePassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
AdminSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('Admin', AdminSchema);