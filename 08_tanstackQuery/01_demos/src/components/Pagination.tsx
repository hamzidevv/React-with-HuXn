import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async (page = 1, limit = 10) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );

  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage, pageSize),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePrevPageClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPageClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button className="mr-2 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50" onClick={handlePrevPageClick} disabled={currentPage === 1}>
          Prev Page
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleNextPageClick}>Next Page</button>
      </div>
    </div>
  );
};
export default Pagination;
