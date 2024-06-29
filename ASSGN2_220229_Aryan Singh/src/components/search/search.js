import React from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { useState } from 'react'
import { GEO_API_URL, weatherapioptions } from '../../api'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, weatherapioptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }))
                }
            })
        .catch(error => console.log(error))
    }
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <div>
            <AsyncPaginate
                placeholder="Search for a city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search
