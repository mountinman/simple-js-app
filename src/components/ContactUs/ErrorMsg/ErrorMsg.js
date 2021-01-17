import React from 'react';
import PropTypes from 'prop-types';

import { getFieldError } from '../../../helpers/form.validate';

const ErrorMsg = ({ errors, errorMessages, id }) => {
    const error = getFieldError(errors);
    if (!error) return null;

    const errMessage = errorMessages.find(errMsg => errMsg.type === error);

    return <p id={id} role="alert" className="error">{(errMessage && errMessage.message) || 'error!' }</p>;
};

ErrorMsg.propTypes = {
    id: PropTypes.string,
    errors: PropTypes.array,
    errorMessages: PropTypes.array,
};

export default ErrorMsg;
