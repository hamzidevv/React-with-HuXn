import { useEffect, useState } from "react";

const WithoutTanstackQuery = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let rc = false;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        if (rc) return;

        if (!res.ok) {
          throw new Error(`Error fetching data ${res.statusText}`);
        }

        await res.json().then((data) => {
          setData(data);
        });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      rc = true;
    };
  }, [id]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{JSON.stringify(data)}</h1>}
      <br></br>
      <button
        className="px-4 py-2 bg-amber-300 border border-black"
        onClick={() => setId(prevId => prevId + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default WithoutTanstackQuery;
