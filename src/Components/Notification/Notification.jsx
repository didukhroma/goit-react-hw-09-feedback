import PropTypes from 'prop-types';

const Notification = ({ message = "We don't have feedback" }) => (
  <p>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
