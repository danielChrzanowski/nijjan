import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/Home/gw2_1.jpg';
import image2 from '../../assets/Home/gw2_2.jpg';
import image3 from '../../assets/Home/gw2_3.jpg';
import './Home.scss';

const Home = (props) => {
  const t = props.translation;

  return (
    <div>
      <div className='carousel'>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 carouselImg" src={image1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carouselImg" src={image2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carouselImg" src={image3} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='content'>
        <h4> {t('homeComponent')}</h4>
        Tłumaczenie tylko tu na razie działa
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
        and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot
        foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail
        in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
        choice is untrammelled and when nothing prevents our being able to do what we like best,
        every pleasure is to be welcomed and every pain avoided. But in certain circumstances and
        owing to the claims of duty or the obligations of business it will frequently occur that
        pleasures have to be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects pleasures to secure
        other greater pleasures, or else he endures pains to avoid worse pains."
        <br /><br />
        ------------------
      </div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
