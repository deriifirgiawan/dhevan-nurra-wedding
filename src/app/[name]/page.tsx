"use client";
import React, { useEffect } from "react";
import SectionContent from "@/components/SectionContent/SectionContent";
import WeddingGift from "@/components/WeddingGift/WeddingGift";
import { CountDate } from "@/components/CountDate";
import { Wishes } from "@/components/Wishes";
import Data from "@/data/data.json";
import ListPeople from "@/data/list.json";
import { notFound } from "next/navigation";
import { FullpageSection } from "@/components/FullPageSection/FullPageSection";
import MusicController from "@/components/MusicController/MusicController";

export default function HomePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = React.use(params);

  useEffect(() => {
    const allowed = ListPeople.list.some((person) => person.name === name);

    if (!allowed) {
      notFound();
    }
  }, [name]);
  const listImages = [
    "/images/cover_1.jpg",
    "/images/cover_2.jpg",
    "/images/cover_3.jpg",
    "/images/item_2.jpg",
    "/images/item_3.jpg",
    "/images/item_4.jpg",
  ];

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-100">
      <MusicController />
      <div
        className="
        w-full h-screen bg-white
        md:max-w-sm md:h-[720px] md:border md:border-gray-300 md:rounded-2xl md:shadow-xl md:overflow-y-auto
      "
      >
        {/* Section 1 */}
        <SectionContent image="/images/cover_1.jpg">
          <FullpageSection>
            <div className="relative top-40 z-10 text-center text-white max-w-lg">
              <div>
                <h1 className="text-3xl font-tangerine">The Wedding Of</h1>
                <h4 className="text-[32px] opacity-90 font-sansita">
                  {Data.name_couple}
                </h4>
                <p className="text-sm font-nunito mt-2 font-normal">
                  Kepada Yth:
                </p>
                <p className="text-sm font-nunito font-normal">
                  {decodeURIComponent(name)}
                </p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => scrollToNext()}
                  className="text-white uppercase font-nunito py-2 px-4 w-full bg-[#CC9767] rounded-lg"
                >
                  open invitation
                </button>
              </div>
            </div>
          </FullpageSection>
        </SectionContent>

        {/* Section 2 */}
        <SectionContent image="/images/cover_2.jpg">
          <FullpageSection>
            <div className="relative bottom-45 z-10 text-center text-white max-w-lg">
              <div>
                <h4 className="text-[24px] opacity-90 font-sansita">
                  Assalamualaikum Wr.Wb
                </h4>
                <p className="text-[14px] font-nunito font-normal mt-4">
                  "{Data.sambutan}"
                </p>
              </div>
            </div>
            <div className="relative top-44 z-10 text-center text-white max-w-lg">
              <div>
                <h4 className="text-[32px] opacity-90 font-sansita">
                  {Data.name_couple}
                </h4>
                <p className="text-[14px] font-nunito font-normal mt-4">
                  "{Data.paragraph}"
                </p>
                <p className="text-[14px] font-nunito font-normal mt-4">
                  {Data.surah}
                </p>
                <p className="text-[16px] font-nunito font-bold mt-6">
                  27.09.2025
                </p>
              </div>
            </div>
          </FullpageSection>
        </SectionContent>

        {/* Section 3 */}
        <SectionContent image="/images/cover_3.jpg">
          <FullpageSection>
            <div className="z-10 text-white max-w-lg flex flex-col justify-between w-full h-screen">
              <div className="p-[14px] rounded-md bg-[#CC9767]/60">
                <h4 className="text-[24px] opacity-90 font-sansita pr-[120px]">
                  Noorazni Alsari Rahmat
                </h4>

                <p className="text-[16px] font-nunito font-normal mt-4">
                  Putri dari:
                </p>
                <p className="text-[14px] font-nunito font-normal">
                  Anak pertama dari Bapak Rachmat & Ibu Ratna Ningsih
                </p>
              </div>

              <div className="p-[14px] rounded-md bg-[#CC9767]/60 mb-[24px]">
                <h4 className="text-[24px] opacity-90 font-sansita pr-[120px]">
                  Dhevan Putra Pamungkas
                </h4>

                <p className="text-[16px] font-nunito font-normal mt-4">
                  Putra dari:
                </p>
                <p className="text-[14px] font-nunito font-normal">
                  Anak ketiga dari Bapak Pendi Rospendi & Ibu Imas Masriah
                </p>
              </div>
            </div>
          </FullpageSection>
        </SectionContent>

        {/* Section 4 */}
        <SectionContent image="/images/cover_4.jpg">
          <FullpageSection>
            <div className="z-10 text-white max-w-lg p-[14px] rounded-md bg-[#CC9767]/60 w-full h-screen">
              <div className="mt-8">
                <h1 className="text-[32px] font-tangerine">Wedding Event</h1>

                <div className="mt-2">
                  <h4 className="text-[32px] opacity-90 font-sansita pr-[120px]">
                    Akad Nikah
                  </h4>

                  <div className="mt-2">
                    <p className="text-[16px] font-nunito mt-4 font-bold">
                      SABTU, 27 September 2025
                      <br />
                      08.00 - SELESAI
                    </p>

                    <p className="text-[14px] font-medium mt-2">
                      JL. Terusan Cikutra Baru No. 24 - 26 (Balai RW 04)
                    </p>
                  </div>

                  <div className="mt-4 bg-[#D9D9D9] w-full h-[163px] rounded-md overflow-hidden">
                    <iframe
                      title="Lokasi Acara"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d107.630000!3d-6.900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6b3f2a1e2d7%3A0xabcdef123456!2sJl.%20Terusan%20Cikutra%20Baru%20No.30%2C%20Bandung!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="mt-2">
                  <h4 className="text-[32px] opacity-90 font-sansita pr-[120px]">
                    Resepsi
                  </h4>

                  <div className="mt-2">
                    <p className="text-[16px] font-nunito mt-4 font-bold">
                      SABTU, 27 September 2025
                      <br />
                      11.00 - 14:00
                    </p>

                    <p className="text-[14px] font-medium mt-2">
                      JL. Terusan Cikutra Baru No. 24 - 26 (Balai RW 04)
                    </p>
                  </div>

                  {/* <div className="mt-4 bg-[#D9D9D9] w-full h-[65px] rounded-md"></div> */}
                  <CountDate />
                </div>
              </div>
            </div>
          </FullpageSection>
        </SectionContent>

        {/* Section 5 */}
        <SectionContent image="/images/cover_5.jpg">
          <FullpageSection>
            <div className="z-10 text-white max-w-lg p-[14px] rounded-md bg-[#CC9767]/60 w-full h-screen">
              <h4 className="text-[32px] opacity-90 font-sansita text-center">
                Our Gallery
              </h4>

              <div className="grid grid-cols-2 gap-2 mt-12">
                {listImages.map((item, index) => (
                  <img
                    alt={item}
                    src={item}
                    key={index}
                    className="bg-[#D9D9D9] w-full h-[175px] rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          </FullpageSection>
        </SectionContent>

        {/* Section 6 */}
        <SectionContent image="/images/item_4.jpg">
          <FullpageSection>
            <WeddingGift />
          </FullpageSection>
        </SectionContent>

        <SectionContent image="/images/cover_7.jpg">
          <FullpageSection>
            <Wishes />
          </FullpageSection>
        </SectionContent>

        <SectionContent image="/images/test.jpg">
          <FullpageSection>
            <div className="relative bottom-60 z-10 text-center text-white max-w-lg">
              <div>
                <p className="text-[14px] font-nunito font-normal mt-4">
                  "{Data.penutup}
                </p>
                <p className="text-[14px] font-nunito font-normal">
                  Wassalamualaikum Wr.Wb"
                </p>
                <h4 className="text-[24px] opacity-90 font-sansita">
                  {Data.name_couple}
                </h4>
              </div>
            </div>
          </FullpageSection>
        </SectionContent>
      </div>
    </div>
  );
}
