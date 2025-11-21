import {NavLink, Link} from 'react-router-dom';
import { useContext } from 'react';
//import {CarritoContext} from '../context/CarritoContext.jsx';

const Navbar = () => {
    const  cantidadTotal= 0;//{cantidadTotal} = useContext(CarritoContext) || {cantidadTotal: 0};
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
            <div className="container">

                {/* Logo y nombre del sitio */}
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <i className="bi bi-tree-fill text-success fs-4"></i>
                    <div className="d-flex flex-column lh-sm">
                        <span className="fw-bold text-success" style={{ fontSize: '1.75rem', letterSpacing: '0.5px' }}>
                        EcoMarket
                        </span>
                        <small className="text-muted fst-italic" style={{ fontSize: '0.75rem' }}>
                        Consumo consciente, impacto positivo
                        </small>
                    </div>
                </Link>      

                {/* Botón para menú colapsable en pantallas pequeñas */}
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#menuNav" 
                    aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Enlaces de navegación */}
                <div className="collapse navbar-collapse" id="menuNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/productos">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to= "/carrito"> 🛒 Carrito
                                {cantidadTotal >0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">   
                                    {cantidadTotal}
                                </span>
                            )}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-outline-success" to="/login">Login</NavLink>                            
                        </li>
                        
                    </ul>
                </div>
            </div>   
        </nav>
    );
};
export default Navbar;