import { useBillboardStore } from "@/hooks/useBillboardStore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { mockBillboards } from "@/model/mockData";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export const BillboardDetailSheet = () => {
  const billboardId = useBillboardStore((state) => state.billBoardId);
  const selectBillboard = useBillboardStore((state) => state.selectBillboard);

  const foundBillboard = mockBillboards.find(
    (billboard) => billboard.id === billboardId,
  );

  const open = !!billboardId && !!foundBillboard;

  const onOpenChange = () => {
    selectBillboard(null);
  };

  const isBooking = foundBillboard?.booking ? true : false;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="z-sidebar w-[250px]">
        <SheetHeader>
          <SheetTitle>{foundBillboard?.name}</SheetTitle>
          <SheetDescription>
            Location: {foundBillboard?.location}
          </SheetDescription>
        </SheetHeader>
        <div className="relative h-40 w-full">
          <Image alt="Billboard" src="/billboard-demo.webp" fill />
        </div>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Status:</p>
            <Badge
              variant={isBooking ? "default" : "secondary"}
              className={cn(
                isBooking && "bg-green-500 text-white hover:bg-green-500",
              )}
            >
              {isBooking ? "booking" : "available"}
            </Badge>
          </div>
          {isBooking && (
            <div className="flex items-center gap-2 text-sm">
              <p className="font-semibold">Company booked:</p>
              <p
                style={{
                  color: foundBillboard?.booking?.company.color,
                }}
              >
                {foundBillboard?.booking?.company.name}
              </p>
            </div>
          )}
          <div className="flex items-center gap-2">
            <p className="font-semibold">Cost:</p>
            <p>{foundBillboard?.cost} $</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
