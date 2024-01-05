import { Input, Text, Button, Card } from '../../components';
import { useFormik} from 'formik';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext, ContextType } from "../../Provider";
// import { Controller, useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"





interface DataProps {   
        name: string;
        email: string;
        birthDate: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        username: string;
        password: string;

}

const RegisterContainer = () => {

    const navigate = useNavigate();

    const context = useContext<ContextType>(AppContext)
    const setOpen = context?.setOpen
    const setMessage = context?.setMessage


    const handleError = (message: string) => {
        setOpen?.(true)
        setMessage?.(message)
    }


    // const [users, setUsers] = useState<DataProps[]>([]);
    const [selectedUser] = useState<DataProps>();
    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if(step ===3) {
            return
        }
        setStep((prevState) => prevState +1)
    }

    const handlePrevious = () => {
        if(step === 1) {
            return
        }
        setStep((prevState) => prevState -1);
    }
    

    const formMik = useFormik ({
        initialValues: selectedUser ?? {
            name: '',
            email: '',
            birthDate: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            username: '',
            password: '',
        },
        onSubmit: async (data: DataProps) => {
            try {
                await axios.post('https://mock-api.arikmpt.com/api/user/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
    
                navigate('/list')
            } catch (error) {
                const err = error as AxiosError as any
                const errors = err.response?.data?.errors
                if(Array.isArray(errors)) {
                    return
                }
                handleError(errors)
            }
            
        },
        
        // onSubmit: (values, {resetForm}) => {
        //     setUsers([...users, values])
        //     resetForm()
        // },
        
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            birthDate: yup.number().required(),
            street: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            zip: yup.number().required(),
            username: yup.string().required(),
            password: yup.string().required().min(
                8,'at least 8 character') 

        }),
        enableReinitialize: true
    });



    return(
        <Card  border={false} className='flex flex-col gap-2.5'>
        
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-900">Create an account</h2>
            </div>

            <Card border>
                {step === 1 && (

                    <form onSubmit={formMik.handleSubmit}>

                        <fieldset className=''>

                            
                        <legend className='text-base text-center font-semibold text-black-500'>
                            Personal Information
                        </legend>

                    <div>
                        <Text>{'Full Name'}</Text>
                        <Input className='block border-neutral-400 border' 
                        name={'name'} 
                        placeholder='Input your name'
                        value={formMik.values.name}
                        onChange={formMik.handleChange('name')}/>
                        {
                            formMik.errors.name && (
                                <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.name}</Text>
                            )
                        }
                    </div>
                    
                    <div className='my-1'>
                        <Text>{'Date of Birth'}</Text>
                        <Input className='block border-neutral-400 border' 
                        name={'birthDate'}
                        placeholder='Input your date of birth'
                        value={formMik.values.birthDate}
                        onChange={formMik.handleChange('birthDate')}/>
                        {
                            formMik.errors.birthDate && (
                                <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.birthDate}</Text>
                            )
                        }
                    </div>
                    <Button label={'Next'} onClick={handleNext} type='button' className='bg-gray-500 text-center' />
                        </fieldset>



                    </form>
                )}
                    
                {step === 2 && (

                    <form onSubmit={formMik.handleSubmit}>

                        <fieldset>

                            <legend className='text-base text-center font-semibold text-black-500'>
                                Address Information
                            </legend>

                            <div>
                                <Text>{'Street address'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'street'} 
                                placeholder='Input street address'
                                value={formMik.values.street}
                                onChange={formMik.handleChange('street')}/>
                                {
                                    formMik.errors.street && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.street}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'City'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'city'}
                                placeholder='Input city'
                                value={formMik.values.city}
                                onChange={formMik.handleChange('city')}
                                />
                                {
                                    formMik.errors.city && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.city}</Text>
                                    )
                                }
                            </div>
                            <div className='my-1'>
                                <Text>{'State'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'hobby'}
                                placeholder='Input state'
                                value={formMik.values.state}
                                onChange={formMik.handleChange('state')}/>
                                {
                                    formMik.errors.state && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.state}</Text>
                                    )
                                }
                            </div>
                            <div className='my-1'>
                                <Text>{'Zip Code'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'hobby'}
                                placeholder='Input zip code'
                                value={formMik.values.zip}
                                onChange={formMik.handleChange('zip')}/>
                                {
                                    formMik.errors.zip && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.zip}</Text>
                                    )
                                }
                            </div>

                            <div className=' space-x-2 space-y-2' >

                            <Button label={'Previous'} onClick={handlePrevious} type='button' className='bg-gray-500' />
                            <Button label={'Next'} onClick={handleNext} type='button' className='text-center bg-gray-500' />
                            </div>
                                </fieldset>


                </form>
                )}
                {step === 3 && (

                    <form onSubmit={formMik.handleSubmit}>

                        <fieldset>

                            <legend className='text-base text-center font-semibold text-black-500'>
                                Account Information
                            </legend>

                                <div>
                            <Text>{'Email'}</Text>
                            <Input className='block border-neutral-400 border' 
                            name={'age'}
                            placeholder='Input your email'
                            value={formMik.values.email}
                            onChange={formMik.handleChange('email')}
                            />
                            {
                                formMik.errors.email && (
                                    <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.email}</Text>
                                )
                            }
                            </div>

                            <div>
                                <Text>{'Username'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'username'} 
                                placeholder='Input username'
                                value={formMik.values.username}
                                onChange={formMik.handleChange('username')}/>
                                {
                                    formMik.errors.username && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.username}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Password'}</Text>
                                <Input className='block border-neutral-400 border' 
                                name={'password'}
                                placeholder='Input password'
                                value={formMik.values.password}
                                onChange={formMik.handleChange('password')}
                                />
                                {
                                    formMik.errors.password && (
                                        <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.password}</Text>
                                    )
                                }
                            </div>

                            <div className=' space-x-2 space-y-2' >

                            <Button label={'Previous'} onClick={handlePrevious} type='button' className='bg-gray-500' />
                            <Button label={'submit'} type='submit' className='bg-gray-500' />
                            </div>
                        </fieldset>



                    </form>
                )}

            </Card>
        </Card>
    )
}

export default RegisterContainer;