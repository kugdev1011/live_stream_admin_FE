import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword'
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import { Layout } from "@/app/Layout.tsx";
import AdminList from "@/components/admin-management/AdminList.tsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />


	      <Route path="/dashboard" element={<Layout />}>
		      <Route index element={<Dashboard />}></Route>

		      <Route path="admin-list" element={<AdminList/>} />
	      </Route>
      </Routes>
    </Router>
  )
}

export default App
