import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Kinia.scss';

const Kinia = (props) => {
  const title = props.title;
  const t = props.translation;

  const defaultProgressBarValues = [
    { now: 0, label: 0, isAnimated: false },
    { now: 0, label: 0, isAnimated: false },
    { now: 0, label: 0, isAnimated: false }
  ];
  const [firstRange, setFirstRange] = useState(defaultProgressBarValues);

  const date1 = new Date("2023-06-14T16:00:00.000+02:00");
  const date2 = new Date("2025-06-14T00:00:00.000+02:00");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setWeKnowEachOtherCounter(date1, setDays, setHours, setMinutes, setSeconds);
    const timer = setInterval(() => {
      setWeKnowEachOtherCounter(date1, setDays, setHours, setMinutes, setSeconds);
    }, 1000);
    return () => clearInterval(timer);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstRange(setProgressBar(date1, date2), defaultProgressBarValues);
    });
    return () => clearTimeout(timer);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='content'>
      <h4>Kinia</h4>
      <div className="flex">
        <div>&#10084; {t('kinia.weKnowEachOtherFor')}:&nbsp;</div>
        <div className="flex">
          <div>{t('kinia.days', { count: days })}&nbsp;</div>
          <div>{t('kinia.hours', { count: hours })}&nbsp;</div>
          <div>{t('kinia.minutes', { count: minutes })}&nbsp;</div>
          <div>{t('kinia.seconds', { count: seconds })}</div>
        </div>
      </div>
      <div className="flex">
        <div>&#10084; {t('kinia.theHappiestDayInOurLives')}&nbsp;</div>
        <div>(14.06.2023 - 14.06.2025)</div>
      </div>
      <ProgressBar>
        <ProgressBar key={1} now={firstRange[0].now} label={firstRange[0].label} variant="danger" animated={firstRange[0].isAnimated} />
        <ProgressBar key={2} now={firstRange[1].now} label={firstRange[1].label} variant="warning" animated={firstRange[1].isAnimated} />
        <ProgressBar key={3} now={firstRange[2].now} label={firstRange[2].label} variant="success" animated={firstRange[2].isAnimated} />
      </ProgressBar>
    </div>
  );
}

const setProgressBar = (dateFrom, dateTo, defaultProgressBarValues) => {
  const maxDifference = (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);
  const currentDate = new Date();
  const differenceInDays = (currentDate.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);
  if (differenceInDays < 0) return defaultProgressBarValues;

  const resultInPercent = Math.floor((differenceInDays * 100) / maxDifference);
  const thresholds = [20, 30];
  return [
    {
      now: resultInPercent <= thresholds[0] ? resultInPercent : thresholds[0],
      label: resultInPercent <= thresholds[0] ? `${resultInPercent}%` : null,
      isAnimated: resultInPercent <= thresholds[0]
    },
    {
      now: resultInPercent <= (thresholds[0] + thresholds[1]) ? (resultInPercent > thresholds[0] ? resultInPercent - thresholds[0] : 0) : thresholds[1],
      label: resultInPercent <= (thresholds[0] + thresholds[1]) ? (resultInPercent > thresholds[0] ? `${resultInPercent}%` : '0%') : null,
      isAnimated: resultInPercent <= (thresholds[0] + thresholds[1]) && resultInPercent > thresholds[0]
    },
    {
      now: resultInPercent <= 100 ? (resultInPercent > (thresholds[0] + thresholds[1]) ? resultInPercent - (thresholds[0] + thresholds[1]) : 0) : 100 - (thresholds[0] + thresholds[1]),
      label: resultInPercent <= 100 ? (resultInPercent > (thresholds[0] + thresholds[1]) ? `${resultInPercent}%` : null) : '100%',
      isAnimated: resultInPercent < 100 && resultInPercent > (thresholds[0] + thresholds[1])
    }
  ];
}

const setWeKnowEachOtherCounter = (date1, setDays, setHours, setMinutes, setSeconds) => {
  const difference = new Date() - date1;
  setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
  setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
  setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
}

Kinia.propTypes = {};

Kinia.defaultProps = {};

export default Kinia;
