export const errorRules = {
    REQUIRED: 'required',
    MIN_LENGTH: 'min_length',
    VALID_EMAIL: 'valid_email',
};

export const fieldNames = {
    MESSAGE: 'message',
    EMAIL: 'email',
};

export const validations = {
    message: [
        { rule: errorRules.REQUIRED },
        { rule: errorRules.MIN_LENGTH, ruleValue: 30 },
    ],
    email: [
        { rule: errorRules.REQUIRED },
        { rule: errorRules.VALID_EMAIL },
    ],
};
