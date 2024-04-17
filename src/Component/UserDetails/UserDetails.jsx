import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const details = useLoaderData();
  const { id, name, username, email, phone, website } = details;

  return (
    <div>
      <h2>Name: {name}</h2>
      <small>ID: {id}</small>
      <p>User-name: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <h3>Homepage: {website}</h3>
    </div>
  );
};

export default UserDetails;
