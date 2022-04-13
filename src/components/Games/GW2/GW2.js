import './GW2.scss';

const GW2 = (props) => {
  const t = props.translation;

  return (
    <div className='content'>
      <h4>Guild Wars 2</h4>
      <a href=
        'https://docs.google.com/spreadsheets/d/1PUD-Dm0MqKv3-1LHHFa5hwLeSNrZqkG-MIhxLXG6ayw/edit?usp=sharing'
        target="_blank"
        rel="noopener noreferrer"
        className='App-link'
      >{t('gw2.raidNotes')}</a>
    </div>
  )
}

GW2.propTypes = {};

GW2.defaultProps = {};

export default GW2;
