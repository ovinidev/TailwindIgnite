import { Button } from "@/components/Button";
import { Cloud, Trash } from "@/components/Icons";
import { useFileInput } from "./Root";
import { bytesToSize } from "@/utils/formatBytes";
import { BiCheckCircle } from "react-icons/bi";

interface FileItemProps {
  name: string;
  size: number;
}

export function FileItem({ name, size }: FileItemProps) {
  const { onDeleteFile } = useFileInput();
  const state = "complete" as "progress" | "error" | "complete";

  return (
    <div
      key={name}
      className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
    >
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <Cloud className="text-2xl" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-700">{name}</span>
          <span className="text-sm text-zinc-500">{bytesToSize(size)}</span>
        </div>

        <div className="flex w-full items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-zinc-100">
            <div
              className="0 h-2 w-4/5 rounded-full bg-violet-600"
              style={{
                width: state === "complete" ? "100%" : "80%",
              }}
            />
          </div>
          <span className="text-sm font-medium text-zinc-700">
            {state === "complete" ? "100%" : "80%"}
          </span>
        </div>
      </div>

      {state === "complete" ? (
        <BiCheckCircle className="fill-violet-700 text-2xl text-white" />
      ) : (
        <Button
          variant="ghost"
          onClick={() => onDeleteFile(name)}
          type="button"
        >
          <Trash className="text-xl text-zinc-500" />
        </Button>
      )}
    </div>
  );
}
