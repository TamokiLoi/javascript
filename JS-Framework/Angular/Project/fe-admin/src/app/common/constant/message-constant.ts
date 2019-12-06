// define list validator error-mesage
export class MessageConstant {
    public static ERROR_MESSAGE = {
        'username': [
            { type: 'required', message: 'Field is required' },
            { type: 'minlength', message: 'Username must be at least 6 characters long' },
            // { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
            // { type: 'pattern', message: 'Your username must contain only numbers and letters' },
            // { type: 'validUsername', message: 'Your username has already been taken' }
        ],
        'password': [
            { type: 'required', message: 'Field is required' },
            { type: 'minlength', message: 'Password must be at least 6 characters long' },
        ],
        'email': [
            { type: 'required', message: 'Field is required' },
            { type: 'email', message: 'Email is not valid' },
            { type: 'pattern', message: 'Email is not valid' }
        ],
        'common': [
            { type: 'required', message: 'Field is required' },
        ],
    };
}