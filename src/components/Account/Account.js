import { useEffect } from 'react';
import './Account.scss';

const Account = (props) => {
  // const t = props.translation;
  const title = props.title;

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  const user = props.user === null ? "" : props.user;

  return (
    <div className='content'>
      <h4>Zalogowano: {user.displayName}</h4>
    </div>
  );
}

Account.propTypes = {};

Account.defaultProps = {};

export default Account;
