import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Image from '../logo.svg';
import { Configuracion, Home, Usuarios } from '../Paginas';

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
                    <Route path='/' element={<Home />} />
                    <Route path='/usuarios' element={<Usuarios />} />
                    <Route path='/configuracion' element={<Configuracion />} />

                    <Route path='/*' element={<Navigate to={'/'} replace />} />
                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default Navigation
