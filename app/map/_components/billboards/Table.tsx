import { DataTable } from "@/components/CDataTable";

import { mockBillboards } from "@/model/mockData";

import { columns } from "./columns";

export const Table = () => {
  return <DataTable columns={columns} data={mockBillboards} />;
};
