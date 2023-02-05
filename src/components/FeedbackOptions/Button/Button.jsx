import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
