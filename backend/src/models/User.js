import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
// Hash password before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

  


userSchema.methods.comparePassword = async function (password) {

  return await bcrypt.compare(password, this.password);

};

userSchema.methods.generateToken = function () {

  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

};

const User = mongoose.model("User", userSchema);

export default User;