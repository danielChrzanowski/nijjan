import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Kinia.scss';

const Kinia = (props) => {
  const title = props.title;

  const defaultProgressBarValues = [
    { now: 0, label: 0, isAnimated: false },
    { now: 0, label: 0, isAnimated: false },
    { now: 0, label: 0, isAnimated: false }
  ];
  const [firstRange, setFirstRange] = useState(defaultProgressBarValues);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstRange(setProgressBar(new Date("2023-06-14T00:00:00.000+02:00"), new Date("2025-06-14T00:00:00.000+02:00"), defaultProgressBarValues));
    });
    return () => clearTimeout(timer);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='content'>
      <h4>Kinia</h4>

      <div className="inline-block">&#10084;The happiest day of our lives&#10084;</div>
      <div className="inline-block">(14.06.2023 - 14.06.2025)</div>
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

Kinia.propTypes = {};

Kinia.defaultProps = {};

export default Kinia;
