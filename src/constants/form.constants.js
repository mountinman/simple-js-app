export default {
    'message': {
        'errorMessages': [
            { 'type': 'required', 'message': 'Your message is required with minimum 30 characters' },
            { 'type': 'min_length', 'message': 'Please enter a message with minimum 30 characters' },
        ],
    },
    'email': {
        'errorMessages': [
            { 'type': 'required', 'message': 'Your email is required' },
            { 'type': 'valid_email', 'message': 'Enter a valid E-mail address' },
        ],
    },
};
