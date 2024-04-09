import { RegisterBody } from "./components/RegisterBody";
import RegisterFooter from "./components/RegisterFooter";
import RegisterNav from "./components/RegisterNav";

function Register() {
  return (
    <div className="Register">
      <RegisterNav />
      <RegisterBody />
      <RegisterFooter />
    </div>
  );
}

export default Register;
