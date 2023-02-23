import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IWeatherData } from '../interfaces/interface';
import TempConverter from '../../utilities/tempConverter';

const SearchResults = () => {
      // Get the search query and weather data from Redux store
  const { searchQuery, data } = useSelector(
    (state: RootState) => state.weatherData
  );

    const filteredCities = useMemo(
        () =>
          Object.entries(data).reduce((obj, [city, value]) => {
            if (
              city.toLowerCase().includes(searchQuery?.toLowerCase() || "") &&
              value
            ) {
              obj[city] = value;
            }
            return obj;
          }, {} as IWeatherData),
        [data, searchQuery]
      );

  return (
    <div>
    {/* Iterate through filtered weather data and display each city's information */}
    {Object.entries(filteredCities).length > 0 && (
      <div>
        {Object.entries(filteredCities).map(([city, data]) => (
          <div key={city}>
            <h2> {city}</h2> 
            {/* Temperature display with conversion */}
            <TempConverter
              temperature={data.temperature}
            />
    
            {/* Humidity display */}
            <span>
               Humidity: {data.humidity},
            </span>
            {/* Wind speed display */}
            <span>
               WindSpeed: {data.windSpeed} km/h,
            </span>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default SearchResults