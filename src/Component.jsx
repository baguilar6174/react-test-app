import PropTypes from 'prop-types';

const Component = ({ title, quantity }) => {
  return (
    <>
      <p>{title}</p>
      <small>{quantity}</small>
    </>
  )
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number,
}

Component.defaultProps = {
  title: "Non title",
  quantity: 0,
}

export default Component