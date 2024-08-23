import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";

const LoginForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(saveFormData(values));
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h2>email: { form.formData.email }</h2>
        <h2>password: { form.formData.password }</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={values.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={values.password} onChange={handleChange} />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;