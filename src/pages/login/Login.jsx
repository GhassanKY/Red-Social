import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hola Mundo!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            repellendus illum facere enim a, soluta voluptas consequatur ipsa
            animi ipsum magnam impedit, aut, necessitatibus adipisci fugiat at
            voluptates? Quisquam, voluptatum.
          </p>
          <span>¿No tienes una cuenta?</span>
          <Link to="/register">
            <button>Registrate</button>
          </Link>

        </div>
        <div className="right">
          <h1>Iniciar Sesion</h1>
          <form>
            <input type="text" placeholder="usuario" />
            <input type="password" placeholder="contraseña" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="circle5"></div>
    </div>
  );
};

export default Login;
