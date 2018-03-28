import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
  const button = {
    x: -300,
    y: -600,
    widht: 600,
    height: 300,
    style: {
      fill: 'transparent',
      cursor: 'pointer'
    },
    onClick: props.authenticate
  };

  const text = {
    textAnchor: 'middle',
    x: 0,
    y: -440,
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 45,
      fill: '#e3e3e3',
      cursor: 'pointer'
    },
    onClick: props.authenticate
  };

  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>
        Login to practicipate!
      </text>
    </g>
  )
}

Login.proptypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;