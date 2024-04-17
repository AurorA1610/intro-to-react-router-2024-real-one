import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };
  const { id, name, email, phone } = user;
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
