import PropTypes from 'prop-types';
import styles from './section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};
