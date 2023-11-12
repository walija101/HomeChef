import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/styles/LoginModal.module.scss'
import { signIn } from 'next-auth/react'
import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IconButton, InputAdornment, TextField, Fade } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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

type userLoginInfo = {
    email: string,
    password: string
}
const ModalContent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const schema = yup.object({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const formContents = useForm<userLoginInfo>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = formContents

    const onSubmit = (data: userLoginInfo) => {
        const { email, password } = data;
        signIn('credentials', {
            email, password
        })
    }

    return (
        <FormProvider {...formContents}>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <h2>Welcome back to HomeChef</h2>
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
                <LoadingButton 
                    type='submit' 
                    sx={{ 
                        marginTop: '25px', width: '345px', bgcolor: '#733635',
                        '&:hover': { bgcolor: '#4b6f40'} 
                    }} 
                    loading={isSubmitting} variant="contained"
                >
                    Login
                </LoadingButton>
            </form>
        </FormProvider>
    )
};

type AuthModalProps = {
    lmodalIsOpen: boolean,
    lcloseModal: ()=>void
}

export default function LoginModal({ lmodalIsOpen, lcloseModal } : AuthModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={lmodalIsOpen}
                onClose={lcloseModal}
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
                <Fade in={lmodalIsOpen}>
                    <Box component='div' sx={modalBoxStyles}>
                        <ModalContent />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
