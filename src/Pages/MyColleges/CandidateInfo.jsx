import React, { useEffect, useState } from "react";

const CandidateInfo = ({ candidateEmail, myColleges }) => {
  const [candidateData, setCandidateData] = useState(null);

  useEffect(() => {
    const candidate = myColleges?.find((college) =>
      college.candidate.some((c) => c.candidateEmail === candidateEmail)
    );
    if (candidate) {
      setCandidateData(
        candidate.candidate.find((c) => c.candidateEmail === candidateEmail)
      );
    }
    // Filter the data to find the specific candidate based on their email
  }, [candidateEmail]);

  if (!candidateData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg">Candidate Information</h2>
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={candidateData.image}
          alt={candidateData.candidateName}
        />
        <div>
          <h3 className="text-xl font-semibold">
            {candidateData.candidateName}
          </h3>
          <p className="text-gray-600">{candidateData.subject}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Email: {candidateData.candidateEmail}</p>
        <p>Address: {candidateData.address}</p>
        <p>Date of Birth: {candidateData.dateOfBirth}</p>
        <p>Phone Number: {candidateData.phoneNumber}</p>
      </div>
    </div>
  );
};

export default CandidateInfo;
