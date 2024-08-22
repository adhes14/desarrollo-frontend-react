import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={values.password} onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;