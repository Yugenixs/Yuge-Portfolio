import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010828",
        color: "#EFF4FF",
        fontFamily: "ui-monospace, monospace",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <AlertCircle size={48} color="#6FFF00" style={{ margin: "0 auto 16px" }} />
        <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 40, textTransform: "uppercase" }}>404</h1>
        <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 12, color: "rgba(239,244,255,0.55)" }}>
          Halaman tidak ditemukan
        </p>
      </div>
    </div>
  );
}
