import './index.css';

import { useLocation } from 'react-router-dom';
import usuarioService from '../../service/usuario-service';
import { useState } from 'react';



function Menu() {

  const [expandir, setExpandir] = useState(false);

  const logout = () => {
    usuarioService.sairSistema();
  };

  if (useLocation().pathname === '/login') {
    return null
  }
  return (
    /* <!--Menu lateral--> */
    <nav className={(expandir === true) ? "menu-lateral expandir " : "menu-lateral"}>

      {/* /* <!--Botão expandir--> */}
      <div className="btn-expandir" id='btn-exp' value={expandir} onClick={(e) => setExpandir((expandir === false) ? true : false)}>
        <i className="bi bi-list "></i>
      </div>

      <ul>
        <li className="item-menu">
          <a href="/">
            <span className="icon"><i className="bi bi-house"></i></span>
            <span className="txt-link">Home</span>
          </a>
        </li>
        <li className="item-menu ">
          <a href="/clientes">
            <span className="icon"><i className="bi bi-person-vcard"></i></span>
            <span className="txt-link">Clientes</span>
          </a>
        </li>
        <li className="item-menu">
          <a href="/produtos">
            <span className="icon"><i className="bi bi-bag"></i></span>
            <span className="txt-link">Produtos</span>
          </a>
        </li>
        <li className="item-menu" id="btn-sair" >
          <a href="/login" onClick={logout}>
            <span className="icon" ><i className="bi bi-box-arrow-left"></i></span>
            <span className="txt-link">Sair</span>

          </a>
        </li>
      </ul>
    </nav>

  )
}


export default Menu;