import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { ButtonProps } from './Button.types';
const scss = require('./Button.scss');

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
 const { className, color = 'black', bgColor = 'white', skeleton = false} = props;
    
    return (
        <>
        { skeleton ? (
            <Skeleton duration={1} width={55} height={30} />
        ): (
            <button 
                className={`${scss.button} ${className}`}
                style={{
                    borderColor: `${color}`,
                    backgroundColor: `${bgColor}`,
                    color: `${color}`
                }}>
            test
            </button>
        )
        }
        </>
    )
}

export default Button;