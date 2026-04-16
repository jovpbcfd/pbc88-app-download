import Image from "next/image";
import Link from "next/link";
import Download from "@/components/download";

export default function Home() {
  return (
    <div>
      {/* mobile */}
      <div className="py-4 md:hidden">
        <h1 className="text-white uppercase font-[900] text-xl text-center">
          আজই আপনার ফোনে PBC88 অ্যাপটি ডাউনলোড করুন।
        </h1>
        <p className="mt-2 text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          এখন ডাউনলোড করুন এবং উপভোগ করুন
        </p>
      </div>
      {/* web */}
      <div className="hidden my-10 md:block">
        <h1 className="text-white uppercase font-[900] text-[38px]/10 text-center">
          আমাদের PBC88 মোবাইল অ্যাপ এখনই ডাউনলোড করুন
        </h1>
        <p className="mt-2 text-3xl text-[#ffeb9e] text-md italic text-center font-bold uppercase">
          PBC88 এর সাথে রোমাঞ্চকর অভিজ্ঞতা উপভোগ করুন!
        </p>
      </div>
      <Download />
      <div className="hidden max-w-[1230px] mx-auto mt-10 md:px-5 md:block">
        <div className="flex items-center justify-center gap-10">
          <div className="">
            <Image
              src="/img/Join-pbc.webp"
              width={300}
              height={300}
              alt="Join now"
              className=""
            />
          </div>
          <div className="w-[50%] text-white text-center">
            <p className="font-bold text-[26px] text-pretty mb-5">
              লক্ষ লক্ষ খেলোয়াড়ের সাথে যোগ দিন এবং অসংখ্য গেম উপভোগ করুন যা আপনার হাতের নাগালে!
            </p>
            <p className="font-bold text-[26px] text-pretty">
              প্রতিদিন আকর্ষণীয় পুরস্কার! মজা করে খেলুন এবং জিতুন।
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-[#ffeb9e] text-center uppercase text-[36px]/10 font-[900] text-pretty">
            এখনই PBC88 মোবাইল অ্যাপ ডাউনলোড করুন এবং খেলা শুরু করুন!
          </h2>
          <div className="flex items-center justify-center mt-15 gap-10">
            <div className="flex flex-col items-center">
              <Image
                src="/img/android-qr-code.png"
                width={300}
                height={300}
                alt="QR Android"
                className="mb-5 rounded-xl border-4 border-yellow-400"
              />
              <Link href="https://pbc88.com/bd/en/app-download">
                <Image
                  src="/img/Android_download_button_bang.webp"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/IOS-qr.jpg"
                width={300}
                height={300}
                alt="QR ios"
                className="mb-5 rounded-xl border-4 border-yellow-400"
              />
              <Link href="https://pb888.me/AGdDMN">
                <Image
                  src="/img/IOS_home_screen_button_bang.webp"
                  width={400}
                  height={130}
                  alt="Step 3"
                  // sizes="100vw"
                  // style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center pb-10">
          <Image
            src="/img/websitelower_BANG.png"
            width={0}
            height={0}
            alt="Step 3"
            sizes="100vw"
            style={{ width: "85%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
