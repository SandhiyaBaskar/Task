import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
export default function MainPage() {
  const history = useHistory();
  return (
    <>
      <div className="btnAlign">
        <Button onClick={() => history.push("/CustomerLogin")}>
          Customer Login
        </Button>
      </div>
      <div className="btnAlign">
        <Button onClick={() => history.push("/AdminLogin")}>Admin Login</Button>
      </div>
      <div className="btnAlign">
        <Button onClick={() => history.push("/Register")}>Register</Button>
      </div>
    </>
  );
}
