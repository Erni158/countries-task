import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface Continents {
    name: string;
    code: string;
}
  
interface ContinentsData {
    continents: Continents[];
}

const GET_CONTINENTS = gql`
    query GetContinents {
        continents {
            name
            code
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a {
        color: black;
        text-decoration: none;
    }
`

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100px;
    font-size: 20px;
    border: 1px solid #000;
    padding: 30px;
    border-radius: 10px;
    margin: 20px;
`

export const Continents = () => {
    const { loading, error, data } = useQuery<ContinentsData>(GET_CONTINENTS);
    const { code } = useParams<Omit<Continents, 'name'>>();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: (</p>
    
    console.log(data?.continents);
    return(
        <Wrapper>
            {data?.continents.map(({name, code}) => (
                <Link key={`1-${name}`} to={`/continents/${code}`}>
                    <Item>
                        {name}
                    </Item>
                </Link>
            ))}
        </Wrapper>
    )
}