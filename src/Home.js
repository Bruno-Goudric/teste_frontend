import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/personagem">Personagens</Link>
                    </li>
                    <li>
                        <Link to="/episodio">Episodio</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;