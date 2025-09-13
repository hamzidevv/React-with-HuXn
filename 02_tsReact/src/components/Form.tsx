import { useState, useRef, type FormEvent } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passVal = password.current!.value;

    setSubmittedData({
      name: nameVal,
      email: emailVal,
      password: passVal,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit</button>

      <section>
        <h2>Name: {submittedData.name}</h2>
        <h2>Email: {submittedData.email}</h2>
        <h2>Password: {submittedData.password}</h2>
      </section>
    </form>
  );
};
export default Form;
