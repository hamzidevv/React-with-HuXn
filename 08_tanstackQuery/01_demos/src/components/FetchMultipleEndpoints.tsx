import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

const baseUrl = "https://jsonplaceholder.typicode.com";

const fetchTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  // Using useQueries to fetch from multiple endpoints
  const results = useQueries({
    queries: [
      {
        queryKey: ["todos"],
        queryFn: fetchTodos,
      },
      {
        queryKey: ["posts"],
        queryFn: fetchPosts,
      },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading)
    return <div>Loading...</div>;

  if (todosQuery.error || postsQuery.error)
    return (
      <div>
        An error occurred:
        {todosQuery.error?.message || postsQuery.error?.message}
      </div>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  // Handle button clicks to fetch specific todos and posts
  const handleNextTodoClick = () => {
    setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const handleNextPostClick = () => {
    setCurrentPostId((prevId) => Math.min(prevId + 1, postsData.length));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Todos</h2>
        <pre className="bg-gray-100 p-4 rounded shadow text-sm text-gray-900 whitespace-pre-line">
          {JSON.stringify(
            todosData.find((todo: any) => todo.id === currentTodoId),
            null,
            2
          )}
        </pre>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4"
          onClick={handleNextTodoClick}
        >
          Next Todo
        </button>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-bold">Posts</h2>
        <pre className="bg-gray-100 p-4 rounded shadow text-sm text-gray-900 whitespace-pre-line">
          {JSON.stringify(
            postsData.find((post: any) => post.id === currentPostId),
            null,
            2
          )}
        </pre>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4"
          onClick={handleNextPostClick}
        >
          Next Post
        </button>
      </div>
    </div>
  );
};

export default FetchFromMultipleEndpoints;
