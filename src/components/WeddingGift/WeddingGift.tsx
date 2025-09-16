"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function WeddingGift() {
  const [rekening, setRekening] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCopy = async () => {
    if (rekening) {
      await navigator.clipboard.writeText(rekening);
      setAlertMessage(`Nomor rekening ${rekening} berhasil disalin ✅`);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // auto hide 3 detik
    } else {
      setAlertMessage("Silahkan pilih rekening terlebih dahulu ⚠️");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="z-10 text-white max-w-lg flex flex-col justify-end w-full h-screen">
      <div className="p-[12px] rounded-md bg-[#CC9767]/60">
        <h4 className="text-[24px] opacity-90 font-sansita pr-[120px]">
          Wedding Gift
        </h4>
        <p className="text-[14px] font-nunito font-normal mt-4">
          Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan
          hadiah kepada kedua mempelai, silahkan pilih rekening di bawah ini:
        </p>

        {/* Select Input + Button */}
        <div className="mt-4 flex gap-1">
          <Select onValueChange={(value) => setRekening(value)}>
            <SelectTrigger className="w-full bg-white/90 text-gray-800 font-nunito">
              <SelectValue placeholder="-- Pilih Rekening / E-Wallet --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1310018568321">
                Mandiri - 1310018568321 (Noorazni Alsari)
              </SelectItem>
              <SelectItem value="8320424144">
                BCA - 8320424144 (Noorazni Alsari)
              </SelectItem>
              <SelectItem value="8320392013">
                BCA - 8320392013 (Dhevan Putra)
              </SelectItem>
              <SelectItem value="9938078235">
                Permata - 9938078235 (Dhevan Putra)
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleCopy}
            className="bg-[#CC9767] hover:bg-[#b8804e] text-white px-4"
          >
            Salin
          </Button>
        </div>

        {/* Alert */}
        {showAlert && (
          <Alert className="mt-4">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
