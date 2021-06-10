import Button from '../Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  const data = { good, neutral, bad };
  const elements = Object.keys(data);
  return (
    <>
      {elements.map(elem => {
        return <Button key={elem} text={elem} onIncrement={onLeaveFeedback} />;
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
