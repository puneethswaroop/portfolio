import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RelatedItems from "@/components/related-items";
import { getHightLightItems } from "@/lib/data";
import Image from "next/image";

export default async function page() {
  const HightLightItems = await getHightLightItems();

  return (
    <div className="bg-white text-black">
      <Header />
      <div className="px-6 sm:px-20 py-14">
        <div className="px-0 sm:px-20 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {/* Empty div for spacing */}
          <div></div>

          {/* Image Section */}
          <div className="relative aspect-[3/4] overflow-hidden mx-auto md:mx-0 w-full max-w-[400px]">
            <Image
              src="/profile_pic.jpg"
              alt="Puneeth Swaroop Image"
              className="object-cover w-full h-full"
              width={400}
              height={600}
              priority
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <p className="font-semibold">BASED IN INDIA, IN</p>
            {[
              { label: "INSTAGRAM", href: "#" },
              { label: "TWITTER", href: "#" },
              { label: "TIKTOK", href: "#" },
              { label: "MODELS.COM", href: "#" },
              { label: "STUDIO@KYLEGALVIN.COM", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="underline underline-offset-4 flex items-center gap-1 group transition-all duration-300 hover:text-gray-600"
              >
                {item.label}
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Bio Sections */}
          <div className="leading-8 tracking-wide col-span-1 md:col-span-1">
            Crafting Beautiful Experiences
          </div>
          <div className="leading-8 tracking-wide col-span-1 md:col-span-1">
            I’m Puneeth Swaroop, a lifestyle photographer and videographer based
            in Hyderabad. With a passion for storytelling, I have been capturing
            meaningful portraits for years, drawing inspiration from the great
            photographers of our time. My focus lies in revealing the emotions
            and stories behind every face, seizing those fleeting, powerful
            moments that speak volumes.
          </div>
          <div className="leading-8 tracking-wide col-span-1 md:col-span-1">
            In addition to portraiture, I am deeply interested in fashion and
            art photography, continually pushing boundaries to merge creativity
            with authenticity.
          </div>
        </div>

        {/* Highlights Section */}
        <p className="text-2xl md:text-3xl text-center py-10">
          Featured Highlights
        </p>
        <RelatedItems items={HightLightItems} />
      </div>
      <Footer />
    </div>
  );
}
