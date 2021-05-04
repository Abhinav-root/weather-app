import React, {useState} from "react";
import styled from "styled-components";
import Axios from "axios";

const Search = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 70px;
  display: inline-block;
  padding: 4px 14px;
  border-radius: 18px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  background-color: #f5f5f0;
`;

const Button = styled.button`
  font-size: 1.4rem;
  position: relative;
  right: 50px;
  bottom: 1px;
  box-sizing: border-box;
  background: none;
  border: none;
  height: 70px;
  width: 45px;
  border-radius: 40%;
  cursor: pointer;
  color: #ff0066;
`;

const Div = styled.div`
margin: 40px auto;
text-align: center;
`

const Main = styled.main`
margin: 30px;
text-align: center;
height: 450px;
width: 70%px;
color: whitesmoke;
font-size: 1.5rem;
`

const Weather = () => {
    const [loc, setLoc] = useState("Delhi");
    const [data, setData] = useState([]);

    const getWeather = (location) => {
      Axios.get(
        `http://api.weatherapi.com/v1/current.json?key=6c116120618d426d86835029211301&q=${location}&aqi=no`
      ).then((res) => setData(res.data));
    };

    const weatherInfo = {
      name: data.location ? data.location.name : null,
      country: data.location ? data.location.country : null,
      localtime: data.location ? data.location.localtime : null,
      temp_c: data.location ? data.current.temp_c : null,
      feelslike_c: data.location ? data.current.feelslike_c : null,
      weather: data.location ? data.current.condition.text : null,
      weather_icon: data.location ? data.current.condition.icon : null,
      wind_kph: data.location ? data.current.condition.wind_kph : null,
      wind_dir: data.location ? data.current.condition.wind_dir : null,
      precip_in: data.location ? data.current.condition.precip_in : null,
    };

  return (
    <Div>
      <Search
        type="text"
        placeholder="e.g. New York"
        onChange={(e) => setLoc(e.target.value)}
      />
      <Button onClick={() => getWeather(loc)}>
        <i class="fas fa-search"></i>
      </Button>
      {data.location && (
        <Main>
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <span> {weatherInfo.name}</span>,
            <span style={{ fontSize: "1.7rem" }}> {weatherInfo.country}</span>
          </div>
          <div style={{ fontSize: "1.1rem", marginTop: "15px" }}>
            {weatherInfo.localtime}
          </div>
          <div>
            <span>
              <img
                src={weatherInfo.weather_icon}
                alt="icon"
                style={{ position: "relative", top: "20px" }}
              />
            </span>
            <span style={{ fontSize: "3 rem" }}>
              {weatherInfo.temp_c}&#176;
            </span>
          </div>
          <div style={{ marginTop: "20px" }}>
            feels like {weatherInfo.feelslike_c}
          </div>
          <div style={{ marginTop: "30px" }}>{weatherInfo.weather}</div>
        </Main>
      )}
    </Div>
  );
};

export default Weather;
