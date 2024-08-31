import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../Redux/User/userSlice";
import { useNavigate } from "react-router-dom";
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Could not Sign in with Google!", error);
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      <button
        onClick={handleGoogleClick}
        type="button"
        className="flex items-center justify-center w-full border border-slate-700 rounded-lg py-2 px-4  shadow-sm hover:bg-gray-300 transition duration-300"
      >
        <GoogleIcon className="text-slate-700 mr-2 h-auto" fontSize="large" />
        <span className="font-semibold text-gray-700 uppercase">
          Sign in with Google
        </span>
      </button>
    </div>
  );
}
