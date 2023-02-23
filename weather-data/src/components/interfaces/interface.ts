export interface ICityWeather{
    
        temperature:number, 
        humidity: number,
        windSpeed:number 
}

export interface IWeatherData{
    [key:string]:ICityWeather
    
  }
