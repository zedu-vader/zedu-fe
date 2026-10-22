"use client";

import React, { useState } from "react";
import { FileUp, FolderPlus, RotateCcw, Upload } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const EmptyState = ({
  icon,
  title,
  description,
  children,
}: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center text-center py-14">
    <div className="size-24 rounded-full bg-primary-50 flex items-center justify-center">
      {icon}
    </div>
    <p className="mt-5 text-xl font-semibold text-[#344054]">{title}</p>
    <p className="mt-1 text-sm text-[#667085] max-w-[320px]">{description}</p>
    {children}
  </div>
);

interface FoldersEmptyStateProps {
  onCreateFolder: () => void;
}

export const FoldersEmptyState = ({
  onCreateFolder,
}: FoldersEmptyStateProps) => (
  <EmptyState
    icon={<FolderPlus className="size-10 text-primary-500" strokeWidth={1.5} />}
    title="No folders yet"
    description="Organize your files into folders so your team can find things faster"
  >
    <Button
      onClick={onCreateFolder}
      className="mt-5 bg-[#7141f8] text-white hover:bg-[#7141f8]/90"
    >
      <FolderPlus size={16} className="mr-2" />
      New Folder
    </Button>
    <p className="mt-3 text-xs text-[#667085]">
      Creates a folder in &apos;All files&apos; — you can move files into it
      anytime.
    </p>
  </EmptyState>
);

interface FilesEmptyStateProps {
  onUploadClick: () => void;
  onFilesDropped: (files: File[]) => void;
}

export const FilesEmptyState = ({
  onUploadClick,
  onFilesDropped,
}: FilesEmptyStateProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <EmptyState
      icon={<FileUp className="size-10 text-primary-500" strokeWidth={1.5} />}
      title="No files yet"
      description="Upload your first file or drag it here so your team can find it faster"
    >
      <Button
        onClick={onUploadClick}
        className="mt-5 bg-[#7141f8] text-white hover:bg-[#7141f8]/90"
      >
        <Upload size={16} className="mr-2" />
        Upload File
      </Button>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsDragOver(false);
          }
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          if (e.dataTransfer.files.length > 0) {
            onFilesDropped(Array.from(e.dataTransfer.files));
          }
        }}
        className={cn(
          "mt-6 w-full max-w-md rounded-xl border-2 border-dashed px-6 py-8 text-sm transition-colors",
          isDragOver
            ? "border-primary-500 bg-primary-50 text-primary-500"
            : "border-[#D0D5DD] text-[#667085]"
        )}
      >
        Drag &amp; drop files anywhere in this area
      </div>
    </EmptyState>
  );
};

interface FetchErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const FetchErrorState = ({ message, onRetry }: FetchErrorStateProps) => (
  <div className="flex flex-col items-center justify-center text-center py-14">
    <p className="text-base font-semibold text-[#344054]">{message}</p>
    <p className="mt-1 text-sm text-[#667085]">
      Check your connection and try again.
    </p>
    <Button
      variant="outline"
      onClick={onRetry}
      className="mt-4 border-[#BABAFB] text-[#5F5FE1] hover:bg-[#F6F7F9]"
    >
      <RotateCcw size={14} className="mr-2" />
      Retry
    </Button>
  </div>
);

export default EmptyState;
