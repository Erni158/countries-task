import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

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

export const Continents = () => {
    const { loading, error, data } = useQuery<ContinentsData>(GET_CONTINENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: (</p>
    
    console.log(data?.continents);
    return(
        <div>
            {data?.continents.map(({name, code}) => (
                <Link to="/continents/code">{name}</Link>
            ))}
        </div>
    )
}