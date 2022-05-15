import React, { useEffect, useState } from "react";
import { Button, Spinner } from 'react-bootstrap';
import './DogeAPI.scss';

const DogeAPI = (props) => {
  const title = props.title;
  const t = props.translation;
  const theme = props.theme;

  let [res = '', setImg] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    fetchImage();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchImage = async () => {
    setLoading(true);

    res = await fetch('https://random.dog/woof.json')
      .then(response => response.json());

    const imgUrl = res.url;
    const type = imgUrl.substr(imgUrl.length - 4, imgUrl.length).toLowerCase();

    if (type !== '.jpg' && type !== 'jpeg' && type !== '.png') {
      fetchImage();
    }

    setImg(res.url);
  };

  const imageLoaded = () => {
    setLoading(false);
  }

  return (
    <div className='content'>
      <div style={{ display: 'flex' }}>
        <h4>Doge API</h4>
        <Button className='btn-transition refresh-btn' variant={theme === 'dark' ? 'secondary' : 'primary'} onClick={fetchImage}>Refresh</Button>{' '}
      </div>

      <div className='spinner' style={{ display: loading ? "inline-block" : "none" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

      <br />

      <div className="doge-text" style={{ display: loading ? "block" : "none" }}>
        {t('dogeAPI.highest_resolution_info')}
      </div>

      <img
        style={{ display: loading ? "none" : "block" }}
        className='doge-img'
        src={res}
        onLoad={imageLoaded}
        alt='Doge' />
    </div>
  );
}

DogeAPI.propTypes = {};

DogeAPI.defaultProps = {};

export default DogeAPI;
