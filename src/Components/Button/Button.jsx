import PropTypes from 'prop-types';
import { capitalize } from '../../utils/capitalize';
import styles from './Button.module.css';

const Button = ({ text = 'Button', onIncrement }) => {
  const handlerIncrement = () => {
    onIncrement(text);
  };

  const buttonText = capitalize(text);

  return (
    <button type="button" onClick={handlerIncrement} className={styles.button}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onIncrement: PropTypes.func.isRequired,
};

export default Button;
