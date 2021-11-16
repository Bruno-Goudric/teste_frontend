import { Link } from 'react-router-dom';
import { Container, Nav } from './styles'
import banner from '../assets/rick_morty_logo.png'

export function Header({ title }) {
    return (
        <Container>
            <img src={banner} alt="banner" />
            <Nav>
                <div>
                    <Link className="link"  to="/">Personagens</Link>
                </div>
                <div>
                    <Link className="link"  to="/episodio">Episódio</Link>
                </div>
            </Nav>
            <h3>{title}</h3>
        </Container>
    )
}