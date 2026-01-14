import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    sessionStorage.setItem("token", "fake-jwt-token");
    navigate(from, { replace: true });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
