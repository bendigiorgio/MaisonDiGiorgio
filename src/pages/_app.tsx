import { type AppType } from "next/dist/shared/lib/utils";
import { Josefin_Sans } from "next/font/google";
import localFont from "next/font/local";

import "~/styles/globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const krylon = localFont({ src: "../../public/fonts/Krylon-Regular.woff2" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --josefin-font: ${josefinSans.style.fontFamily};
            --krylon-font: ${krylon.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
