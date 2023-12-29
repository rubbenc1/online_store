import * as Yup from 'yup'
import {ErrorMessage, FastField, Form, Formik} from "formik";
import {User} from "../common/interfaces/interfaces";
import {Link, useNavigate} from "react-router-dom";
import {useLoginUser} from "../common/hooks/useUser";
import {useEffect, useState} from "react";
import {authTokenState} from "../common/utils/authAtom";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {MenuProvider} from "../common/utils/menuState";
import LogoAndAuth from "../components/LogoAndAuth";
import NavigationBar from "../components/NavigationBar";
import {idState} from "../common/utils/idAtom";



const initialValues = {
    email: '',
    password: ''
}

const validationSchema:Yup.ObjectSchema<User> = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
})
const LogIn = () =>{
    const [loginError, setLoginError] = useState<string | null>(null);
    const loginUser = useLoginUser();
    const navigate = useNavigate();
    const setToken = useSetRecoilState(authTokenState);
    const setId = useSetRecoilState(idState);
    const token = useRecoilValue(authTokenState)

    const handleFieldFocus = () => {
        // Reset the error state when any field is focused
        setLoginError(null);
    };
    const handleSubmit = (values: User) =>{
        try {
            setLoginError(null);
            loginUser(values, {
                onSuccess(data) {
                    console.log('Successfully logged in', data);
                    if (data.token && data.id){
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('id', data.id);

                        // Update Recoil state
                        setToken(localStorage.getItem('token') || '');
                        setId(localStorage.getItem('id') || '');
                    }

                    navigate('/')
                },
                onError(error: any){
                    console.log('Error logging in', error);
                    setLoginError('Invalid email or password. Please try again.');
                },
            });

        }catch(error){
            console.error('Unexpected error logging in', error);
            setLoginError('An unexpected error occurred. Please try again later.');
        }
    }

    useEffect(() => {
        if (token){
            navigate('/')
        }
    }, [token, navigate]);

    return(
        <MenuProvider>
            <>
                <LogoAndAuth />
                <NavigationBar />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isValid})=>

                    <Form className='login-container'>
                        <div>
                            <FastField type = 'text' id = 'email' placeholder = 'Email address' name = 'email' style = {{width: '200px'}} onFocus = {handleFieldFocus}/>
                            <ErrorMessage name = 'email' component='div'/>
                        </div>
                        <div>
                            <FastField type = 'password' placeholder = 'Password' id = 'password' name = 'password' style = {{width: '200px'}} onFocus={handleFieldFocus} />
                            <ErrorMessage name='password' component='div'/>
                        </div>
                        {loginError && (
                            <div style = {{color: 'red'}}>
                                {loginError}
                            </div>
                            )}
                        <button type= 'submit' disabled = {!isValid} style={{background:'lightblue', padding: '5px 20px', color:'#F3F6FF', borderRadius:'6px', cursor:'pointer'}}>Log in</button>
                        <Link to='/users/register' style = {{color:'#000', padding: '10px', borderRadius:'6px', cursor: 'pointer'}}>
                            <p >Create new account</p>
                        </Link>
                    </Form>
                    }
                </Formik>
            </>
        </MenuProvider>
    )
}

export default LogIn;