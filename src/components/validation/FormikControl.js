import React from 'react';
import { Input, Checkboxs } from '.';

import PropTypes from 'prop-types';
const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    // case "textarea":
    //   return <Textarea {...rest} />;
    // case "select":
    // return <Selects {...rest} />;
    case 'checkbox':
      return <Checkboxs {...rest} />;
    // case "date":
    //   return <DateComponent {...rest} />;
    // case "file":
    //   return <Files {...rest} />;
    // case "time":
    //   return <DateTimePicker {...rest} />;

    default:
      return null;
  }
};
FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
};
export default FormikControl;
