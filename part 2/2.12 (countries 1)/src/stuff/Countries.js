import React from "react"
import CountryInfo from "./CountryInfo"

const Countries = ({countries}) => {
  if (countries.length > 10) {
    return ( <p>be more specific</p>)

  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <ul>
        {countries.map((country) =>
          <li key={country.name.common}> {country.name.common}
          </li>
        )}
      </ul>
    )

  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map(country => 
        <CountryInfo key={country.name.common} country={country}/>
        )}
      </div>
    )
  } else {
    return ;
  }
}

export default Countries