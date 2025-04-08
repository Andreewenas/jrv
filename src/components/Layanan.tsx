import React from "react";
import { HoverEffect } from "UI/card-hover-effect";  

const projects = [
    {
      title: "Repair Velg",  
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",    
    },
    {
      title: "Custom Velg",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Las Aluminium",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Custom PCD",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
        title: "Custom Spacer Nok",
        description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
    {
      title: "Powder Coating",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Sand Blasting",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
        title: "Vapor Blasting",
        description:
          "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
  ];

const Layanan: React.FC = () => {
  return (
    <section id="" className="min-h-screen">
        <h1 className="font-neuebold font-extrabold text-black text-6xl text-center mb-4 pt-24">Layanan kami</h1>
        <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </section>
  );
};

export default Layanan;
