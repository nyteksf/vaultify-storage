import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex flex-col max-h-[800px] max-w-[430px] justify-center space-y-12">
          <Image
            src="/assets/icons/logo-full-2.svg"
            alt="logo image"
            width={224}
            height={82}
            className="h-auto transition hover:brightness-[98%]"
          />

          <div className="space-y-5 text-white">
            <h1 className="h1">Organize &amp; Manage Your Files Seamlessly</h1>
            <p className="body-1">
              Store, Share, & Access Your Files Anytime, Anywhere
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/assets/icons/logo-full-2-brand"
            alt="logo"
            width={224}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
