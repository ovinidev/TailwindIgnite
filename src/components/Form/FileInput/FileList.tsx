"use client";

import { Cloud, Trash } from "@/components/Icons";
import { useFileInput } from "./Root";
import { bytesToSize } from "@/utils/formatBytes";

export function FileList() {
  const { files, onDeleteFile } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <Cloud className="text-2xl" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {bytesToSize(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="0 h-2 w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button
              onClick={() => onDeleteFile(file.name)}
              type="button"
              className="rounded-md p-2 duration-150 ease-in hover:bg-zinc-50"
            >
              <Trash className="text-xl text-zinc-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
