"use client";

import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

interface WatchDemoModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function WatchDemoModal({
  open,
  onClose,
  title = "Product Demo",
}: WatchDemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between bg-[#7141F8] px-6 py-4">
          <DialogTitle className="text-base font-semibold text-white">
            {title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close modal"
            className="text-white/80 hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </Button>
        </DialogHeader>

        {/* Video placeholder */}
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-5 bg-[#1D2939] px-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7141F8]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white">
              Demo video coming soon
            </p>
            <p className="mt-1 text-xs text-[#98A2B3]">
              The video link will be added here when available
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end bg-[#F9FAFB] px-6 py-3">
          <Button
            onClick={onClose}
            className="bg-[#7141F8] px-5 py-2 text-sm font-medium text-white hover:bg-[#8760f8]"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
