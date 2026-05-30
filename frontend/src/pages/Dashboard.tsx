import api from "../services/api";
import { getUserRole } from "../utils/jwt";

function Dashboard() {

  const role = getUserRole();

  const testApi = async () => {
    try {

      const endpoint =
        role === "ADMIN"
          ? "/admin"
          : "/user";

      const response =
        await api.get(endpoint);

      alert(response.data);

    } catch (error) {

      alert("Access denied");
      console.error(error);

    }
  };

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = "/login";
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <p className="mb-4 font-semibold">
        Logged in as: {role}
      </p>

      {/* USER CARD */}
      {role === "USER" && (
        <div className="border rounded-lg p-4 mb-4 shadow">
          <h2 className="text-xl font-bold mb-2">
            User Content
          </h2>

          <p>
            This content is visible only to users.
          </p>
        </div>
      )}

      {/* ADMIN CARD */}
      {role === "ADMIN" && (
        <div className="border rounded-lg p-4 mb-4 shadow">
          <h2 className="text-xl font-bold mb-2">
            Admin Content
          </h2>

          <p>
            This content is visible only to admins.
          </p>
        </div>
      )}

      <div className="flex gap-4">

        <button
          onClick={testApi}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Test API
        </button>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;