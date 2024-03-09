import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../../config';
import axios from 'axios';
//import { SignupInput, SigninInput } from '@mr-dash/mindmosaic-zod';



//useSignup and useSignin are custom hooks that handle the form inputs and submit the form to the backend
//will implement these hooks in the Signup and Signin components later
// export const useSignup = () => {
//     const [formInputs, setFormInputs] = useState<SignupInput>({
//         username: "",
//         email: "",
//         password: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);
//     const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/user/signup`,
//                 formInputs
//             );
//             const jwt = response.data.token;
//             localStorage.setItem("token", jwt);
//             setSuccess(true);
//             setLoading(false);
//         } catch (error: any) {
//             setError(error.response.data.message);
//             setLoading(false);
//         }
//     };
//     return { formInputs, setFormInputs, loading, error, success, handleSubmit };
// }
// export const useSignin = () => {
//     const [formInputs, setFormInputs] = useState<SigninInput>({
//         username: "",
//         password: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);
//     const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post(
//                 `${BACKEND_URL}/api/v1/user/signin`,
//                 formInputs
//             );
//             const jwt = response.data.token;
//             localStorage.setItem("token", jwt);
//             setSuccess(true);
//             setLoading(false);
//         } catch (error: any) {
//             setError(error.response.data.message);
//             setLoading(false);
//         }
//     };
//     return { formInputs, setFormInputs, loading, error, success, handleSubmit };
// }


//useBlogs is a custom hook that fetches the blogs from the backend

export type blog = {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    author: { [key: string]: string };
}
export const useBlogs = () => {
    const [blogs, setBlogs] = useState<blog[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        setLoading(true);
        axios.get(`${BACKEND_URL}/api/v1/blog/page/1`, 
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        ).then(response => {
            setBlogs(response.data);
            setLoading(false);
        }).catch(error => {
            setError(error.response.data.message);
            setLoading(false);
        });
    }, []);
    return { blogs, loading, error };
}