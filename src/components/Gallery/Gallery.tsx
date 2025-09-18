import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryProps {
  listImages: string[];
}
export default function Gallery(_props: GalleryProps) {
  const { listImages } = _props;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? listImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === listImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Gallery */}
      <div className="grid grid-cols-2 gap-2 mt-12">
        {listImages.map((item, index) => (
          <img
            alt={`Gallery image ${index + 1}`}
            src={item}
            key={index}
            onClick={() => openImage(index)}
            className="bg-[#D9D9D9] w-full h-[175px] rounded-md object-cover cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-5xl w-full p-0 bg-transparent border-none"
          title="Gallery"
        >
          <DialogTitle className="sr-only">Gallery</DialogTitle>
          <div className="relative flex items-center justify-center w-full h-[80vh]">
            {/* Close button */}
            <DialogClose className="absolute top-4 right-4 text-black hover:bg-white/20 rounded-full p-2 bg-white">
              <X className="w-6 h-6" />
            </DialogClose>

            {/* Prev button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 text-black hover:bg-white/20 rounded-full bg-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            {/* Image */}
            <img
              src={listImages[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
            />

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 text-black hover:bg-white/20 rounded-full bg-white"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>

          {/* Indicator */}
          <div className="text-center text-white mt-2 opacity-80 text-sm">
            {currentIndex + 1} / {listImages.length}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
