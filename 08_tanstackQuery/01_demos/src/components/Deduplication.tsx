import { useQuery } from "@tanstack/react-query";

const getRandNum = async () => {
    return Promise.resolve(Math.floor(Math.random() * 100));
}

const Deduplication = () => {
  const { data } = useQuery({ queryKey: ["randNum"], queryFn: getRandNum });

  return <div>Random Number Is: {data}</div>;
};
export default Deduplication;
