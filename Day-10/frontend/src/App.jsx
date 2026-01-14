import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
