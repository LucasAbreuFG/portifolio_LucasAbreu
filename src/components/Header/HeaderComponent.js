// src/components/Header.js
import React from 'react';
import './styles/headerStyle.css';

const Header = () => {
    return (
        <header className="header">
            <div className='logoAndNav'>

                <div className="logoText">Portifólio | Lucas de Abreu</div>
                <div className="divAtributes">
                    <div>Rapidez</div>
                    <div>Inteligência</div>
                    <div>Simplicidade</div>
                </div>
            </div>

        </header>
    );
};

export default Header;