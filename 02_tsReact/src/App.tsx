import AdminInfo from "./components/AdminInfo";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import CounterContext from "./components/CounterContext";
import CounterReducer from "./components/CounterReducer";
import CounterReducer2 from "./components/CounterReducer2";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";
import MyComponent from "./components/MyComponent";
import TodoList from "./components/TodoList";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";
import { type Info, type AdminInfoList } from "./types";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Hamzi Dev",
    email: "its.hamzidev@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    role: "administrator",
    lastLogin: new Date(),
  };
  return (
    <div>
      {/* <User name="Hamzi" age={20} isStudent={false} /> */}
      {/* <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      /> */}
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      {/* <Counter /> */}
      {/* <UserProfile /> */}
      {/* <TodoList /> */}
      {/* <Form /> */}
      {/* <FocusInput /> */}
      {/* <ContactForm /> */}
      {/* <EventHandling /> */}
      {/* <CounterContext /> */}
      {/* <CounterReducer /> */}
      {/* <CounterReducer2 /> */}
      <MyComponent />
    </div>
  );
};
export default App;
