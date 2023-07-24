import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import CollegeCard from "./CollegeCard";
import Reveal from "react-awesome-reveal";

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchColleges();
  }, [currentPage]);

  const fetchColleges = async () => {
    try {
      const response = await axios.get(
        `https://college-booker.vercel.app/all-colleges?pageNumber=${currentPage}&limit=3`
      );
      const { colleges, totalPages } = response.data;
      setColleges(colleges);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages === 0) return null;

    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

    for (
      let i = startPage;
      i <= totalPages && pageNumbers.length < maxPagesToShow;
      i++
    ) {
      pageNumbers.push(i);
    }

    return (
      <ul className="flex justify-center space-x-2 my-4">
        {currentPage > 1 && (
          <li>
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
        )}

        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`pagination-btn ${
                page === currentPage ? "text-orange-500" : " text-gray-800"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li>
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    );
  };

  return (
    <div>
      <SectionTitle title="Just For You"></SectionTitle>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {colleges.map((college, index) => (
          <Reveal
            key={college._id}
            cascade
            damping={0.1}
            direction="up"
            duration={500}
            delay={index * 100}
          >
            <CollegeCard college={college} />
          </Reveal>
        ))}
      </div>

      {renderPagination()}
    </div>
  );
};

export default CollegeList;
