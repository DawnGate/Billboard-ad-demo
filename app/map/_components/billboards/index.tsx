import { BillboardActions } from "./BillboardActions";
import { BillboardTable } from "./BillboardTable";

export const BillboardsTab = () => {
  return (
    <div className="flex flex-1 flex-col rounded-md rounded-b-none bg-white p-1">
      <div className="shrink-0 overflow-x-auto">
        <BillboardActions />
      </div>
      <BillboardTable />
    </div>
  );
};
