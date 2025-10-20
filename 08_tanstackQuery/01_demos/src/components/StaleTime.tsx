import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const StaleTime = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
    staleTime: 5000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>;
    </>
  );
};
export default StaleTime;
