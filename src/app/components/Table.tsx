import React from "react";

const Table = () => {
  return (
    <div className="mt-4 w-full flex flex-col ">
      <div className="-my-2 -mx-4 min-w-full md:overflow-x-auto lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="block overflow-hidden  shadow ring-1 ring-black ring-opacity-5  ">
            <table className="min-w-full divide-y divide-gray-300 ">
            <thead className="sticky top-0 left-0 right-0 bg-[#EEEEEE]">
                hola como estas
            </thead>
            <tbody className=" border border-[#AFAFAF]  bg-white">
                chao me voy 
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
