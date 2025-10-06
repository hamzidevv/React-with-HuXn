import { create } from "zustand";
import { persist } from "zustand/middleware";

// ------------------ Demo ------------------
// type CounterStore = {
//     count: number;
//     increment: () => void;
//     decrement: () => void;
// }

// export const useCounter = create<CounterStore>((set) => ({
//     count: 0,
//     increment: () => set(state => ({count: state.count + 1})),
//     decrement: () => set(state => ({count: state.count - 1}))

// }))

// ------------------ Recipe ------------------
// interface Recipe {
//   id: number;
//   name: string;
//   ingredients: string[];
//   instructions: string;
// }

// interface RecipeStore {
//   recipes: Recipe[];
//   addRecipe: (recipe: Recipe) => void;
//   removeRecipe: (id: number) => void;
// }

// const useStore = create<RecipeStore>()(
//   persist( // save to local storage
//     (set) => ({
//       recipes: [],
//       addRecipe: (recipe) =>
//         set((state) => ({
//           recipes: [...state.recipes, recipe],
//         })),
//       removeRecipe: (id) =>
//         set((state) => ({
//           recipes: state.recipes.filter((recipe) => recipe.id !== id),
//         })),
//     }),
//     {
//       name: "recipes", // key for local storage
//     }
//   )
// );

// export default useStore;

// ------------------ Expense ------------------
// interface Expense {
//   id: number;
//   description: string;
//   amount: number;
// }

// interface ExpenseStore {
//   expenses: Expense[];
//   addExpense: (expense: Expense) => void;
//   removeExpense: (id: number) => void;
// }

// const useStore = create<ExpenseStore>((set) => ({
//   expenses: [],
//   addExpense: (expense) =>
//     set((state) => ({
//       expenses: [...state.expenses, expense],
//     })),
//   removeExpense: (id) =>
//     set((state) => ({
//       expenses: state.expenses.filter((expense) => expense.id !== id),
//     })),
// }));

// export default useStore;

// ------------------ Todo List ------------------
// interface List {
//   name: string;
//   emoji: string;
// }

// interface Workspace {
//   name: string;
//   emoji: string;
// }

// interface Todo {
//   text: string;
//   list: string;
//   workspace: string;
// }

// interface AppState {
//   lists: List[];
//   workspaces: Workspace[];
//   todos: Todo[];
//   editIndex: number | null;
//   editText: string;
//   dropdownIndex: number | null;
//   isListModalOpen: boolean;
//   isWorkspaceModalOpen: boolean;
//   selectedList: string;
//   selectedWorkspace: string;
//   todoText: string;
//   modalName: string;
//   modalEmoji: string;
//   modalType: "List" | "Workspace" | null;
//   addList: (name: string, emoji: string) => void;
//   addWorkspace: (name: string, emoji: string) => void;
//   addTodo: (todo: Todo) => void;
//   updateTodo: (index: number, updatedTodo: Todo) => void;
//   deleteTodo: (index: number) => void;
//   handleEdit: (index: number) => void;
//   handleUpdate: (index: number) => void;
//   handleDropdownClick: (index: number) => void;
//   setEditText: (text: string) => void;
//   setEditIndex: (index: number | null) => void;
//   openListModal: () => void;
//   closeListModal: () => void;
//   openWorkspaceModal: () => void;
//   closeWorkspaceModal: () => void;
//   setSelectedList: (list: string) => void;
//   setSelectedWorkspace: (workspace: string) => void;
//   setTodoText: (text: string) => void;
//   handleAddTodo: () => void;
//   setModalName: (name: string) => void;
//   setModalEmoji: (emoji: string) => void;
//   setModalType: (type: "List" | "Workspace") => void;
//   handleSaveModal: () => void;
// }

