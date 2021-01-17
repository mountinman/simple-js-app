import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Form from './Form/Form';

import { getErrors } from '../../helpers/form.validate';
import { validations } from '../../helpers/form.config';

import './style.scss';

const ContactUs = () => {
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [isDisabled, setDisabledState] = useState(true);
    const [isSubmitted, setSubmittedState] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (errors
            && errors.email
            && errors.email.length === 0
            && errors.message
            && errors.message.length === 0) setDisabledState(false);
    }, [errors]);

    const onFieldChange = ({ field, value }) => {
        setFields({
            ...fields,
            [field]: value,
        });
    };

    const onFieldBlur = ({ field }) => {
        const fieldErrors = getErrors(fields, validations)[field];
        setErrors({
            ...errors,
            [field]: fieldErrors,
        });
    };

    const onSubmit = () => {
        console.log('submitted');
        setSubmittedState(true);
        setTimeout(() => {
            history.push('/');
        }, 3500);
    };

    return (
        <>
            <Navigation />
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <Form
                    fields={fields}
                    onChange={onFieldChange}
                    onBlur={onFieldBlur}
                    onSubmit={onSubmit}
                    errors={errors}
                    isDisabled={isDisabled}
                />
                {isSubmitted && <p className="success">MESSAGE SENT, you will be routed to home page!</p>}
            </div>
        </>
    );
};

export default ContactUs;
