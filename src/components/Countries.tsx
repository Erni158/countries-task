import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Continent } from './Continents';
import styled from 'styled-components';

interface Languages {
  name: string;
}

interface Country {
  name: string;
  emoji: string;
  languages: Languages[];
}

interface CountriesData {
  continent: {
    countries: Country[];
  }
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

const CountriesStyle = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 20px; 
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."; 
`

const CountryItem = styled.div`
  display: grid;
  padding: 20px;
  font-size: 20px;
  border: 1px solid #000;
  border-radius: 10px;
`

export const Countries = () => {
  const { code } = useParams<Omit<Continent, 'name'>>();
  const { loading, error, data } = useQuery<CountriesData, Omit<Continent, 'name'>>(GET_COUNTRIES_FROM_CONTINENT, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: (</p>

    console.log(data)

  return(
    <CountriesStyle>
      {data?.continent.countries.map(({name, emoji, languages}, index) => (
        <CountryItem key={`${index}-${name}`}>
          <span><strong>name:</strong> {name}</span>
          <span><strong>emoji:</strong> {emoji}</span>
          <span><strong>language:</strong> {languages[0]?.name ?? 'none'}</span>
        </CountryItem>
      ))}
    </CountriesStyle>
  );
};