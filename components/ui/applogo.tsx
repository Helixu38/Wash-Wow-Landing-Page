import { cva } from "class-variance-authority";
import Image from "next/image";

const logoVariants = cva(["font-extrabold"]);

const AppLogo = ({ ...props }) => (
  // merge props.className with cva
  <div className={logoVariants({ className: props.className })}>
    <Image
      src="/img/logo/Layer 1.png"
      width={239}
      height={36}
      alt="Picture of the author"
    />
  </div>
);

export { AppLogo, logoVariants };
