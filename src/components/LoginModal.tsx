import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/styles/LoginModal.module.scss'
import Fade from '@mui/material/Fade';
import { signIn } from 'next-auth/react'
import { useState } from 'react';

const modalBoxStyles = {
    '& .MuiTextField-root': { m: 1, width: '95%'},
    maxWidth: '450px',
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

const ModalContent = () => {
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: "",
        }
    )

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setLoginData(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Welcome back to Home Chef</h2>

            <form className={styles.form}>
                <div className= {styles.typeContainer}>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={loginData.email}
                    />

                    <input
                        type="text"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={loginData.password}
                    />
                </div>

                <br />
                <button>Login</button>
            </form>
        </div>
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
