import React from "react";
import { inter } from "next/font/google";
import { Package2 } from "lucide-react";
import { ChartLine } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Users } from "lucide-react";
import { Settings } from "lucide-react";
import Image from "next/image";

const sidebar = () => {
  return (
    <div className="h-200 w-50 border-2 border-solid border-neutral-100">
      {/* <h1 className="text-4xl font-bold">sidebar</h1> */}
      <section className="mt-5 h-20">
        <h1 className="tracking-tighter ml-6 font-inter text-xl font-bold mb-1">
          Webbutiken
        </h1>
        <h4 className="tracking-tighter mb-5 ml-6 w-60 font-stretch-normal text-xs font-inter text-purple-600 ">
          Admin panel
        </h4>
        <hr className="border-b-2 border-solid border-neutral-100" />
      </section>
      <section className="h-155">
        <nav>
          <ul className="m-4">
            <li className="transition-colors transition-duration-500 text-purple-600 pl-3 pt-0.5 flex-auto justify-center text-justify justify-items-center h-8 mb-1 mt-0 hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white active:bg-purple-600 active:text-white rounded-md">
              <Package2 className="flex-auto justify-center justify-items-center text-center bg-inherit text-inherit w-4 h-4 mr-2 inline hover:text-inherit" />
              <span className="tracking-tighter text-xs flex-auto justify-center justify-items-center text-center bg-inherit text-inherit ml-2 font-inter hover:text-inherit">
                Products
              </span>
            </li>
            <li className="transition-colors transition-duration-500 text-purple-600 pl-3 h-8 mb-1 pt-0.5 hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white active:bg-purple-600 active:text-white rounded-md">
              <ChartLine className="bg-inherit text-inherit w-4 h-4 mr-2 inline" />
              <span className="tracking-tighter text-xs bg-inherit text-inherit ml-2 font-inter">
                Analytics
              </span>
            </li>
            <li className="transition-colors transition-duration-500 text-purple-600 pl-3 h-8 hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white active:bg-purple-600 active:text-white rounded-md mb-1 pt-0.5">
              <ShoppingCart className="bg-inherit text-inherit w-4 h-4 mr-2 inline" />
              <span className="tracking-tighter text-xs bg-inherit text-inherit ml-2 font-inter">
                Orders
              </span>
            </li>
            <li className="transition-colors transition-duration-500 text-purple-600 pl-3 h-8 hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white active:bg-purple-600 active:text-white rounded-md mb-1 pt-0.5">
              <Users className=" bg-inherit text-inherit w-4 h-4 mr-2 inline" />
              <span className="tracking-tighter text-xs bg-inherit text-inherit ml-2 font-inter">
                Customers
              </span>
            </li>
            <li className="pt-0.5 pl-3 h-8 transition-colors transition-duration-500 hover:bg-purple-600 hover:text-white text-purple-600 focus:bg-purple-600 focus:text-white active:bg-purple-600 active:text-white rounded-md">
              <Settings className="bg-inherit text-inherit w-4 h-4 mr-2 inline" />
              <span className="tracking-tighter text-xs bg-inherit text-inherit ml-2 font-inter">
                Settings
              </span>
            </li>
          </ul>
        </nav>
      </section>
      <hr className=" border-b-2 border-solid border-neutral-100" />
      <section className="m-0 p-0">
        {/* <Image
          src="../public/assets/user-avatar-placeholder.png"
          alt="user avatar"
          width={20}
          height={20}
          loading="eager"
          preload={true}
          sizes="(max-width: 50px) 100vw, (max-width: 70px) 50vw, 33vw"
        /> */}
        <div className="flex justify-items-center text-start items-center ml-2 mt-2 mr-0 mb-0 p-0">
          <Image
            src="/user-avatar-placeholder.png"
            width={40}
            height={40}
            alt="user avatar"
            className="p-0 m-0 rounded-full cover object-cover transition-duration-500 hover:transition-colors hover:brightness-90"
            // placeholder="blur"
          />
          <div className="ml-2 mr-0 mt-0 mb-0 p-0">
            <h4 className="tracking-tighter font-bold font-inter m-0 p-0 text-sm border-0 border-solid border-gray-500">
              Admin user
            </h4>
            <a
              className="transition-colors transition-duration-500 hover:text-neutral-400 tracking-tighter text-gray-500 font-inter m-0 p-0 text-xs border-0 border-solid border-gray-500"
              href="email:admin@example.com"
            >
              admin@example.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default sidebar;
