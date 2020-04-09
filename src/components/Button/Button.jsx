import React from 'react'

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({href,type,children,secondary,...props}) => {

    const buttonClass = secondary ? styles.buttonSecondary : styles.button

    return(
    <>
    {
        href ?  
        (<a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>{children}</a>) 
        : 
        (<button type={type} className={buttonClass} {...props}>{children}</button>)
    }
    </>
    )
}

Button.propTypes = {
    href:PropTypes.string,
    type:PropTypes.oneOf(['submit','button','reset']),
    secondary:PropTypes.bool,
    children:PropTypes.node.isRequired
}
Button.defaultProps = {
    href:null,
    type:'button',
    secondary:false
}


export default Button;