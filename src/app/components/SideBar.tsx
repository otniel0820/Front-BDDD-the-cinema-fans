import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex">
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Image
            alt="Logo"
            className="rounded-lg"
            height="80"
            src="https://i.ibb.co/RzstWGb/Logo-cinema-online.jpg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="80"
          />
          <Link
            className="text-2xl font-bold text-white hover:text-gray-300"
            href="/"
          >
            TCF
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                className="text-white hover:text-gray-300 block py-2.5 px-4 rounded transition duration-200"
                href="/user"
              >
                Users
                
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-300 block py-2.5 px-4 rounded transition duration-200"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
