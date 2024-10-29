"use client";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { useEffect, useState } from "react";

const logoVariants = cva(["font-extrabold"]);

const AppLogo = ({ ...props }) => {
  const [logoSrc, setLogoSrc] = useState("/img/logo/logo-small.svg");
  const [logoSize, setLogoSize] = useState({ width: 41, height: 34 }); // Default size

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 640) {
        // Tailwind's sm: breakpoint
        setLogoSrc("/img/logo/logo-small.svg"); // Set small logo image
        setLogoSize({ width: 41, height: 34 }); // Set small logo size
      } else if (window.innerWidth < 768) {
        // Tailwind's md: breakpoint
        setLogoSrc("/img/logo/logo-small.svg"); // Set medium logo image
        setLogoSize({ width: 41, height: 34 }); // Set small logo size
      } else {
        setLogoSrc("/img/logo/Logo blue.svg"); // Set default large logo image
        setLogoSize({ width: 239, height: 36 }); // Set default logo size
      }
    };

    // Set initial logo based on the current window size
    updateLogo();

    // Add event listener to handle window resize
    window.addEventListener("resize", updateLogo);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateLogo);
  }, []);

  return (
    <div className={logoVariants({ className: props.className })}>
      <Image
        src={logoSrc}
        width={logoSize.width}
        height={logoSize.height}
        alt="App Logo"
        unoptimized={true}
      />
    </div>
  );
};

export { AppLogo, logoVariants };
