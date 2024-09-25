import { cva } from "class-variance-authority";
import Image from "next/image";

const logoVariants = cva(["font-extrabold"]);

const AppLogoFooter = ({ ...props }) => (
  // merge props.className with cva
  <div className={logoVariants({ className: props.className })}>
    <Image
      src="/img/logo/WhiteLogo.png"
      width={398}
      height={60.99}
      alt="Picture of the author"
    />
  </div>
);

export { AppLogoFooter, logoVariants };
