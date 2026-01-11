import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <button
        onClick={toggleTheme}
        style={{
          background: "var(--button-bg)",
          color: "var(--button-text)",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {theme === "light" ? "🌞 Light Mode" : "🌜 Dark Mode"}
      </button>

      <div
        style={{
          background: "var(--card-bg)",
          marginTop: "40px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Theme System</h2>
        <p>This UI automatically adapts to your selected theme.</p>
      </div>
    </div>
  );
}

export default App;
