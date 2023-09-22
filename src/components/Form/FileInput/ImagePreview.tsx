"use client";
import { User } from "@/components/Icons";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput();

  // Só irá recalcular a url de preview apenas quando os arquivos mudarem
  const previewURL = useMemo(() => {
    if (files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      {previewURL ? (
        <img
          src={previewURL}
          alt="preview"
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <User className="text-3xl text-violet-500" />
      )}
    </div>
  );
}
