import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    & div{
        display: flex;
        justify-content: center;
        padding: 10px;

        & img{
            border-radius: 5px;

            &:hover{
                border: 1px solid #fff;
                width: 300px;
                transition: 0.3s
            }
        }

        & h3{
            color: #fff;
        }
    }
      
` 




export const Content = styled.div`
    display: flex;
    align-items: center;
    
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 300px;
    height: 280px;
    border-radius: 5px;
    background-color: #3C3E44;
    color: #fff;
`