import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4338CA] h-[280px] text-white mt-10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex">
            <Image src={"Whitefilm.svg"} width={20} height={20} alt="" />
            <h2 className="font-bold text-lg">Movie Z</h2>
          </div>
          <p className="text-sm mt-2">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <h3 className="font-semibold text-base mb-3">Contact Information</h3>

          <div className="flex">
            <Image src={"email.svg"} height={20} width={20} alt="" />
            <p>Email: support@movieZ.com</p>
          </div>
          <div className="flex">
            <Image src={"email.svg"} height={20} width={20} alt="" />
            <p>Phone: +976 (11) 123-4567</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-3">Follow us</h3>
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Youtube
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
      </div>
    </footer>
  );
}
