import React, { useEffect, useState } from 'react';
import { client } from './config/client-graphql'
import { gql } from '@apollo/client'

import { Header } from './components/header'
import { Characters } from './components/characters'
import { Paginations } from './components/paginations'

const Personagem = () => {
    const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1)
  
  console.log(character)
  
  useEffect(() => {
      initial(page);      
  }, [page]);

  function initial(page) {
    
    client.query({
      query: gql`
        query {
          characters(page: ${page}){
            info {
              count
              pages
            }
            results {
              name
              image
              origin {
                name
              } 
              episode{
                id
                episode
              }
            }           
            
          }                        
        }
      `
    }).then((res) => 
    setCharacter(res.data.characters.results)
    )
  }
    return (
        <>
            <Header title={'Personagens'} />
            <Characters characters={character} />
            <Paginations setProps={setPage} pages={42} />
        </>
    )
}

export default Personagem;