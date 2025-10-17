// import Left from "./components/Left";
// import Right from "./components/Right";
// import SplitScreen from "./components/SplitScreen";

// const App = () => {
//   return (
//     <>
//       <SplitScreen leftWidthProp={15} rightWidthProp={80}>
//         <Left />
//         <Right />
//       </SplitScreen>
//     </>
//   );
// };

// export default App;

// HOC Authorization
import { withAccessControl } from "./utils/withAccessControl";
import NotAuthorized from "./components/NotAuthorized";
import MyComponent from "./components/MyComponent";

const MyComponentWithAccessControl = withAccessControl(MyComponent);

const App = () => {
  return (
    <div>
      <MyComponentWithAccessControl
        roles={["admin", "manager"]}
        // roles={["user", "guest"]}
        fallbackComponent={NotAuthorized}
        message="Hello, Admin!"
        injectedProps={{
          userName: "John Doe",
          userPermissions: ["view_dashboard", "edit_settings"],
        }}
      />
    </div>
  );
};

export default App;