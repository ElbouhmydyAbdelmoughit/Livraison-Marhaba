import { Navigate, Outlet } from 'react-router-dom'

const RolePrivateRoutes = (props) => {
  if(localStorage.getItem('role') == props.role) {var role = true}

  const url = `/${localStorage.getItem('role')}`

  return (
    role ? <Outlet/> : <Navigate to={url}/>
  )
}

export default RolePrivateRoutes;