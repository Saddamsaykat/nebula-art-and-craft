import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase";
import { Helmet } from "react-helmet";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false); 

    const handleUpdate = (event) => {
        event.preventDefault();
        
        const displayName = event.target.name.value;
        const photoURL = event.target.photo.value;

        const profileInfo = {
            displayName: displayName,
            photoURL: photoURL
        };

        setLoading(true);
        updateProfile(auth.currentUser, profileInfo)
            .then(() => {
                console.log("Profile updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    return (
        <div className=" flex justify-center items-center mt-5 mb-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="card w-96 glass">
                <figure>
                    <div className="avatar mt-4">
                        <div className="w-24 rounded-xl">
                            <img src={user.photoURL} alt="User Profile" />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.email}</h2>
                    <h2>{user.displayName}</h2>
                    <div className="card-actions justify-end"></div>
                    <form onSubmit={handleUpdate}>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Update Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Update Photo URL</span>
                            </div>
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <button className="btn btn-primary mt-3 w-full" type="submit" disabled={loading}>
                            {loading ? "Updating..." : "Update"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
