import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useEditMarkerModal } from "@/hooks/useEditMarkerModal";
import { useMarkerStore } from "@/hooks/useMarkerStore";

import { toast } from "sonner";

export const EditMarkerModal = () => {
  const markerId = useEditMarkerModal((state) => state.id);
  const editMarkerModal = useEditMarkerModal();

  const markerStore = useMarkerStore();
  const categories = useMarkerStore((state) => state.categories);

  const markerInfo = markerStore.getMarkerById(markerId ?? "");

  const handleClose = () => {
    editMarkerModal.onClose();
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title");
    const lat = formData.get("latitude");
    const long = formData.get("longitude");
    const categoryId = formData.get("category");

    if (!markerInfo) return;

    const marker = {
      title: String(title),
      lat: Number(lat),
      lng: Number(long),
      companyId: null,
      id: markerInfo.id,
    };

    const success = markerStore.updateMarker(marker);
    if (success) {
      toast.success(`Update marker with title: ${marker.title}`);
      handleClose();
    } else {
      toast.error(`Error update marker with title: ${marker.title}`);
    }
  };

  return (
    <Dialog open={!!markerId} onOpenChange={handleClose}>
      <DialogContent className="z-modal sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Marker</DialogTitle>
          <DialogDescription>Fill the latitude and longitude</DialogDescription>
        </DialogHeader>
        {markerInfo && (
          <form action={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title:
                </Label>
                <Input
                  required
                  defaultValue={markerInfo.title}
                  id="title"
                  name="title"
                  placeholder="Coffee shop"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="latitude" className="text-right">
                  Latitude:
                </Label>
                <Input
                  required
                  defaultValue={markerInfo.lat}
                  id="latitude"
                  name="latitude"
                  placeholder="10.80"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="longitude" className="text-right">
                  Longitude:
                </Label>
                <Input
                  required
                  defaultValue={markerInfo.lng}
                  id="longitude"
                  name="longitude"
                  placeholder="106.71"
                  className="col-span-3"
                />
              </div>
              {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="longitude" className="text-right">
                  Category:
                </Label>
                <Select
                  name="category"
                  defaultValue={markerInfo.companyId ?? ""}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="z-menu">
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="empty">No Category</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
            <DialogFooter>
              <Button type="submit">Update</Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
