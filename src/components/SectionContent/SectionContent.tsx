import React from "react";

interface SectionContentProps {
  image: string; // path gambar dari public, contoh: "/bg-1.jpg"
  children?: React.ReactNode; // konten di atas background
  className?: string; // optional tambahan class
}

const SectionContent: React.FC<SectionContentProps> = ({
  image,
  children,
  className,
}) => {
  return (
    <section
      className={`
        relative w-full min-h-screen bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center p-[16px]
        ${className || ""}
      `}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay hitam transparan biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten di atas background */}

      {children}
    </section>
  );
};

export default SectionContent;
