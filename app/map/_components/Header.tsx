import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon } from "lucide-react";

interface Props {
  height: number;
}

export const Header = ({ height }: Props) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container">
        <div
          className="flex items-center"
          style={{
            height: height,
          }}
        >
          <div className="flex items-center gap-2">
            <Button size="icon">
              <MenuIcon />
            </Button>
            <div className="font-semibold">
              <p>Genie OOH</p>
            </div>
          </div>
          <div className="ml-auto">
            <div className="flex items-center space-x-4">
              <Input placeholder="Search" />
              <Avatar className="border border-primary">
                <AvatarImage
                  src="https://github.com/Dawngate.png"
                  alt="@DawnGate"
                />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
