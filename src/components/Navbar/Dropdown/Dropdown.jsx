import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({dropdown}) => {
    return (
        <li className="nav-item dropdown">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-success">{dropdown}</button>
                <div className="btn-group" role="group">
                    <button id="btnGroupDrop2" type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                        <Link to="/category/1" className='nav-link' >Blancas</Link>
                        <Link to="/category/2" className='nav-link'>Negras</Link>
                    </div>
                </div>
            </div>
        </li>

    );
}

export default Dropdown;
