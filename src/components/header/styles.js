import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img{
        width: 450px;
        height: 250px;
    }

    & h3{
        font-size: 42px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #ccc;
    }
`;

export const Nav = styled.nav`
    display: flex;
    
    & div{
        padding: 0 10px 0 10px;
        
        
        & .link{
            text-decoration: none;
            color: #FFF;
            font-size: 24px;
            
            &:hover{
                color: #ccc;
                font-size: 25px;
                transition: 0.2s;
            }
        }
    }
`