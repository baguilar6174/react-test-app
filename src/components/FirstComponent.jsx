import PropTypes from 'prop-types';
import React from 'react'

const FirstComponent = ({title, subtitle, name}) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstComponent.defaultProps = {
  name: "Bryan",
  // title: "No title",
  subtitle: "No subtitle",
}

export default FirstComponent;