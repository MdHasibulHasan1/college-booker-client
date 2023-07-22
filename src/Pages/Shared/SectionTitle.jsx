import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subTitle && <h1 className="text-sm font-medium mb-2">{subTitle}</h1>}
    </div>
  );
};

export default SectionTitle;
