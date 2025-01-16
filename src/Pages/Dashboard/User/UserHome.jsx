import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Hi, welcome {user?.displayName}</h2>
    </div>
  );
};

export default UserHome;
