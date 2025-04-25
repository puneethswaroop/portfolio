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
              src="/1.jpg"
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
            Kyle Galvin is a British photographer in the fashion and beauty
            industry. He has established himself working with some of the most
            influential celebrities and brands across the globe. Graduating from
            the London College of Fashion, the British Journal of Photography
            named him in their
          </div>
          <div className="leading-8 tracking-wide col-span-1 md:col-span-1">
            annual "Ones to Watch" class of 2015. Since then, his advertising
            clients include Armani Beauty, Bvlgari, Carolina Herrera, CHANEL,
            Dior Beauty, Estee Lauder, Fendi and Paco Rabanne. Galvin has both
            produced and been published in internationally recognised
          </div>
          <div className="leading-8 tracking-wide col-span-1 md:col-span-1">
            titles and his credits include Marie Claire, WWD, Glamour Magazine,
            and Grazia, among others. His work oscillates between natural beauty
            and a more hyperreal and surrealist style, with a consistent thread
            of high glamour throughout.
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
