import Link from "next/link";
import Image from "next/image";

export default function AndroidDownload() {
  return (
    <>
      <div>
        <h2 className="text-[#ffeb9e] text-center text-xl uppercase font-[900] py-2">
          অ্যান্ড্রয়েড ডাউনলোড অ্যাপ
        </h2>
        <div className="px-4">
          <div className="mb-4">
            <h3 className="py-5 flex items-center gap-2">
              <span className="text-[#ffeb9e] font-bold text-2xl">1</span>
              <span className="text-md">
                লিঙ্কটি কপি করে গুগলে পেস্ট করুন।
              </span>
            </h3>
            <div className="rounded-md">
              <Image
                src="/img/paste_google.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 1"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div>
            <h3 className="py-4 flex items-center gap-2 leading-5">
              <span className="text-[#ffeb9e] font-bold text-2xl">2</span>
              <span className="text-md">
                আপনি অ্যাপ ডাউনলোড পৃষ্ঠাটি খুঁজে পাবেন
              </span>
            </h3>
          </div>
          <div>
            <h3 className="pb-5 flex items-center gap-2 leading-5">
              <span className="text-[#ffeb9e] font-bold text-2xl">3</span>
              <span className="text-md">Install এ ক্লিক করুন।</span>
            </h3>
            <div className="rounded-md mb-2">
              <Image
                src="/img/pbc-install_2.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 2"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="rounded-md mt-8">
              <Image
                src="/img/play_button_bangla.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 3"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="py-5 mt-4">
            <Link href="https://www.goglekhplaystore.com/3552958708/3552958708_download.html?index=TT9pVbeq&tplhx=1&link_id=L2508193655155921683980169410">
              <Image
                src="/img/button_android2.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="Step 3"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <div className="pb-10">
            <div className="mt-10 py-2 flex items-center justify-center border-y-1 border-gray-300/50">
              <p>PBC88 @ 2026 | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
