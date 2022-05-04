import React, { useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';
import './DogeAPI.scss';

const DogeAPI = (props) => {
  const title = props.title;

  useEffect(() => {
    document.title = title;
  }, [title]);

  let [res = '', setImg] = useState();
  const fetchImage = async () => {
    setLoading(true);

    res = await fetch('https://random.dog/woof.json')
      .then(response => response.json());

    const imgUrl = res.url;
    const type = imgUrl.substr(imgUrl.length - 3, imgUrl.length).toLowerCase();

    if (type !== 'jpg' && type !== 'png' && type !== 'gif') {
      fetchImage();
    }

    setImg(res.url);
  };

  useEffect(() => {
    fetchImage();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  }

  return (
    <div className='content'>
      <div style={{ display: 'flex' }}>
        <h4>Doge API</h4>
        <Button className='refreshBtn' variant="secondary" onClick={fetchImage}>Refresh</Button>{' '}
      </div>

      <div className='spinner' style={{ display: loading ? "block" : "none" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

      <img
        style={{ display: loading ? "none" : "block" }}
        className='dogeImg'
        src={res}
        onLoad={imageLoaded}
        alt='' />
    </div>
  );
}

DogeAPI.propTypes = {};

DogeAPI.defaultProps = {};

export default DogeAPI;
