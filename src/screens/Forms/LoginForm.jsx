const LoginForm = () => {
  return (
    <form>
      <h1>Login</h1>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;