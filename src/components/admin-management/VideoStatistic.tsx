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
import { getVideoStatistics } from "@/services/videoStatistic.service";
import { columns } from "@/components/admin-management/VideoStatisticColumns.tsx";
import { formatDuration, formatFileSize } from "@/lib/utils";

import { Input } from "../ui/input";


const VideoStatistic = () => {
  const [streamData, setStreamData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("started_at");
  const [sort, setSort] = useState("DESC");

  useEffect(() => {
    fetchStreamData();
  }, [currentPage, pageSize, sortBy, sort, globalFilter]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const fetchStreamData = async () => {
    try {
      const response = await getVideoStatistics(
        currentPage,
        pageSize,
        sortBy,
        sort,
        globalFilter.trim()
      );
      
      console.log("API Response:", response.data); // Log the response data

      let streams = [];
      if (globalFilter.trim()) {
        streams = Array.isArray(response.data) ? response.data : 
                 (response.data.page ? response.data.page : []);
      } else {
        streams = response.data.page || [];
      }

      if (!streams || !Array.isArray(streams)) {
        console.error("Invalid streams data format:", streams);
        setStreamData([]);
        setTotalPages(1);
        return;
      }

      const transformedStreamData = streams.map((stream: any) => ({
        title: stream.title || '',
        viewers: stream.viewers || stream.live_stream_analytic?.viewers || 0,
        likes: stream.likes || stream.live_stream_analytic?.likes || 0,
        duration: formatDuration(stream.duration || stream.live_stream_analytic?.duration || 0),
        comments: stream.comments || stream.live_stream_analytic?.comments || 0,
        video_size: formatFileSize(stream.video_size || stream.live_stream_analytic?.video_size || 0),
        created_at: formatDate(stream.started_at),
      }));

      setStreamData(transformedStreamData);

      const totalItems = globalFilter.trim()
        ? streams.length 
        : response.data.total_items || streams.length;

      console.log("totalItemsLength", totalItems);
      setTotalPages(Math.ceil(totalItems / pageSize));
    } catch (error) {
      console.error("Error fetching stream data:", error);
      setStreamData([]);
      setTotalPages(1);
    }
  };

  const handleSearch = (value: string) => {
    setGlobalFilter(value);
    setCurrentPage(1);
  };

  const sortKeyMapping: { [key: string]: string } = {
    title: "title",
    viewers: "views",  
    likes: "likes",
    comments: "comments",
    duration: "duration",
    video_size: "video_size",
    created_at: "started_at"
  };

  const handleSortChange = (columnId: string) => {
    if (columnId in sortKeyMapping) {
      const backendSortKey = sortKeyMapping[columnId];
      const isAsc = sortBy === backendSortKey && sort === "DESC";
      setSort(isAsc ? "ASC" : "DESC");
      setSortBy(backendSortKey);
    }
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
              <BreadcrumbPage>Video Statistics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-end items-center py-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search title..."
            value={globalFilter}
            onChange={(e) => handleSearch(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={streamData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        setPageSize={setPageSize}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default VideoStatistic;