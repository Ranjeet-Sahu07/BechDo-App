import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("https://bechdo.page.gd");
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h2>Opening BechDo...</h2>
      <p>Please wait...</p>
    </div>
  );
}