import { css, StyleSheet } from 'aphrodite';
import { useEffect } from 'react';
import { fadeInDownBig, slideInDown } from 'react-animations';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/Home/gw2_1.jpg';
import image2 from '../../assets/Home/gw2_2.jpg';
import image3 from '../../assets/Home/gw2_3.jpg';
import myPhoto from '../../assets/Home/myPhoto.jpg';
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
      animationDuration: '3.5s'
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
    },
    fadeInDownBigContent4: {
      animationName: fadeInDownBig,
      animationDuration: '3s'
    },
    fadeInDownBigContent5: {
      animationName: fadeInDownBig,
      animationDuration: '3.5s'
    }
  })

  return (
    <div>
      <div className={`carousel ${css(styles.slideInDownCarousel)}`}>
        <Carousel indicators={false} fade>
          <Carousel.Item>
            <img className="d-block w-100 border-radius-5" src={image1} alt="Guild wars 2 character" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 border-radius-5" src={image2} alt="Guild wars 2 jade bot" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 border-radius-5" src={image3} alt="Guild wars 2 character with hammer" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='home-grid'>
        <div className={`content home-grid-element home-grid-col-span-2 ${css(styles.fadeInDownBigContent1)}`}>
          <h4>{t('home.grid.aboutMe.title')}</h4>
          {t('home.grid.aboutMe.text')}<br />

          <div className='vertical-gap-10' />
          {t('home.grid.aboutMe.text2')}<br />
          - <a href='https://github.com/danielChrzanowski/RBM' className='App-link'>{t('home.grid.aboutMe.angular')}</a><br />
          - <a href='https://github.com/danielChrzanowski/RBM_backend' className='App-link'>{t('home.grid.aboutMe.springBoot')}</a><br />
          - <a href='https://github.com/danielChrzanowski/DiscordBOT' className='App-link'>{t('home.grid.aboutMe.nodeJS')}</a><br />
          - <a href='https://github.com/danielChrzanowski/Java-Game' className='App-link'>{t('home.grid.aboutMe.java')}</a><br />
          - <a href='https://github.com/danielChrzanowski/MusicPlayer' className='App-link'>{t('home.grid.aboutMe.musicPlayer')}</a><br />

          <div className='vertical-gap-10' />
          {t('home.grid.aboutMe.gitHubText')}
          <a href='https://github.com/danielChrzanowski' className='App-link'>GitHub</a><br />
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigContent2)}`}>
          <h4>{t('home.grid.whoAmI.title')}</h4>
          <img src={myPhoto} className='my-photo border-radius-5' alt='Author' />
          <div className='about-me'>
            {t('home.grid.whoAmI.text')}
          </div>
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigContent3)}`}>
          <h4>{t('home.grid.functions.title')}</h4>
          - {t('home.grid.functions.signIn')}<br />
          - {t('home.grid.functions.dogeApi')}<br />
          - {t('home.grid.functions.styleChange')}<br />
          - {t('home.grid.functions.translation')}<br />
        </div>

        <div className={`content home-grid-element home-grid-col-span-2 ${css(styles.fadeInDownBigContent4)}`}>
          <h4>{t('home.grid.plannedFunctions.title')}</h4>
          {t('home.grid.plannedFunctions.postureCheck')}
          <div className='vertical-gap-10' />
          {t('home.grid.plannedFunctions.firebase')}
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigContent5)}`}>
          <h4>{t('home.grid.technologies')}</h4>
          - React 18<br />
          - React bootstrap<br />
          - React hooks<br />
          - React-animations (Aphrodite)<br />
          - React router 6<br />
          - Font awesome icons<br />
          - i18next<br />
          - firebase<br />
          - node-fetch<br />
        </div>

      </div>

    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
