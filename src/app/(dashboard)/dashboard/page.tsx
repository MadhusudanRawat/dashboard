"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


// const tableData = [
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   },
//   {
//     col1: "Column 1 Data",
//     col2: "Column 2 Data",
//     col3: "Column 3 Data",
//     col4: "Column 4 Data",
//     col5: "Column 5 Data",
//   }
// ]
import toast from "react-hot-toast";

import { useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function DashboardPage() {
  const [tableData, setTableData] = React.useState([])
  const { data: session, status } = useSession(); // Get session data using useSession hook
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // If there's no session, redirect to the homepage
      router.push("/");
    }
    fetch("/api/fetch-data", { method: "GET", }).then(async (res) => {
      const d = await res.json()
      if (d.success) {
        toast.dismiss();
        setTableData(d.data)
      }else{
        toast.error('There is some technical issue Please try after some time!');
      }
    })
  }, [status, router]); // Only run effect when session status changes

  if (status === "loading") {
    toast.loading('Loading...');
    // Optionally, you can show a loading indicator while the session is being fetched
    return <div>Loading...</div>;
  }


  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* <TooltipProvider>
        <div className="flex gap-6 mt-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is-hover-open"
                  onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                  checked={settings.isHoverOpen}
                />
                <Label htmlFor="is-hover-open">Hover Open</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>When hovering on the sidebar in mini state, it will open</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="disable-sidebar"
                  onCheckedChange={(x) => setSettings({ disabled: x })}
                  checked={settings.disabled}
                />
                <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hide sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider> */}
      <Card className="rounded-lg border-none mt-6">
        <CardContent className="p-6">
          <div className="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
            {status && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Row 1</TableHead>
                    <TableHead>Row 2</TableHead>
                    <TableHead>Row 3</TableHead>
                    <TableHead className="">Row 4</TableHead>
                    <TableHead className="">Row 5</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((table: any) => (
                    <TableRow key={table?.id}>
                      <TableCell className="font-medium">{table?.col1}</TableCell>
                      <TableCell>{table.col2}</TableCell>
                      <TableCell>{table.col3}</TableCell>
                      <TableCell className="">{table.col4}</TableCell>
                      <TableCell className="">{table.col5}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
