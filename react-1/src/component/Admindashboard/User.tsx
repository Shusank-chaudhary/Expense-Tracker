import { useState, useEffect } from "react";
import { RegisterForm } from "../auth/RegisterForm";
import axiosInstance from "../../config/axiosConfig";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export default function User() {

  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");

  const [isViewOpen, setIsViewOpen] = useState(false);
  const [viewUser, setViewUser] = useState<IUser | null>(null);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axiosInstance.get("/auth/users");
      console.log("API Response:", response.data);
      console.log("Users Data:", response.data.data);

      if (response.data.status) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Unable to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      const response = await axiosInstance.delete(
        `/auth/users/${userId}`
      );

      if (response.data.status) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );

        alert("User deleted successfully.");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Unable to delete user. Please try again.");
    }
  };

  const handleEditClick = (user: IUser) => {
  setSelectedUser(user);
  setEditName(user.name);
  setEditEmail(user.email);
  setEditError("");
  setIsEditOpen(true);
};

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUser) return;

    try {
      setEditLoading(true);
      setEditError("");

      const response = await axiosInstance.put(
        `/auth/users/${selectedUser._id}`,
        {
          name: editName.trim(),
          email: editEmail.trim(),
        }
      );

      if (response.data.status) {
        await getAllUsers();
        setIsEditOpen(false);
        setSelectedUser(null);
      } else {
        setEditError(response.data.message || "Unable to update user.");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      setEditError("Unable to update user. Please check the details and try again.");
    } finally {
      setEditLoading(false);
    }
  };

  const handleViewUser = (user: IUser) => {
    setViewUser(user);
    setIsViewOpen(true);
  };

  const filteredUsers = users
    .filter((user) => {
      const search = searchTerm.toLowerCase().trim();

      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "oldest":
          return (
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
          );

        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "newest":
        default:
          return (
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          );
      }
    });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllUsers();
  }, []);

  return (<>
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage registered users of your expense tracker.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddUserOpen(true)}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg"
        >
          + Add User
        </button>
      </div>

      {isAddUserOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsAddUserOpen(false)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Add New User
              </h2>

              <button
                type="button"
                onClick={() => setIsAddUserOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-800"
                aria-label="Close registration form"
              >
                &times;
              </button>
            </div>

            <div className="[&_input]:!text-gray-900 [&_input]:!bg-white">
              <RegisterForm
                isAdminForm
                onSuccess={() => {
                  setIsAddUserOpen(false);
                  getAllUsers();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isEditOpen && selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsEditOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Edit User
              </h2>

              <button
                type="button"
                onClick={() => setIsEditOpen(false)}
                className="text-2xl text-gray-500 hover:text-gray-800"
                aria-label="Close edit form"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label htmlFor="edit-name" className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="edit-name"
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  minLength={2}
                  maxLength={50}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="edit-email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="edit-email"
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {editError && (
                <p className="text-sm text-red-600">{editError}</p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  disabled={editLoading}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={editLoading}
                  className="rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800 disabled:opacity-50"
                >
                  {editLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isViewOpen && viewUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsViewOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                User Details
              </h2>

              <button
                type="button"
                onClick={() => setIsViewOpen(false)}
                aria-label="Close user details"
                className="text-2xl text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-lg font-semibold text-green-700">
                {viewUser.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {viewUser.name}
                </h3>
                <p className="text-sm text-gray-500">{viewUser.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between gap-4 border-b pb-3">
                <span className="text-sm text-gray-500">Role</span>
                <span className="text-sm font-medium capitalize text-gray-800">
                  {viewUser.role}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b pb-3">
                <span className="text-sm text-gray-500">Joined</span>
                <span className="text-sm font-medium text-gray-800">
                  {new Date(viewUser.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-sm text-gray-500">Last Updated</span>
                <span className="text-sm font-medium text-gray-800">
                  {new Date(viewUser.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsViewOpen(false)}
                className="rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500">
          Total Registered Users
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {filteredUsers.length}
        </h2>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">

        <div className="flex flex-col md:flex-row gap-4 justify-between">

          {/* Search */}
          <div className="relative w-full md:w-96">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>


          {/* Filters */}
          <div className="flex gap-3">

            <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
              <option>All Users</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
            </select>

          </div>

        </div>

      </div>


      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              All Users
            </h2>
          </div>

        </div>


        <div className="overflow-x-auto">
          <table className="w-full text-left">

            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">

              <tr>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  User
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Joined
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Expenses
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    Loading users...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-red-600">
                    {error}
                    <button
                      type="button"
                      onClick={getAllUsers}
                      className="ml-3 text-green-700 underline"
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                          {user.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        {user.role === "admin" ? "Admin" : "Active"}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-800">
                      —
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleViewUser(user)}
                          className="rounded-lg px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50"
                        >
                          View
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEditClick(user)}
                          className="rounded-lg px-3 py-1.5 text-sm text-green-600 hover:bg-green-50"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteUser(user._id)}
                          className="rounded-lg px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>

      </div>

    </div>
  </>)
}