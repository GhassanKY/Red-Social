import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hola Mundo!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            repellendus illum facere enim a, soluta voluptas consequatur ipsa
            animi ipsum magnam impedit, aut, necessitatibus adipisci fugiat at
            voluptates? Quisquam, voluptatum.
          </p>
          <span>¿Tienes una cuenta?</span>
          <Link to="/login">
           <button>Login</button> 
          </Link>
          
        </div>
        <div className="right">
          <h1>Registrate</h1>
          <form>
            <input type="text" placeholder="usuario" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="nombre" />
            <input type="password" placeholder="contraseña" />
            <button>Registrate</button>
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

export default Register;