import PropTypes from 'prop-types';
import styles from './notification.module.scss';

const Notification = ({ message }) => {
  return (
    <>
      <h1 className={styles.title}>{message}</h1>
    </>
  );
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
