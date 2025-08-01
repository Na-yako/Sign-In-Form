import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

export default function App() {
  const [userPassword, setUserPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className="app">
      <section>
        <Enterpassword />
        <Avater />
        <Input
          userPassword={userPassword}
          setUserPassword={setUserPassword}
          handleViewPassword={handleViewPassword}
          viewPassword={viewPassword}
        />
        <Toggle />
        <Resetpassword setUserPassword={setUserPassword} />
      </section>
    </div>
  );
}

function Enterpassword() {
  return <h1>Enter your password</h1>;
}

function Avater() {
  return (
    <div className="avater-card">
      <img src="https://i.pravatar.cc/48?u=933372" alt="" />
      <div>
        <span className="avater-business">Business Account</span>
        <p>Sarah Bills</p>
      </div>
    </div>
  );
}

function Input({
  userPassword,
  setUserPassword,
  handleViewPassword,
  viewPassword,
}) {
  return (
    <div className="sign-input">
      <label htmlFor="">Password</label>
      <div>
        <input
          type={viewPassword ? "text" : "password"}
          placeholder="🔒 ****"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <span onClick={handleViewPassword}>
          {viewPassword ? <IoEyeOutline />  : <FaRegEyeSlash />}
        </span>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="sign-toggle">
      <div>
        <span className="toggle-icon">
          <FaToggleOff />
        </span>
        <span>Stay signed in</span>
      </div>
      <button>Confirm</button>
    </div>
  );
}

function Resetpassword({ setUserPassword }) {
  return (
    <button className="reset-btn" onClick={() => setUserPassword("qwerty911??!!")}>
      Reset password
    </button>
  );
}
