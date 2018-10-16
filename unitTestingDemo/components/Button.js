import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
const  Button =(props) => {
     return(
         <TouchableOpacity>
         <Text>{props.label}</Text>
        </TouchableOpacity>
     )
};

Button.PropTypes = {
    label: PropTypes.string.isRequired,
}

Button.displayName = 'Button';
export default Button;