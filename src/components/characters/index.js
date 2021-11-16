import { Container, Box, Info, Content } from './styles'

export function Characters({ characters }){  
    return (
        <>
            <Container>                
                {characters.map((character) =>                         
                    <Content key={character.name}> 
                        <div>
                            <img src={character.image} loading="lazy" alt={character.name} />
                        </div>
                        <Info>
                            <h3>Nome: {character.name}</h3>
                            <p><strong>Local de origem:</strong> {character.origin.name === 'unknown' ? 'Desconhecida' : character.origin.name}</p>
                            {character.episode.map((element, index) =>
                            index < 3 && (
                                <p>Episódios que aparecem: {element.episode}</p>                               
                            ))}
                        </Info>                                                    
                    </Content>
                )}                              
            </Container>
        </>
    )
}