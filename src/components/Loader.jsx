import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="loading">
      <ClipLoader color="#ff5a1f" size={50} />
      <h3>Loading BechDo...</h3>
    </div>
  );
}