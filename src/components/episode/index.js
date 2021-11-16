import { Container, Content } from './styles';

export function Episode({ content }){
   
    return (
        <Container>
            {content.map((item) => 
                <Content key={item.id}>
                    <span><strong>Episodio</strong> {item.episode}</span>
                    <p><strong>Nome:</strong> {item.name}</p>
                    <p><strong>Data de Exibição:</strong> {item.air_date}</p>
                        <div>
                            <span>Personagens</span>
                            {item.characters.map((element, index) =>
                                index < 5 && (
                                <p key={element.id}>- {element.name}</p>
                            ))}
                        </div>
                </Content>
            )}
        </Container>
    )
}

