import React from 'react';

const Dropdown = ({dropdown}) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{dropdown}</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Remeras</a>
                  <a className="dropdown-item" href="#">Busos</a>
                  <a className="dropdown-item" href="#">Medias</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Alguna idea?</a>
                </div>
        </li>
    );
}

export default Dropdown;