// export const useStore = create<AppState>((set) => ({
//   lists: [],
//   workspaces: [],
//   todos: [],
//   editIndex: null,
//   editText: "",
//   dropdownIndex: null,
//   isListModalOpen: false,
//   isWorkspaceModalOpen: false,
//   selectedList: "",
//   selectedWorkspace: "",
//   todoText: "",
//   modalName: "",
//   modalEmoji: "",
//   modalType: null,
//   addList: (name, emoji) =>
//     set((state) => ({
//       lists: [...state.lists, { name, emoji }],
//     })),
//   addWorkspace: (name, emoji) =>
//     set((state) => ({
//       workspaces: [...state.workspaces, { name, emoji }],
//     })),
//   addTodo: (todo) =>
//     set((state) => ({
//       todos: [...state.todos, todo],
//     })),
//   updateTodo: (index, updatedTodo) =>
//     set((state) => {
//       const newTodos = [...state.todos];
//       newTodos[index] = updatedTodo;
//       return {
//         todos: newTodos,
//         editIndex: null,
//         editText: "",
//       };
//     }),
//   deleteTodo: (index) =>
//     set((state) => ({
//       todos: state.todos.filter((_, i) => i !== index),
//       dropdownIndex: null,
//     })),
//   handleEdit: (index) =>
//     set((state) => ({
//       editIndex: index,
//       editText: state.todos[index].text,
//       dropdownIndex: null,
//     })),
//   handleUpdate: (index) =>
//     set((state) => {
//       const updatedTodo = {
//         ...state.todos[index],
//         text: state.editText,
//       };
//       const newTodos = [...state.todos];
//       newTodos[index] = updatedTodo;
//       return {
//         todos: newTodos,
//         editIndex: null,
//         editText: "",
//       };
//     }),
//   handleDropdownClick: (index) =>
//     set((state) => ({
//       dropdownIndex: index === state.dropdownIndex ? null : index,
//     })),
//   setEditText: (text) => set({ editText: text }),
//   setEditIndex: (index) => set({ editIndex: index }),
//   openListModal: () => set({ isListModalOpen: true, modalType: "List" }),
//   closeListModal: () =>
//     set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),
//   openWorkspaceModal: () =>
//     set({ isWorkspaceModalOpen: true, modalType: "Workspace" }),
//   closeWorkspaceModal: () =>
//     set({ isWorkspaceModalOpen: false, modalName: "", modalEmoji: "" }),
//   setSelectedList: (list) => set({ selectedList: list }),
//   setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
//   setTodoText: (text) => set({ todoText: text }),
//   handleAddTodo: () =>
//     set((state) => {
//       const { todoText, selectedList, selectedWorkspace } = state;
//       if (todoText.trim() === "") {
//         alert("Todo cannot be empty");
//         return state;
//       }
//       const newTodo = {
//         text: todoText,
//         list: selectedList,
//         workspace: selectedWorkspace,
//       };
//       return {
//         todos: [...state.todos, newTodo],
//         todoText: "",
//         selectedList: "",
//         selectedWorkspace: "",
//       };
//     }),
//   setModalName: (name) => set({ modalName: name }),
//   setModalEmoji: (emoji) => set({ modalEmoji: emoji }),
//   setModalType: (type) => set({ modalType: type }),
//   handleSaveModal: () =>
//     set((state) => {
//       const { modalName, modalEmoji, modalType } = state;
//       if (modalName.trim() === "") return state;

//       if (modalType === "List") {
//         state.addList(modalName, modalEmoji);
//       } else if (modalType === "Workspace") {
//         state.addWorkspace(modalName, modalEmoji);
//       }

//       return {
//         modalName: "",
//         modalEmoji: "",
//         modalType: null,
//         isListModalOpen: false,
//         isWorkspaceModalOpen: false,
//       };
//     }),
// }));

// ------------------ Watch Store ------------------
interface ProductState {
  productStates: Record<
    string,
    {
      currentImage: string;
      hover: boolean;
    }
  >;
  setProductImage: (productId: string, image: string) => void;
  setProductHover: (productId: string, hover: boolean) => void;
  initializeProduct: (productId: string, initialImage: string) => void;
}

interface FilterState {
  selectedCountries: string[];
  selectedColors: string[];
  selectedPriceRange: { min: number; max: number } | null;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
  clearFilters: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  productStates: {},
  setProductImage: (productId, image) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { ...state.productStates[productId], currentImage: image },
      },
    })),
  setProductHover: (productId, hover) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { ...state.productStates[productId], hover },
      },
    })),
  initializeProduct: (productId, initialImage) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { currentImage: initialImage, hover: false },
      },
    })),
}));

export const useFilterStore = create<FilterState>((set) => ({
  selectedCountries: [],
  selectedColors: [],
  selectedPriceRange: null,
  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  setSelectedColors: (colors) => set({ selectedColors: colors }),
  setSelectedPriceRange: (range) => set({ selectedPriceRange: range }),
  clearFilters: () =>
    set({
      selectedCountries: [],
      selectedColors: [],
      selectedPriceRange: null,
    }),
}));