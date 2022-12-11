import { Navigate, Outlet } from 'react-router-dom'

const AuthPrivateRoutes = () => {
  if(localStorage.getItem('token')) {var token = true}
  if(localStorage.getItem('email')) {var email = true}
  if(localStorage.getItem('username')) {var username = true}
  if(localStorage.getItem('role')) {var role = true}

  const url = `/login`

  return (
    (token && email && role && username) ? <Outlet/> : <Navigate to={url}/>
  )
}

export default AuthPrivateRoutes;