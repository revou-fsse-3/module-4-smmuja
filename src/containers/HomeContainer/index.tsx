import { Input, Text, Button, Card, Table } from '../../components';
import { FormikState, useFormik} from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

interface DataProps {
    name:string;
    age:string;
    hobby:string;
}

const HomeContainer = () => {

    const [users, setUsers] = useState<DataProps[]>([]);
    const [selectedUser, setSelectedUser] = useState<DataProps>();
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
    
    const submit = (values: DataProps, {resetForm}: Partial<FormikState<DataProps>>) => {
        setUsers([...users, values])
    }

    const formMik = useFormik ({
        initialValues: selectedUser ?? {
            name: '',
            age: '',
            hobby: '',
        },
        onSubmit: (values, {resetForm}) => {
            setUsers([...users, values])
            resetForm()
        },
        
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            birthDate: yup.number().required(),
            street: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            zip: yup.number().required(),
            username: yup.string().required(),
            password: yup.string().required(),

        }),
        enableReinitialize: true
    });

    const onDelete = (index: number) => {
        setUsers((prevState) => prevState.filter((_, dataIndex) => dataIndex !== index))
    }

    const onEdit = (index: number) => {
        const findUser = users.find((_, dataIndex) => dataIndex === index);

        setSelectedUser(findUser);
        // formMik.setFieldValue('name', selectedUser?.name)
        // formMik.setFieldValue('age', selectedUser?.age)
        // formMik.setFieldValue('hobby', selectedUser?.hobby)
    }

    return(
        <Card  border={false} className='flex flex-col gap-2.5'>
        
    
            {/* <Card border>
                <Table headers= {[
                    {
                        label: 'Nama',
                        key: 'name',
                    },
                    {
                        label: 'Umur',
                        key: 'age',
                    },
                    {
                        label: 'Hobi',
                        key: 'hobby',
                    },
                ]} data={users}
                onEdit={onEdit}
                onDelete={onDelete}/>

                
            </Card> */}

            <Card border>
                {step === 1 && (

                    <form onSubmit={formMik.handleSubmit}>

                    <div>
                        <Text>{'Full Name'}</Text>
                        <Input className='block border-neutral-400 border' 
                        name={'name'} 
                        placeholder='Input your name'
                        value={formMik.values.name}
                        onChange={formMik.handleChange('name')}/>
                        {
                            formMik.errors.name && (
                                <Text>{formMik.errors.name}</Text>
                            )
                        }
                    </div>
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
                                <Text>{formMik.errors.email}</Text>
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
                                <Text>{formMik.errors.birthDate}</Text>
                            )
                        }
                    </div>
                    <Button label={'Next'} onClick={handleNext} type='button' className='bg-gray-500' />


                    </form>
                )}
                    
                {step === 2 && (

                    <form onSubmit={formMik.handleSubmit}>

                <div>
                    <Text>{'Street address'}</Text>
                    <Input className='block border-neutral-400 border' 
                    name={'street'} 
                    placeholder='Input street address'
                    value={formMik.values.street}
                    onChange={formMik.handleChange('street')}/>
                    {
                        formMik.errors.street && (
                            <Text>{formMik.errors.street}</Text>
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
                            <Text>{formMik.errors.city}</Text>
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
                            <Text>{formMik.errors.state}</Text>
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
                            <Text>{formMik.errors.zip}</Text>
                        )
                    }
                </div>
                <Button label={'Previous'} onClick={handlePrevious} type='button' className='bg-gray-500' />
                <Button label={'Next'} onClick={handleNext} type='button' className='bg-gray-500' />

                </form>
                )}
                {step === 3 && (

                    <form onSubmit={formMik.handleSubmit}>

                    <div>
                        <Text>{'Username'}</Text>
                        <Input className='block border-neutral-400 border' 
                        name={'username'} 
                        placeholder='Input username'
                        value={formMik.values.username}
                        onChange={formMik.handleChange('username')}/>
                        {
                            formMik.errors.username && (
                                <Text>{formMik.errors.username}</Text>
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
                                <Text>{formMik.errors.password}</Text>
                            )
                        }
                    </div>
                    <Button label={'Previous'} onClick={handlePrevious} type='button' className='bg-gray-500' />
                    <Button label={'submit'} type='submit' className='bg-gray-500' />


                    </form>
                )}

                {/* <Button label={'Previous'} onClick={handlePrevious} type='button' className='bg-gray-500' />
                <Button label={'Next'} onClick={handleNext} type='button' className='bg-gray-500' /> */}

            </Card>
        </Card>
    )
}

export default HomeContainer;