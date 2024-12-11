import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import PrivateRoute from "@/lib/PrivateRoute";
import ResetPassword from "@/pages/auth/ResetPassword";
import { Layout } from "@/app/Layout.tsx";
import AccountList from "@/components/admin-management/AccountList";
import { AuthProvider } from "./lib/auth-util";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<PrivateRoute loginUrl={"/login"} />}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="account-list" element={<AccountList />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
