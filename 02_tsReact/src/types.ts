type Info = {
  id: number;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type AdminInfoList, type Info };
