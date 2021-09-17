import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Your name is required!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'You must choose a size'),
    sauce: yup
        .string()
        .oneOf(['red', 'garlic'], 'You must choose a sauce'),
    topping1: yup
        .string(),
    topping2: yup
        .string(),
    topping3: yup
        .string(),
    topping4: yup
        .string(),
    special: yup
        .string()
})

export default schema;