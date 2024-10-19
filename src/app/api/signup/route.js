import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "../../../config/connectDB";
import User from "../../../models/User";

export const POST = async (request) => {
  const { firstname, lastname, email, phoneNumber, password } =
    await request.json();

    console.log(firstname, lastname, email, phoneNumber, password);
    
  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
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
    return new NextResponse("user is registered", { status: 200 });
  } catch (err) {
    console.log(err);
    
    return new NextResponse(err, {
      status: 500
    });
  }
};
