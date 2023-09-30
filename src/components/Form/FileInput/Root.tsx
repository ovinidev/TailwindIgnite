"use client";
import { ComponentProps, ReactNode, useContext, useId, useState } from "react";
import { createContext } from "react";

interface RootPropsProps extends ComponentProps<"div"> {
  children: ReactNode;
}

interface FileInputContextProps {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], isMultiple: boolean) => void;
  onDeleteFile(name: string): void;
}

const FileInputContext = createContext({} as FileInputContextProps);

export function Root({ children, ...props }: RootPropsProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], isMultiple: boolean) {
    if (isMultiple) {
      return setFiles((prevState) => [...prevState, ...files]);
    }

    setFiles(files);
  }

  function onDeleteFile(name: string) {
    setFiles((prevState) => prevState.filter((file) => file.name !== name));
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onDeleteFile }}
    >
      <div {...props}>{children}</div>
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
