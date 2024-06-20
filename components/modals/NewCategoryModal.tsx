import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNewCategoryModal } from "@/hooks/useNewCategoryModal";
import { useMarkerStore } from "@/hooks/useMarkerStore";
import { toast } from "sonner";

export const NewCategoryModal = () => {
  const open = useNewCategoryModal((state) => state.open);
  const newMarkerModal = useNewCategoryModal();

  const markerStore = useMarkerStore();

  const handleClose = () => {
    newMarkerModal.onClose();
  };

  const onSubmit = (formData: FormData) => {
    const name = formData.get("name");
    const color = formData.get("color");

    const category = {
      name: String(name),
      color: String(color).toLowerCase(),
    };

    markerStore.addCategory(category);

    toast.success(`Add new category with nam: ${category.name}`);

    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="z-modal sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Category</DialogTitle>
          <DialogDescription>Fill name and color</DialogDescription>
        </DialogHeader>
        <form action={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name:
              </Label>
              <Input
                required
                id="name"
                name="name"
                placeholder="Category name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="color" className="text-right">
                Color:
              </Label>
              <Input
                required
                id="color"
                name="color"
                placeholder="red"
                className="col-span-3"
              />
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
