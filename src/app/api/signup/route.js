import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "../../../config/connectDB";
import User from "../../../models/User";

export const POST = async (request) => {
  const { firstname, lastname, email, phoneNumber, password } =
    await request.json();

  // Basic input validation
  if (!firstname || !lastname || !email || !phoneNumber || !password) {
    return Response.json(
      { message: "All fields are required", success: false },
      { status: 200 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json(
      { message: "Invalid email format", success: false },
      { status: 200 }
    );
  }

  if (password.length < 6) {
    return Response.json(
      { message: "Password must be at least 6 characters", success: false },
      { status: 200 }
    );
  }

  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return Response.json(
      { message: "Email is already in use", success: false },
      { status: 200 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    firstname,
    lastname,
    email,
    phoneNumber,
    password: hashedPassword
  });

  try {
    await newUser.save();
    return Response.json(
      { message: "User is registered", success: true },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "Server error", success: false },
      { status: 200 }
    );
  }
};
