import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import PrivateRoute from "@/lib/PrivateRoute";
import { Layout } from "@/app/Layout.tsx";
import AccountList from "@/components/admin-management/AccountList";
import { AuthProvider } from "./lib/auth-util";
import Profile from "./components/admin-management/Profile";
import VideoLibrary from "./components/video-management/video-library";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} /> */}
          <Route path="/" element={<PrivateRoute loginUrl={"/login"} />}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="profile" element={<Profile />} />
              <Route path="account-list" element={<AccountList />} />
              <Route path="video-library" element={<VideoLibrary />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
