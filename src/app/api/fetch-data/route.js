import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "../../../config/connectDB";

const tableData = [
  {
    id: "1",
    date: "2024-10-01",
    username: "john_doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890"
  },
  {
    id: "2",
    date: "2024-10-02",
    username: "jane_smith",
    email: "jane.smith@example.com",
    phoneNumber: "234-567-8901"
  },
  {
    id: "3",
    date: "2024-10-03",
    username: "mike_jones",
    email: "mike.jones@example.com",
    phoneNumber: "345-678-9012"
  },
  {
    id: "4",
    date: "2024-10-04",
    username: "linda_green",
    email: "linda.green@example.com",
    phoneNumber: "456-789-0123"
  },
  {
    id: "5",
    date: "2024-10-05",
    username: "paul_walker",
    email: "paul.walker@example.com",
    phoneNumber: "567-890-1234"
  },
  {
    id: "6",
    date: "2024-10-06",
    username: "amy_brown",
    email: "amy.brown@example.com",
    phoneNumber: "678-901-2345"
  },
  {
    id: "7",
    date: "2024-10-07",
    username: "david_wilson",
    email: "david.wilson@example.com",
    phoneNumber: "789-012-3456"
  },
  {
    id: "8",
    date: "2024-10-08",
    username: "emma_thomas",
    email: "emma.thomas@example.com",
    phoneNumber: "890-123-4567"
  },
  {
    id: "9",
    date: "2024-10-09",
    username: "chris_martin",
    email: "chris.martin@example.com",
    phoneNumber: "901-234-5678"
  },
  {
    id: "10",
    date: "2024-10-10",
    username: "nina_clark",
    email: "nina.clark@example.com",
    phoneNumber: "012-345-6789"
  },
  {
    id: "11",
    date: "2024-10-11",
    username: "jack_kelly",
    email: "jack.kelly@example.com",
    phoneNumber: "123-456-7891"
  },
  {
    id: "12",
    date: "2024-10-12",
    username: "olivia_james",
    email: "olivia.james@example.com",
    phoneNumber: "234-567-8902"
  },
  {
    id: "13",
    date: "2024-10-13",
    username: "ryan_harris",
    email: "ryan.harris@example.com",
    phoneNumber: "345-678-9013"
  },
  {
    id: "14",
    date: "2024-10-14",
    username: "sophia_evans",
    email: "sophia.evans@example.com",
    phoneNumber: "456-789-0124"
  },
  {
    id: "15",
    date: "2024-10-15",
    username: "liam_bell",
    email: "liam.bell@example.com",
    phoneNumber: "567-890-1235"
  },
  {
    id: "16",
    date: "2024-10-16",
    username: "grace_lewis",
    email: "grace.lewis@example.com",
    phoneNumber: "678-901-2346"
  },
  {
    id: "17",
    date: "2024-10-17",
    username: "alex_moore",
    email: "alex.moore@example.com",
    phoneNumber: "789-012-3457"
  },
  {
    id: "18",
    date: "2024-10-18",
    username: "mia_wilson",
    email: "mia.wilson@example.com",
    phoneNumber: "890-123-4568"
  },
  {
    id: "19",
    date: "2024-10-19",
    username: "noah_adams",
    email: "noah.adams@example.com",
    phoneNumber: "901-234-5679"
  },
  {
    id: "20",
    date: "2024-10-20",
    username: "ava_perez",
    email: "ava.perez@example.com",
    phoneNumber: "012-345-6780"
  },
  {
    id: "21",
    date: "2024-10-21",
    username: "james_scott",
    email: "james.scott@example.com",
    phoneNumber: "123-456-7892"
  }
];


export const GET = async (request) => {
  try {
    return Response.json(
      {
        message: "Fetched Data",
        success : true,
        data: tableData
      },
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(err, {
      status: 500
    });
  }
};
