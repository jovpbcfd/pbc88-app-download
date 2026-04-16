"use client";

import { useState } from "react";
import Image from "next/image";
import AndroidDownload from "./android-download";
import Link from "next/link";

export default function Download() {
  const [selected, setSelected] = useState("android");
  return (
    <div className="text-white md:hidden">
      <div className="space-x-2 flex items-center justify-center flex-row mx-2">
        <button
          type="button"
          className={`${
            selected === "android"
              ? "active-btn text-black shadow-md"
              : "bg-[linear-gradient(135deg,#3e4b7c_0%,#283151_100%)]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-5`}
          onClick={() => setSelected("android")}
        >
          android download
        </button>
        <button
          type="button"
          className={`${
            selected === "ios"
              ? "active-btn text-black shadow-md"
              : "bg-[linear-gradient(135deg,#3e4b7c_0%,#283151_100%)]"
          } uppercase font-semibold rounded-md px-3 py-2 text-pretty text-wrap max-w-xs leading-5`}
          onClick={() => setSelected("ios")}
        >
          pbc88 ios home screen
        </button>
      </div>
      <div>
        {selected === "android" && (
          <div className="pt-5 relative w-full h-auto">
            <AndroidDownload />
          </div>
        )}
        {selected === "ios" && (
          <div className="pt-5 relative w-full h-auto">
            {/* <Image
              src="/img/ios.webp"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Steps for andriod"
            /> */}
            <div>
              <h2 className="text-[#ffeb9e] text-center text-xl  uppercase font-[900] py-2">
                pbc88 আইওএস হোম স্ক্রিন
              </h2>
              <div className="px-4">
                <div className="mb-4">
                  <h3 className="pt-5 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">1</span>
                    <span className="text-md text-balance">
                      আপনার আইওএস ডিভাইসে সাফারি অ্যাপটি চালু করুন এবং এখানে যান
                      <Link
                        href="https://pb888.me/NxZwdc"
                        className="block text-[#ffeb9e]"
                      >
                        https://pb888.me/AGdDMN
                      </Link>
                    </span>
                  </h3>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">2</span>
                    <span className="text-md">
                      "শেয়ার" বোতামটি চাপুন
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/2-IOS1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">3</span>
                    <span className="text-md">
                      'হোম স্ক্রিনে যোগ করুন' নির্বাচন করুন
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/3-IOS1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">4</span>
                    <span className="text-md">
                      "যোগ করুন" বোতামটি চাপুন
                    </span>
                  </h3>
                  <div className="rounded-md">
                    <Image
                      src="/img/4-IOS1.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="Step 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="pb-3 flex items-center gap-2">
                    <span className="text-[#ffeb9e] font-bold text-2xl">5</span>
                    <span className="text-md">
                      অ্যাপটিতে ক্লিক করেই PBC88 দিয়ে খেলা উপভোগ করুন।
                    </span>
                  </h3>
                </div>
              </div>
              <div className="pb-10">
                <div className="mt-10 py-2 flex items-center justify-center border-y-1 border-gray-300/50">
                  <p>PBC88 @ 2026 | All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
