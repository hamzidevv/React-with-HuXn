import Deduplication from "./components/Deduplication";
import FetchMultipleEndpoints from "./components/FetchMultipleEndpoints";
import MutatingData from "./components/MutatingData";
import Pagination from "./components/Pagination";
import RefetchInterval from "./components/RefetchInterval";
import StaleTime from "./components/StaleTime";
import WithoutTanstackQuery from "./components/WithoutTanstackQuery";
import WithTanstackQuery from "./components/WithTanstackQuery";

const App = () => {
  return (
    <>
      {/* <WithoutTanstackQuery />
      <WithTanstackQuery /> */}
      {/* <Deduplication />
      <Deduplication /> */}
      {/* <StaleTime /> */}
      {/* <RefetchInterval /> */}
      {/* <FetchMultipleEndpoints /> */}
      {/* <MutatingData /> */}
      <Pagination />
    </>
  );
};
export default App;
