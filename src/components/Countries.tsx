import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Continent } from './Continents';

interface Languages {
  name: string;
}

interface Country {
  name: string;
  emoji: string;
  language: Languages[];
}

interface CountriesData {
  countries: Country[];
}

const GET_COUNTRIES_FROM_CONTINENT = gql`
    query GetCountriesFromContinent($code: ID!) {
      continent(code: $code) {
        countries {
          name
          emoji
          languages {
            name
          }
        }
      }
    }
  `

export const Countries = () => {
  const { code } = useParams<Omit<Continent, 'name'>>();
  const { loading, error, data } = useQuery(GET_COUNTRIES_FROM_CONTINENT, {
    variables: { code },
  });

  return(
    <div>{code}</div>
  );
};