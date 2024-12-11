import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { Slash } from "lucide-react";
import { DataTable } from "../ui/datatable";
import { getUserBoard } from "@/services/user.service";
import {
  columns,
  dummyDataList,
} from "@/components/admin-management/Columns.tsx";
import { AccountProps } from "@/lib/interface";
const AccountList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const userData = getUserBoard();
    if (userData) setUserList(userData);
  }, []);
  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="px-8">
      <div className="py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Account List Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <DataTable columns={columns} data={dummyDataList}></DataTable>
    </div>
  );
};

export default AccountList;
