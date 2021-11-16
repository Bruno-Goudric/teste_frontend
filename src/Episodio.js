import React, { useEffect, useState } from 'react';
import { client } from './config/client-graphql'
import { gql } from '@apollo/client'

import { Header } from './components/header'
import { Episode } from './components/episode'
import { Paginations } from './components/paginations'

const Episodio = () => {
    const [episode, setEpisode] = useState([])
    const [page, setPage] = useState(1)
    
    console.log(episode)
    
    useEffect(() => {
        initial(page);      
    }, [page]);

    function initial(page) {
        
        client.query({
        query: gql`
            query {
                episodes(page: ${page}){
                    info{
                        count
                        pages
                    }
                    results{
                        id
                        name
                        air_date
                        episode
                        characters{
                            id
                            name
                        }                        
                    }
                }                       
            }
        `
        }).then((res) => 
        setEpisode(res.data.episodes.results)
        )
    }
    return(
        <>
            <Header title={'Episódios'} />
            <Episode content={episode} />
            <Paginations setProps={setPage} pages={3} />
        </>
    )
}

export default Episodio;