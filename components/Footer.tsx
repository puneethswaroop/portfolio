export default function Footer() {
  return (
    <footer className="bg-white text-black px-4 sm:px-8 md:px-16 lg:px-20 pt-12 lg:pt-20 pb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0 pb-12 lg:pb-20">
        <div className="space-y-2 lg:space-y-4">
          <p className="text-xs sm:text-sm uppercase">
            CONTACT BELOW FOR COLLABORATIONS
          </p>
          <a
            href="mailto:puneethphotography4@gmail.com"
            className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-normal underline underline-offset-8 block transition-all duration-300 hover:text-gray-600 hover:underline-offset-4"
          >
            PUNEETHPHOTOGRAPHY4@GMAIL.COM
          </a>
        </div>
        <div className="text-xs sm:text-sm space-y-4 lg:space-y-6 flex flex-col items-start">
          <a
            href="https://www.instagram.com/puneeth.photography_?igsh=aXdieDY1d3h6MXY4"
            className="underline underline-offset-4 flex items-center gap-1 group transition-all duration-300 hover:text-gray-600"
          >
            INSTAGRAM{" "}
            <span className="inline-block transform no-underline transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
          <a
            href="https://wa.me/message/N5MPMOGSMTIQJ1"
            className="underline underline-offset-4 flex items-center gap-1 group transition-all duration-300 hover:text-gray-600"
          >
            WHATSAPP{" "}
            <span className="inline-block transform no-underline transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm pt-4 border-t border-gray-100">
        <p>© PUNEETH SWAROOP 2025</p>
        <a
          href="#"
          className="underline underline-offset-4 mt-2 sm:mt-0 transition-all duration-300 hover:text-gray-600 hover:underline-offset-2"
        >
          PRIVACY POLICY
        </a>
      </div>
    </footer>
  );
}
