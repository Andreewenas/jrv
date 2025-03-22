import React, { useState } from "react";
import { FloatingNav } from "UI/floating-navbar";
import { BlurFade } from "UI/blur-fade";
import { TextAnimate } from "UI/t-animated"; 
import { GridPattern } from "UI/grid-p";
import ShinyText from "UI/shinytext";
import StarBorder from "UI/startborder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Profil", link: "/profil" },
    { name: "Layanan", link: "/layanan" },
    { name: "Waktu Buka", link: "/waktu-buka" },
  ]; 

  return (
    <div className="overflow-x-hidden bg-[#040607] min-h-screen">
      <FloatingNav navItems={navItems} />
      <header className="md:py-4">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <TextAnimate animation="blurIn" delay={0.2}>
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex rounded outline-none">
                  <img className="w-auto h-[50px] sm:h-[60px]" src="/images/logo.png" alt="" />
                </a>
              </div>
            </TextAnimate>

            <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16 xl:mr-16">
              {['Home', 'Profil', 'Layanan', 'Waktu Buka', 'Lokasi'].map((item) => (
                <a key={item} href="#" className="text-base font-medium text-gray-100 hover:text-opacity-50">
                  {item}
                </a>
              ))}
          </div>
          </div>
        </div>
      </header>

      <div className="relative min-h-screen">
  <GridPattern width={140} height={140} x={-5} y={-10} strokeDasharray="4 2" strokeWidth="1" className="inset-0 max-h-[32rem]" />
  <BlurFade delay={0.15} inView>
  <section className="pt-20 sm:pt-24">
  {/* Bagian tombol - Penyesuaian untuk mobile */}
  <div className="flex justify-center items-center mb-4">
  <StarBorder
  as="button"
  className="custom-class"
  color="white"
  speed="5s">
<ShinyText text="JOGJA RESTORASI VELG" disabled={false} speed={3} className='custom-class font-neuebold font-extrabold' />
</StarBorder>
  
  </div>
  
  {/* Bagian teks utama - Penyesuaian ukuran font untuk mobile */}
  <div className="flex justify-center items-center">
    <div className="mx-auto max-w-8xl px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="max-w-7xl font-neuebold font-extrabold text-white leading-tight text-2xl sm:text-5xl md:text-6xl lg:text-7xl">
          Reparasi dan Modifikasi Velg Terbaik untuk Mobil Anda
        </p>
      </div>
    </div>
  </div>
</section>

  </BlurFade>
</div>
    </div>
  );
};

export default Navbar;
