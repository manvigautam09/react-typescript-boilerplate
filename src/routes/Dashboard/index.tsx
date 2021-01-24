import { useLoginHook } from "../../store/hooks/userAuth";

const Dashboard = () => {
  const { logoutUserHandler, userName } = useLoginHook();

  return (
    <div>
      <div>{userName}</div>
      <button onClick={logoutUserHandler}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
