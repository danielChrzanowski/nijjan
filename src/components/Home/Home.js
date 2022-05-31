import { css, StyleSheet } from 'aphrodite';
import { useEffect } from 'react';
import { fadeInDownBig, fadeInLeftBig } from 'react-animations';
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
    fadeInCarousel: {
      animationName: fadeInLeftBig,
      animationDuration: '2.5s'
    },
    fadeInDownBigAboutMe: {
      animationName: fadeInDownBig,
      animationDuration: '1s'
    },
    fadeInDownBigWhoAmI: {
      animationName: fadeInDownBig,
      animationDuration: '1.5s'
    },
    fadeInDownBigFeatures: {
      animationName: fadeInDownBig,
      animationDuration: '2s'
    },
    fadeInDownBigPlannedFeatures: {
      animationName: fadeInDownBig,
      animationDuration: '2.5s'
    },
    fadeInDownBigTechnologies: {
      animationName: fadeInLeftBig,
      animationDuration: '3s'
    }
  })

  return (
    <div>
      <div className={`carousel ${css(styles.fadeInCarousel)}`}>
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
        <div className={`content home-grid-element home-grid-col-span-2 ${css(styles.fadeInDownBigAboutMe)}`}>
          <h4>{t('home.grid.myApplications.title')}</h4>
          {t('home.grid.myApplications.text')}<br />

          <div className='vertical-gap-10' />
          {t('home.grid.myApplications.text2')}<br />
          - <a href='https://github.com/danielChrzanowski/RBM' className='App-link'>{t('home.grid.myApplications.angular')}</a><br />
          - <a href='https://github.com/danielChrzanowski/RBM_backend' className='App-link'>{t('home.grid.myApplications.springBoot')}</a><br />
          - <a href='https://github.com/danielChrzanowski/DiscordBOT' className='App-link'>{t('home.grid.myApplications.nodeJS')}</a><br />
          - <a href='https://github.com/danielChrzanowski/Java-Game' className='App-link'>{t('home.grid.myApplications.java')}</a><br />
          - <a href='https://github.com/danielChrzanowski/MusicPlayer' className='App-link'>{t('home.grid.myApplications.musicPlayer')}</a><br />

          <div className='vertical-gap-10' />
          {t('home.grid.myApplications.gitHubText')}
          <a href='https://github.com/danielChrzanowski' className='App-link'>GitHub</a><br />
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigWhoAmI)}`}>
          <h4>{t('home.grid.aboutMe.title')}</h4>
          <img src={myPhoto} className='my-photo border-radius-5' alt='Author' />
          <div className='text-align-center'>
            {t('home.grid.aboutMe.text')}
          </div>
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigFeatures)}`}>
          <h4>{t('home.grid.features.title')}</h4>
          - {t('home.grid.features.signIn')}<br />
          - {t('home.grid.features.dogeApi')}<br />
          - {t('home.grid.features.styleChange')}<br />
          - {t('home.grid.features.translation')}<br />
        </div>

        <div className={`content home-grid-element home-grid-col-span-2 ${css(styles.fadeInDownBigPlannedFeatures)}`}>
          <h4>{t('home.grid.plannedFeatures.title')}</h4>
          {t('home.grid.plannedFeatures.postureCheck')}
          <div className='vertical-gap-10' />
          {t('home.grid.plannedFeatures.firebase')}
        </div>

        <div className={`content home-grid-element ${css(styles.fadeInDownBigTechnologies)}`}>
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
