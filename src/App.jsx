import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { getRandomPassword, randomPasswords } from "./costants/datat";
import { CiLock } from "react-icons/ci";

export default function App() {
  const [userPassword, setUserPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleConfirm = () => {
    if (!userPassword) return;
    window.alert("Successfully Confirmed ✔");
    setUserPassword("");
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
        <Toggle handleConfirm={handleConfirm} />
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
      <div className="input-container">
        <CiLock className="input-icon" />
        <input
          title="Password must be at least 8 characters"
          maxLength={8}
          minLength={8}
          type={viewPassword ? "text" : "password"}
          placeholder="***"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <span onClick={handleViewPassword}>
          {viewPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
        </span>
      </div>
    </div>
  );
}

function Toggle({ handleConfirm }) {
  return (
    <div className="sign-toggle">
      <div>
        <span className="toggle-icon">
          <FaToggleOff />
        </span>
        <span>Stay signed in</span>
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

function Resetpassword({ setUserPassword }) {
  return (
    <div>
      <button
        className="reset-btn"
        onClick={() => setUserPassword(getRandomPassword(randomPasswords))}
      >
        Manage passwords
      </button>
      <p className="reset-btn-p">
        You can use saved passwords on any device. They're saved by us for you✔.
      </p>
    </div>
  );
}
