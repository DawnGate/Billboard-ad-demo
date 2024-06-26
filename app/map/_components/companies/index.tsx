import { Actions } from "./Actions";
import { Table } from "./Table";

export const CompaniesTab = () => {
  return (
    <div className="flex flex-1 flex-col rounded-md rounded-b-none bg-white p-1">
      <div className="shrink-0 overflow-x-auto">
        <Actions />
      </div>
      <Table />
    </div>
  );
};
