import { DataTable } from "@/components/CDataTable";

import { mockBillboards } from "@/model/mockData";

import { columns } from "./columns";

export const BillboardTable = () => {
  return <DataTable columns={columns} data={mockBillboards} />;
};
