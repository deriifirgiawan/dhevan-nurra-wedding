import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import moment from "moment";

interface Wish {
  name: string;
  message: string;
  createdAt: string;
}

export const Wishes = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const [comments, setComments] = useState<Wish[]>([]);

  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.description) return;

    const res = await fetch("/api/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, message: form.description }),
    });

    const data = await res.json();
    if (data.success) {
      setComments((prev) => [...prev, data.wish]);
      setForm({ name: "", description: "" });
    }
  };

  return (
    <div className="z-10 text-white max-w-lg w-full h-screen">
      <div className="p-[14px] rounded-md bg-[#CC9767]/60 h-full flex flex-col">
        <h4 className="text-[24px] opacity-90 font-sansita pr-[120px]">
          Wishes
        </h4>
        <p className="text-[14px] font-nunito font-normal mt-4">
          Ucapkan Selamat & Do’a Restu kepada kedua mempelai untuk hari bahagia
          mereka melalui kolom berikut:
        </p>

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
          <Button className="mt-4" onClick={handleSubmit}>
            Kirim
          </Button>
        </div>

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
                <p className="text-xs text-gray-500 mt-1">
                  {moment(comment.createdAt).format("MM/DD/YYYY HH:mm")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
