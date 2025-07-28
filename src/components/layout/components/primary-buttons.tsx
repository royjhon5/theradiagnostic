import { Button } from "@/components/ui/button";
import { useMainContext } from "../context/context-provider";
import { ArrowRight } from "lucide-react";

export function PrimaryButton() {
  const { setOpen } = useMainContext();
  return (
    <Button
      className="bg-[#16A7E2] text-white hover:bg-blue-600 cursor-pointer rounded-2xl"
      size="sm"
      onClick={() => setOpen("add")}
    >
      Contat Us <ArrowRight size={14} className="ml-3" />
    </Button>
  );
}
