import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title = 'Section', children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
