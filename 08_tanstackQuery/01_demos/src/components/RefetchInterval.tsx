import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const fetchTodo = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
    // refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId <= 200 ? prevId + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <h1>Data</h1>
      <pre className="bg-gray-100 p-4 rounded shadow text-sm text-gray-900">
        {JSON.stringify(data, null, 2)}
      </pre>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4"
        onClick={() =>
          setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))
        }
      >
        Next Todo
      </button>
    </>
  );
};
export default RefetchInterval;
