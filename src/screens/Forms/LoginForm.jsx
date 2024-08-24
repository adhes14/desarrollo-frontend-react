import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import Modalinfo from "../../components/Modalinfo";
import { useState } from "react";

const LoginForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "", username: "" });
  const [showPassword, setShowPassword] = useState(false);

  const [showModalinfo, setShowModalinfo] = useState(false);
  const [modalMessage, setModalMessage] = useState("Welcome to the jungle");
  const [type, setType] = useState("");
  
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (form.password !== values.password) {
      setModalMessage("Invalid password");
      setShowModalinfo(true);
      setType("error");
      return;
    }
    dispatch(saveFormData(values));
    setModalMessage(`Form data saved successfully, Welcome ${values.username}!`);
    setShowModalinfo(true);
    setType("success");
  }

  const hideModalinfo = () => {
    setShowModalinfo(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modalinfo visible={showModalinfo} message={modalMessage} type={type} onClose={hideModalinfo} />
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
      >
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <h2>email: { form.formData.email }</h2>
            <h2>username: { form.formData.username }</h2>
            <h2>password: { form.formData.password }</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={values.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" value={values.username} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type={showPassword ? "text" : "password"} name="password" id="password" value={values.password} onChange={handleChange} />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default LoginForm;