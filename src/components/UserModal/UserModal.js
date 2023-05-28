import { Link } from "react-router-dom";

const UserModal = ({ onLogout }) => {
  return (
    <div style={{ position: "absolute", top: "90px", right: "0", backgroundColor: "white", padding: "10px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", zIndex: "999" }}>
      <Link to="/courses" style={{ display: "block", marginBottom: "10px", color: "black", textDecoration: "none" }}>My Courses</Link>
      <button onClick={onLogout} style={{ display: "block", width: "100%", padding: "8px 12px", border: "none", borderRadius: "5px", backgroundColor: "rgb(240, 90, 90)", color: "white", fontWeight: "bold" }}>Logout</button>
    </div>
  );
};

export default UserModal;
