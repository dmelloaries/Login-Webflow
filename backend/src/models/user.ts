import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

// Interface for the User
interface UserX extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  comparePassword(enteredPassword: string): Promise<boolean>;
}

// User schema
const userSchema: Schema<UserX> = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing middleware
userSchema.pre("save", async function (next) {
  const user = this as UserX;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<UserX>("User", userSchema);

export default User;
