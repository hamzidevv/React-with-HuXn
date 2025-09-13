import type { AdminInfoList } from "../types";

type AdminInfoProps = {
  admin: AdminInfoList;
};

const AdminInfo = ({ admin }: AdminInfoProps) => {
  const { id, name, email, role, lastLogin } = admin;
  return (
    <div>
      <h2>Admin Information</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <p>Last Login: {lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default AdminInfo;
