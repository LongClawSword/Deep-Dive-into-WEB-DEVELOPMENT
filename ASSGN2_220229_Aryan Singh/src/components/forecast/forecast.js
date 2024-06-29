import React from 'react';
import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import './forecast.css';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastdays = WEEKDAYS.slice(dayInAWeek, WEEKDAYS.length).concat(WEEKDAYS.slice(0, dayInAWeek));
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.forecast.forecastday.map((forecastday, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">{ }
                                    <img alt="weather" className='icon-small' src={forecastday.day.condition.icon} />
                                    <label className='day'>{forecastdays[index]}</label>
                                    <label className='description'>{forecastday.day.condition.text}</label>
                                    <label className='min-max'>{`${forecastday.day.mintemp_c}°C - ${forecastday.day.maxtemp_c}°C`}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily-details-grid'>
                                <div className='daily-details-grid-item'>
                                    <label>Humidity</label>
                                    <label>{forecastday.day.avghumidity}%</label>
                                </div>
                                <div className='daily-details-grid-item'>
                                    <label>Wind Speed</label>
                                    <label>{forecastday.day.maxwind_kph} km/h</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
export default Forecast;