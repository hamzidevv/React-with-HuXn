import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    }
  );

  if (!res.ok) throw new Error("Network response was not ok");
  return res.json()
};

const MutatingData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo, Error, Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim() === "") return;

    // Mutate Data -> send Data
    mutate({ title, completed: false });
    setTitle("");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Todo Title"
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {status === "pending" ? "Adding..." : "Add Todo"}
        </button>

        {error && <p className="text-red-500">{error.message}</p>}
        {status === "success" && <p className="text-green-500">Todo added successfully</p>}
      </form>
    </div>
  );
};
export default MutatingData;
