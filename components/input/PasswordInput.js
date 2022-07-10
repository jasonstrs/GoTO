import React, { useState } from 'react';
import CustomTextInput from './CustomTextInput';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';

export default function PasswordInput(props) {
  const [isSecured, setIsSecured] = useState(true);
  const icon = isSecured ? faEye : faEyeSlash;

  return (
    <CustomTextInput isSecured={isSecured} {...props}>
      <TouchableOpacity onPress={() => setIsSecured(!isSecured)}>
        <FontAwesomeIcon icon={icon} />
      </TouchableOpacity>
    </CustomTextInput>
  );
}
