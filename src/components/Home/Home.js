import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/gw2_1.jpg';
import image2 from '../../assets/gw2_2.jpg';
import image3 from '../../assets/gw2_3.jpg';
import './Home.scss';

const Home = (props) => {
  const t = props.translation;

  return (
    <div className='Home'>
      <div className='carousel'>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>

      {t('homeComponent')}
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
