import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user, loading, updateUser } = useContext(AuthContext);
  const [saving, setSaving] = useState(false);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return null;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setSaving(true);

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        document.getElementById("edit_profile_modal").close();
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setSaving(false));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="card bg-base-100 shadow-xl text-center">
        <figure className="pt-6">
          <img
            src={user.photoURL || "https://i.ibb.co/ZYW3VTp/user.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
        </figure>

        <div className="card-body">
          <h2 className="text-xl font-semibold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-600">{user.email}</p>

          <button
            className="btn btn-outline mt-4"
            onClick={() =>
              document.getElementById("edit_profile_modal").showModal()
            }
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="edit_profile_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Profile</h3>

          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                name="name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                name="photo"
                defaultValue={user.photoURL}
                className="input input-bordered w-full"
              />
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </button>

              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("edit_profile_modal").close()
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyProfile;
