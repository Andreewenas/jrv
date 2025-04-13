import React from "react";
import { AnimatedTooltip } from "UI/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Aji Nurhaji",
    designation: "Owner",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Ferry Wenas",
    designation: "Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const Profile: React.FC = () => {
  return (
    <div>
      <section id="header" className="bg-white min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-2xl relative">
                {/* Image container */}
                <div className="relative">
                  <img
                    src="/images/bengkel.jpg"
                    alt="Gambar Perusahaan"
                    className="w-full h-auto rounded-3xl object-cover shadow-black shadow-sm border border-black/80"
                  />
                  
                  {/* Gradient overlay - now inside the same container as the image */}
                  <div className="absolute left-0 right-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-black to-transparent h-1/3">
                    {/* Empty div to ensure gradient shows properly */}
                  </div>
                </div>
                
                {/* Tooltip container - now with z-index to ensure it stays on top */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                  <div className="flex flex-row items-end justify-center mb-6 w-full">
                    <div className="overflow-visible py-2 w-full flex justify-center">
                      <AnimatedTooltip items={people} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Teks */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 ">
              <h1 className="font-neuebold font-extrabold text-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 text-center lg:text-left">
                Profil Perusahaan
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-center lg:text-left">
                Kami adalah perusahaan yang berdedikasi untuk memberikan solusi terbaik bagi pelanggan kami. Dengan tim yang berpengalaman dan teknologi terkini, kami siap membantu Anda mencapai tujuan bisnis Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, itaque eius et excepturi quasi architecto vitae, pariatur voluptate, eligendi magnam deserunt eaque placeat officiis impedit sequi facere nemo culpa! Lorem
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;