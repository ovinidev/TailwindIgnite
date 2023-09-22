"use client";
import { ComponentProps, ReactNode, useContext, useId, useState } from "react";
import { createContext } from "react";

interface RootPropsProps extends ComponentProps<"div"> {
  children: ReactNode;
}

interface FileInputContextProps {
  id: string;
  files: File[];
  onFilesSelected: (files: File[]) => void;
}

const FileInputContext = createContext({} as FileInputContextProps);

export function Root({ children, ...props }: RootPropsProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[]) {
    setFiles(files);
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props}>{children}</div>
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
