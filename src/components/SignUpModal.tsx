import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/styles/SignUpModal.module.scss'
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IconButton, InputAdornment, TextField, Fade, RadioGroup, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { model } from 'mongoose';

const modalBoxStyles = {
    '& .MuiTextField-root': { m: 1, width: '95%'},
    maxWidth: '400px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 390,
    width: '30vw',
    bgcolor: 'background.paper',
    border: '1px solid lightgrey',
    outline: 'none',
    boxShadow: 24,
    p: 3
};

type userSignUpInfo = {
    email: string,
    password: string
}
const ModalContent = ({ closeModal }: { closeModal: () => void }) => {
    const [showPassword, setShowPassword] = useState(false);

    const [type, setType] = useState(
        "Customer"
    )

    const schema = yup.object({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const formContents = useForm<userSignUpInfo>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = formContents

    const onSubmit = async (data: userSignUpInfo) => {
        const { email, password } = data
        try {
            await signIn('credentials', {
                email,
                password,
                ourMode: 'signingUp',
                redirect: false
            });
            closeModal()
        } catch(error: any) {
            console.log(error)
        }
    }

    return (
        <FormProvider {...formContents}>
            <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign Up to HomeChef</h2>
                <TextField required label="Email" placeholder="Enter your email"
                    {...register('email')}
                    sx={{
                        maxWidth: '345px',
                        marginBottom: '18px'
                    }}
                    helperText={errors.email?.message}
                    error={!!errors.email}
                />
                <TextField required label="Password" placeholder="Enter password"
                    {...register('password')}
                    sx={{
                        maxWidth: '345px',
                        marginBottom: '18px'
                    }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                            </InputAdornment>
                        )
                    }}
                    helperText={errors.email?.message}
                    error={!!errors.email}
                />
                <div className = {styles.buttonStyle}>
                    <div>
                        <input type="radio" value="Customer" name = "type" checked = {type === "Customer"} onChange = {() => setType("Customer")}/> 
                        <label> Customer</label>
                    </div>
                    <div> 
                        <input type="radio" value="Chef" name = "type" checked = {type === "Customer"} onChange = {() => setType("Customer")}/> 
                        <label> Chef</label>
                    </div>
                    
    

                </div>
                <LoadingButton 
                    type='submit' 
                    sx={{ 
                        marginTop: '25px', width: '345px', bgcolor: '#4b6f40',
                        '&:hover': { bgcolor: '#733635'} 
                    }} 
                    loading={isSubmitting} variant="contained"
                >
                    Sign Up
                </LoadingButton>
            </form>
        </FormProvider>
    )
};

type SignUpModalProps = {
    modalIsOpen: boolean,
    closeModal: ()=>void
}

export default function SignUpModal({ modalIsOpen, closeModal } : SignUpModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalIsOpen}
                onClose={closeModal}
                closeAfterTransition
                components={{
                    Backdrop
                }}
                componentsProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }}
            >
                <Fade in={modalIsOpen}>
                    <Box component='div' sx={modalBoxStyles}>
                        <ModalContent closeModal={closeModal} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
