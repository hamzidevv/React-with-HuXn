import { useEffect, useState } from "react";

type PostType = {
  id: number;
  title: string;
  body: string;
};

const MyComponent = () => {
  const [data, SetData] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await res.json();
        SetData(result);
      } catch (error) {
        console.error("Error Fetching Data: ", { error });
      }
    };

    fetchData();
  }, []);

  return <div>
    {data ? (
        <div>
            <p>ID: {data.id}</p>
            <h2>Title: {data.title}</h2>
            <p>Content: {data.body}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )}
  </div>;
};
export default MyComponent;
