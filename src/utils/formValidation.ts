import * as yup from 'yup'

const formValidate  = new yup.ObjectSchema({
    name: yup.string().required("Name is required").min(3 , 'Name is required'),
    email: yup.string().required("Email is required").email("A valid email is required"),
    message: yup.string().required('Message is required')
})

export default formValidate;