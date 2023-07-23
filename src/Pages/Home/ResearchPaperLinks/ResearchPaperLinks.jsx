import React from "react";
import SectionTitle from "../../Shared/SectionTitle";

const ResearchPaperLinks = ({ colleges }) => {
  return (
    <>
      <SectionTitle title="Recommended Research Papers" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colleges?.map((college) => (
          <div
            key={college?._id}
            className="p-4 border border-gray-300 rounded shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{college?.name}</h2>
            <ul className="list-disc pl-5">
              {college?.research_history?.map((paper) => (
                <li
                  key={paper?.research_id}
                  className="text-blue-500 hover:underline"
                >
                  <a
                    href={paper?.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paper?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResearchPaperLinks;
