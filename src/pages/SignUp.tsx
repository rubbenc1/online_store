import * as Yup from "yup"
import {RegistrationForm} from "../common/interfaces/interfaces";
import {Formik, Form, FastField, ErrorMessage} from "formik";
import {MenuProvider} from "../common/utils/menuState";
import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";
import {useNavigate} from "react-router-dom";
import {useCreateUser} from "../common/hooks/useUser";
import {useEffect} from "react";
import {useRecoilValue} from "recoil";
import {authTokenState} from "../common/utils/authAtom";


const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    street: "",
    apartment:"",
    zip:"",
    city:"",
    country: ""
}

const validationSchema: Yup.ObjectSchema<RegistrationForm> = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
            'Password must contain at least one digit and one symbol'
        )
        .required(),
    phone: Yup.string().min(7, 'Phone must have at least 7 characters').required(),
    isAdmin: Yup.boolean().nullable(),
    street: Yup.string().nullable(),
    apartment: Yup.string().nullable(),
    zip: Yup.string().nullable(),
    city: Yup.string().required(),
    country: Yup.string().required()
})

const SignUp = () =>{
    const token = useRecoilValue(authTokenState);
    const navigate = useNavigate();
    const createUser = useCreateUser();
    const handleSubmit = (values: RegistrationForm) => {
        createUser(values, {
            onSuccess: (data) => {
                console.log('User created successfully:', data);
                // Perform actions on successful registration
            },
            onError: (error) => {
                console.error('Error creating user:', error);
                // Perform actions on error, such as displaying an error message
            }
        })
        navigate('/users/login')
    }

    useEffect(() => {
        if (token){
            navigate('/')
        }
    }, [token, navigate]);

    return (
        <MenuProvider>
            <div className='logo_and_formik'>
                <LogoAndAuth />
                <NavigationBar />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isValid})=>
                        <Form className='registration-form'>
                            <h2>Sign Up</h2>
                            <div>
                                <FastField type = 'text' id = 'name' placeholder = 'Name' name = 'name' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'name' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'email' id = 'email' placeholder = 'Email address' name = 'email' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'email' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'password' id = 'password' placeholder = 'Password' name = 'password' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'password' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'phone' placeholder = 'Phone' name = 'phone' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'phone' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'street' placeholder = 'Street' name = 'street' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'street' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'apartment' placeholder = 'Apartment' name = 'apartment' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'apartment' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'zip' placeholder = 'Zip' name = 'zip' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'zip' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'city' placeholder = 'City' name = 'city' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'city' component='div'/>
                            </div>
                            <div>
                                <FastField type = 'text' id = 'country' placeholder = 'Country' name = 'country' style = {{width: '200px'}}/>
                                <ErrorMessage name = 'country' component='div'/>
                            </div>
                            <button type= 'submit' disabled = {!isValid} style = {{width: '200px'}}>Sign Up</button>
                        </Form>
                    }
                </Formik>
            </div>
        </MenuProvider>
    )
}

export default SignUp;