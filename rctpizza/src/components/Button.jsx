import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button 
      className={classNames('button', className, {'button--outline': outline})}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  obClick: PropTypes.func,
}

export default Button;