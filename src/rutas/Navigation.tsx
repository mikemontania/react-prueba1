import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Image from '../logo.svg';

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={Image} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/usuarios' className={({ isActive }) => isActive ? 'nav-active' : ''}>Usuarios</NavLink>
                        </li>
                        <li>
                            <NavLink to='/configuracion' className={({ isActive }) => isActive ? 'nav-active' : ''}>Configuracion</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<h1>HOME</h1>} />
                    <Route path='/usuarios' element={<h1>HOME</h1>} />
                    <Route path='/configuracion' element={<h1>HOME</h1>} />

                    <Route path='/*' element={<Navigate to={'/'} replace />} />
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default Navigation
