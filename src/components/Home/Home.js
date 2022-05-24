import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, StyleSheet } from 'aphrodite';
import { useEffect } from 'react';
import { fadeInDownBig, slideInDown } from 'react-animations';
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

  const styles = StyleSheet.create({
    slideInDownCarousel: {
      animationName: slideInDown,
      animationDuration: '1.5s'
    },
    fadeInDownBigContent1: {
      animationName: fadeInDownBig,
      animationDuration: '1.5s'
    },
    fadeInDownBigContent2: {
      animationName: fadeInDownBig,
      animationDuration: '2s'
    },
    fadeInDownBigContent3: {
      animationName: fadeInDownBig,
      animationDuration: '2.5s'
    }
  })

  return (
    <div>
      <div className={`carousel ${css(styles.slideInDownCarousel)}`}>
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

      <div className={`content ${css(styles.fadeInDownBigContent1)}`}>
        <h4>{t('home.title1')}</h4>

        {t('home.games')}<br />
        {t('home.dogeAPI')}<br />
        {t('home.sign_in')}<br />
        <FontAwesomeIcon icon={faPalette} />{t('home.styleChange')}<br />
        {t('home.languageChange')}<br />
      </div>

      <div className={`content ${css(styles.fadeInDownBigContent2)}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis malesuada mi.
        Fusce laoreet nec nibh at pretium. Donec ultrices nisi eget risus aliquet viverra.
        Vivamus non magna orci. Vivamus mollis mattis venenatis.
        Praesent sodales, enim ac ullamcorper pulvinar, orci turpis consectetur massa,
        lacinia pellentesque odio nisl at diam. Duis nunc mauris, condimentum luctus nulla a,
        vehicula tincidunt magna. Nunc nisi tortor, bibendum nec urna sed, tempor scelerisque sem.
        Phasellus rhoncus egestas elit, ut luctus nunc tincidunt at. Nam eu ullamcorper magna.
      </div>

      <div className={`content ${css(styles.fadeInDownBigContent3)}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis malesuada mi.
        Fusce laoreet nec nibh at pretium. Donec ultrices nisi eget risus aliquet viverra.
        Vivamus non magna orci. Vivamus mollis mattis venenatis.
        Praesent sodales, enim ac ullamcorper pulvinar, orci turpis consectetur massa,
        lacinia pellentesque odio nisl at diam. Duis nunc mauris, condimentum luctus nulla a,
        vehicula tincidunt magna. Nunc nisi tortor, bibendum nec urna sed, tempor scelerisque sem.
        Phasellus rhoncus egestas elit, ut luctus nunc tincidunt at. Nam eu ullamcorper magna.
      </div>

    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
