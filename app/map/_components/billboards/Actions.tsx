import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { EditIcon, FileUpIcon, PlusIcon, TrashIcon } from "lucide-react";

const ActionButton = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <Button
      className="flex h-auto items-center gap-2 p-1 px-2"
      variant="outline"
    >
      {icon}
      <p className="text-sm">{title}</p>
    </Button>
  );
};
export const Actions = () => {
  return (
    <div className="flex gap-2">
      <ActionButton icon={<PlusIcon size={16} />} title="Add" />
      <ActionButton icon={<EditIcon size={16} />} title="Edit" />
      <ActionButton icon={<TrashIcon size={16} />} title="Delete" />
      <ActionButton icon={<FileUpIcon size={16} />} title="Import Excel" />
    </div>
  );
};
