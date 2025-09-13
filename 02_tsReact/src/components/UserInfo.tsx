import type { Info } from "../types";

type UserInfoProps = {
  user: Info;
};

const UserInfo = ({ user }: UserInfoProps) => {
  const { id, name, email } = user;
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
