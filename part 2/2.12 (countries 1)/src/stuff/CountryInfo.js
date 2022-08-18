import React from 'react'

const CountryInfo = ({country}) => {

var lang = Object.keys(country.languages).map(function(key) {
  return <option value={key}>{country.languages[key]}</option>
});

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>{lang}</ul>
      <img src={country.flags.svg} width="100" height="100"/>
    </div>
  )
}

export default CountryInfo