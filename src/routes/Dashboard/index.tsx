import { useLoginHook } from "../../store/hooks/userAuth";

const Dashboard = () => {
  const { logoutUserHandler, userName } = useLoginHook();

  return (
    <div>
      <div>{userName}</div>
      <button
        onClick={logoutUserHandler}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
