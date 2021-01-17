import { errorRules } from '../helpers/form.config';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const validate = (value, { rule, ruleValue }) => {
    switch (rule) {
        case errorRules.REQUIRED:
            if (!value) {
                return errorRules.REQUIRED;
            }
            break;
        case errorRules.MIN_LENGTH:
            if (value && value.length < ruleValue) {
                return errorRules.MIN_LENGTH;
            }
            break;
        case errorRules.VALID_EMAIL:
            if (!emailRegex.test(value)) {
                return errorRules.VALID_EMAIL;
            }
            break;
        default:
            return false;
    }
};

export const getFieldError = (errors) => {
    if (!errors) return null;

    const possibleErrors = Object.keys(errorRules).map(key => errorRules[key]);

    const result = errors.filter(error => possibleErrors.includes(error));

    return result[0] || null;
};

export const getErrors = (fields, allValidations) => {
    const errors = {};

    if (allValidations) {
        Object.keys(allValidations).forEach(key => {
            errors[key] = allValidations[key].map(validation => validate(fields[key], validation)).filter(error => Boolean(error));
        });
    }

    return errors;
};
