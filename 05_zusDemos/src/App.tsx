// // import { useCounter } from "./store";
// import ExpenseTracker from "./components/ExpenseTracker";
// import RecipeApp from "./components/RecipeApp";
// import useStore from "./store";

// const App = () => {
//   // const count = useCounter((state) => state.count);
//   // const {count, increment, decrement} = useCounter((state) => state);
//   // const {count, increment, decrement} = useCounter();

//   return (
//     <div>
//       {/* <h1>count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button> */}
//       {/* <RecipeApp /> */}
//       <ExpenseTracker />
//     </div>
//   );
// };
// export default App;

// Task List
// import Sidebar from "./components/TodoList/Sidebar";
// import MainArea from "./components/TodoList/MainArea";
// import Modal from "./components/TodoList/Modal";
// import { useStore } from "./store";
// import { MdMoreVert } from "react-icons/md";

// function App() {
//   const {
//     todos,
//     editIndex,
//     editText,
//     dropdownIndex,
//     handleEdit,
//     handleUpdate,
//     handleDropdownClick,
//     deleteTodo,
//     setEditText,
//     setEditIndex,
//   } = useStore();

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 p-6">
//         <MainArea />
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold mb-4 ml-[2rem]">Todo List</h2>
//           <ul className="list-disc pl-5">
//             {todos.map((todo, index) => (
//               <li key={index} className="mb-2 ml-[2rem]">
//                 {editIndex === index ? (
//                   <div className="flex items-center">
//                     <input
//                       type="text"
//                       value={editText}
//                       onChange={(e) => setEditText(e.target.value)}
//                       className="border border-gray-300 p-1 rounded-lg mr-2"
//                     />
//                     <button
//                       onClick={() => handleUpdate(index)}
//                       className="bg-green-500 text-white px-2 py-1
//                        rounded-lg mr-2"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => setEditIndex(null)}
//                       className="bg-gray-500 text-white px-2 py-1
//                        rounded-lg"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="relative flex justify-between items-center">
//                     <div>
//                       <span className="mr-4">
//                         <strong>{todo.text}</strong> (List: {todo.list},
//                         Workspace: {todo.workspace})
//                       </span>
//                     </div>
//                     <div className="flex items-center">
//                       <MdMoreVert
//                         onClick={() => handleDropdownClick(index)}
//                         size={24}
//                         className="cursor-pointer"
//                       />
//                       {dropdownIndex === index && (
//                         <div
//                           className="absolute right-0 mt-2 bg-white
//                          border rounded shadow-lg"
//                         >
//                           <button
//                             onClick={() => handleEdit(index)}
//                             className="block px-4 py-2 text-gray-700
//                              hover:bg-gray-100 w-full text-left"
//                           >
//                             Update
//                           </button>
//                           <button
//                             onClick={() => deleteTodo(index)}
//                             className="block px-4 py-2 text-gray-700
//                              hover:bg-gray-100 w-full text-left"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <Modal />
//     </div>
//   );
// }

// export default App;

// Quiz
// import QuizLayout from "./components/Quiz/QuizLayout";

// function App() {
//   return (
//     <div className="App">
//       <QuizLayout />
//     </div>
//   );
// }

// export default App;

// Watch Store
import ProductCard from "./components/WatchStore/ProductCard";
import { data } from "./db/data";
import Sidebar from "./components/WatchStore/Sidebar";
import { useFilterStore } from "./store";

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
}

const App = () => {
  const { selectedCountries, selectedColors, selectedPriceRange } =
    useFilterStore((state) => state);

  const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry = 
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });

  return (
    <>
      <Sidebar />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default App;