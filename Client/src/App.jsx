import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const adminNav = () => {
    navigate("admin");
  };
  const empNav = () => {
    navigate("employee");
  };
  return (
    <>
      <div>
        <p>Login As :</p>
        <button onClick={empNav}>Employee</button>
        <br />
        <button onClick={adminNav}>Admin</button>
      </div>
    </>
  );
}
export default App;
