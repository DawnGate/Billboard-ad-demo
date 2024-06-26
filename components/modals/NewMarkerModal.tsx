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

import { useNewMarkerModal } from "@/hooks/useNewMarkerModal";
import { useMarkerStore } from "@/hooks/useMarkerStore";

import { toast } from "sonner";

export const NewMarkerModal = () => {
  const open = useNewMarkerModal((state) => state.open);
  const newMarkerModal = useNewMarkerModal();

  const markerStore = useMarkerStore();
  const categories = useMarkerStore((state) => state.categories);

  const handleClose = () => {
    newMarkerModal.onClose();
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title");
    const lat = formData.get("latitude");
    const long = formData.get("longitude");
    const categoryId = formData.get("category");

    const marker = {
      title: String(title),
      lat: Number(lat),
      lng: Number(long),
      companyId: null,
    };

    markerStore.addMarker(marker);

    toast.success(`Add new marker with title: ${marker.title}`);

    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="z-modal sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Marker</DialogTitle>
          <DialogDescription>Fill the latitude and longitude</DialogDescription>
        </DialogHeader>
        <form action={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title:
              </Label>
              <Input
                required
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
                id="longitude"
                name="longitude"
                placeholder="106.71"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="longitude" className="text-right">
                Category:
              </Label>
              <Select name="category">
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
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
