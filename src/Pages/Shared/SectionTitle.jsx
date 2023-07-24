import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="my-2 grid justify-center text-center">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="flex justify-center my-2">
        <span className="w-6 bg-blue-500 p-1 rounded-lg"></span>
        <span className="h-full bg-gray-200 p-1 flex-grow"></span>
      </div>

      {subTitle && <h1 className="text-sm font-medium mb-2">{subTitle}</h1>}
    </div>
  );
};

export default SectionTitle;
