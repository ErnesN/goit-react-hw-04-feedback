import PropTypes from 'prop-types';
import styles from './statistic.module.scss';
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.text}>Good:{good}</p>
      <p className={styles.text}>Neutral:{neutral}</p>
      <p className={styles.text}>Bad:{bad}</p>

      <p className={styles.text}>Total:{total}</p>
      <p className={styles.text}>Positive feedback:{positivePercentage}</p>
    </>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
