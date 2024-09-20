const {check} = require('express-validator')

const userRegisterValidator = [
    check('name', 'Name is required')
    .trim()
    .not()
    .isEmpty()
    .escape(),

    check('email', 'Email is required').escape().not().isEmpty().isEmail()
    .normalizeEmail({gmail_remove_dots : true})
    .withMessage('Email is invalid'),

    check('password', 'Password inavlid')
    .not()
    .isEmpty()
    .isLength({min : 6})
    .withMessage('Password must be at least 6 characters')
];

const userLoginValidator = [
    check('email', 'Email is required').not().isEmpty().isEmail().escape()
    .normalizeEmail({gmail_remove_dots : true})
    .withMessage('Email is invalid'),

    check('password', 'Password inavlid')
    .not()
    .isEmpty()
    .isLength({min : 6})
    .withMessage('Password must be at least 6 characters')
];

const userAddOrUpdateValidatorBySocial = [
    check('name', 'Name is required')
    .trim()
    .not()
    .isEmpty()
    .escape(),
    

    check('email', 'Email is required').not().isEmpty().isEmail().escape()
    .normalizeEmail({gmail_remove_dots : true})
    .withMessage('Email is invalid'),

    check('photo', 'photo is required')
    .trim()
    .not()
    .isEmpty()
    .escape(),
];

module.exports = {
    userRegisterValidator,
    userLoginValidator,
    userAddOrUpdateValidatorBySocial
}