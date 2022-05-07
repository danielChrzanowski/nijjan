import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/Home/gw2_1.jpg';
import image2 from '../../assets/Home/gw2_2.jpg';
import image3 from '../../assets/Home/gw2_3.jpg';
import './Home.scss';

const Home = (props) => {
  const t = props.translation;
  const title = props.title;

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <div>
      <div className='carousel'>
        <Carousel indicators={false} fade>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={image1} alt="Guild wars 2 character" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={image2} alt="Guild wars 2 jade bot" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={image3} alt="Guild wars 2 character with hammer" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='content'>
        <h4>{t('home.title1')}</h4>

        {t('home.games')}<br />
        {t('home.dogeAPI')}<br />
        {t('home.sign_in')}<br />
        <FontAwesomeIcon icon={faPalette} />{t('home.styleChange')}<br />
        {t('home.languageChange')}<br />
      </div>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
