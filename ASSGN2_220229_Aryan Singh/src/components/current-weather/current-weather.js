import "./current-weather.css"
const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.location.name}</p>
                    <p className="weather-description">{data.current.condition.text}</p>
                </div>
                <img src={data.current.condition.icon} alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temperature">{data.current.temp_c}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-label">{data.current.feelslike_c}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-label">{data.current.wind_kph} kmph</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-label">{data.current.humidity} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-label">{data.current.pressure_mb} milibar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeather;