import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, RegisterNewUser } from '../components'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<RegisterNewUser />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
