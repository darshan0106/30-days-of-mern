import { useAuth } from "../auth/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome 🎉</h1>
      <button
        onClick={logout}
        className="mt-5 bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
