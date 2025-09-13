import type { FC } from "react";

type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User: FC<UserProps> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Is Student: {isStudent ? "Yes" : "No"}</h2>
    </div>
  );
};

export default User;
