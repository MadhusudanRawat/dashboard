import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "../../../config/connectDB";

const tableData = [
  {
    id : "1",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "2",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "3",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "4",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "5",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "6",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "7",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "8",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "9",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "10",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "11",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "12",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "13",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "14",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
  },
  {
    id : "15",
    col1: "Column 1 Data",
    col2: "Column 2 Data",
    col3: "Column 3 Data",
    col4: "Column 4 Data",
    col5: "Column 5 Data"
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
