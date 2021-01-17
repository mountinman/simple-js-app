import React from 'react';
import PropTypes from 'prop-types';

import ErrorMsg from '../ErrorMsg/ErrorMsg';

import { fieldNames } from '../../../helpers/form.config';
import fieldLabels from '../../../constants/form.constants';

const Form = ({ onChange, onBlur, onSubmit, errors, isDisabled }) => {
    const { email, message } = fieldLabels;

    const onFieldChange = (e) => {
        const { name, value } = e.target;

        onChange({
            field: name,
            value,
        });
    };

    const onFieldBlur = (e) => {
        onBlur({ field: e.target.name });
    };

    return (
        <>
            <div className="form-field">
                <label
                    htmlFor={fieldNames.EMAIL}
                    className="field-label"
                >
                    {fieldNames.EMAIL}
                </label>
                <input
                    type="email"
                    id={fieldNames.EMAIL}
                    name={fieldNames.EMAIL}
                    autoComplete="on"
                    onChange={onFieldChange}
                    onBlur={onFieldBlur}
                />
                <ErrorMsg
                    id={`${fieldNames.EMAIL}Error`}
                    errors={errors.email}
                    errorMessages={email.errorMessages}
                />
            </div>
            <div className="form-field">
                <label
                    htmlFor={fieldNames.MESSAGE}
                    className="field-label"
                >
                    {fieldNames.MESSAGE}
                </label>
                <textarea
                    type="text"
                    id={fieldNames.MESSAGE}
                    name={fieldNames.MESSAGE}
                    autoComplete="on"
                    rows="6"
                    onChange={onFieldChange}
                    onBlur={onFieldBlur}
                />
                <ErrorMsg
                    id={`${fieldNames.MESSAGE}Error`}
                    errors={errors.message}
                    errorMessages={message.errorMessages}
                />
            </div>
            <button
                className={isDisabled ? 'disabled' : ''}
                disabled={isDisabled}
                type="button"
                onClick={onSubmit}
            >Send
            </button>
        </>
    );
};

Form.propTypes = {
    errors: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default Form;
