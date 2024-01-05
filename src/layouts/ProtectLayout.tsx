
import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from '../components'

const ProtectLayout = () => {


    const token = localStorage.getItem('token');

        if (token) {
            return (
                <div>
        
                    <Navbar />
                    <Outlet />
                    {/* <div>Footer</div> */}
                </div>
            )
        }

    return <Navigate to="/login" />
}

export default ProtectLayout