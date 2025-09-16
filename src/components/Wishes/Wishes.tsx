"use client";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

export const Wishes = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  // Dummy comments
  const comments = [
    {
      name: "Noorazni Alsari",
      message: "Selamat menempuh hidup baru, semoga bahagia selalu!",
    },
    {
      name: "Dhevan Putra",
      message: "Semoga langgeng dan penuh cinta sampai akhir hayat!",
    },
    {
      name: "Nurra Rahmat",
      message: "Doa terbaik untuk kalian berdua, sukses selalu!",
    },
    {
      name: "Rachmat & Ratna",
      message: "Selamat berbahagia, semoga menjadi keluarga sakinah!",
    },
  ];

  return (
    <div className="z-10 text-white max-w-lg w-full h-screen">
      <div className="p-[14px] rounded-md bg-[#CC9767]/60 h-full flex flex-col">
        <h4 className="text-[24px] opacity-90 font-sansita pr-[120px]">
          Wedding Gift
        </h4>
        <p className="text-[14px] font-nunito font-normal mt-4">
          Ucapkan Selamat & Do’a Restu kepada kedua mempelai untuk hari bahagia
          mereka melalui kolom berikut:
        </p>

        {/* Form Input */}
        <div className="mt-4">
          <Input
            className="bg-white text-black"
            placeholder="Nama"
            value={form.name}
            onChange={(val) => setForm({ ...form, name: val.target.value })}
          />
          <Textarea
            className="mt-2 bg-white text-black"
            placeholder="Ucapkan Sesuatu..."
            value={form.description}
            onChange={(val) =>
              setForm({ ...form, description: val.target.value })
            }
          />
          <Button className="mt-4">Kirim</Button>
        </div>

        {/* Dummy Comment List */}
        <div className="mt-6 flex-1 overflow-y-auto">
          <h5 className="text-[16px] font-sansita mb-2">Ucapan Tamu:</h5>
          <div className="space-y-3">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="p-3 rounded-md bg-white/90 text-gray-800"
              >
                <p className="font-bold font-nunito">{comment.name}</p>
                <p className="font-nunito text-sm mt-1">{comment.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
