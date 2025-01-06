import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { getAccountLog } from "@/services/user.service";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/date-formated";

const AccountLog = () => {
  const [logData, setlogData] = useState([]);
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("ASC");
  const [sort_by, setSort_by] = useState("performed_at");
  const [keyword, setKeyword] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchData();
  }, [pageSize, currentPage, sort, sort_by, keyword]);
  const fetchData = async () => {
    try {
      const response = await getAccountLog(
        currentPage,
        pageSize,
        sort_by,
        sort,
        keyword
      );
      setlogData(response.data.data.page);
      setCurrentPage(response.data.data.current_page);
      setTotalPages(response.data.data.length);
    } catch (error) {
      toast({
        description: "Failed to fetch account log data.",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Account Log Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex w-[180px]">
        <Input placeholder="Search..." />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>
                <Label>Date</Label>
              </TableCell>
              <TableCell>
                <Label>User</Label>
              </TableCell>
              <TableCell>
                <Label>Action</Label>
              </TableCell>
              <TableCell>
                <Label>Details</Label>
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logData && logData.length > 0 ? (
              logData.map((log: any) => (
                <TableRow key={log.id}>
                  <TableCell>{formatDate(log.performed_at, true)}</TableCell>
                  <TableCell>{log.user.username}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.details}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  No account list available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="grid my-4 gap-4 grid-cols-2">
        <div className="max-w-[80px]">
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => setPageSize(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue defaultValue="5" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row justify-end items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </Button>
          <Label>Page</Label>
          <Input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="max-w-[80px]"
          />
          <Label>of {totalPages}</Label>
          <Button
            variant="outline"
            className="px-4 py-2"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountLog;
