import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from '@/styles/AuthModal.module.scss'
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
    const [signUpData, setSignUpData] = useState(
        {
            email: "",
            name: "",
            phoneNumber: 0,
            password: "",
            type: ""
        }
    )

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setSignUpData(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Sign up to Home Chef</h2>

            <form className={styles.form}>
                <div className= {styles.inputRow}>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        name="name"
                        value={signUpData.name}
                    />  

                    <input
                        type="text"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={signUpData.email}
                    />
                    </div>

                <div className= {styles.inputRow}>
                    <input
                        type="text" 
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={signUpData.password}
                    />

                    <input
                        type="number"
                        placeholder="Number"
                        onChange={handleChange}
                        name="phoneNumber"
                        value={signUpData.phoneNumber}
                    />

                </div>
  
                <fieldset>
                    <legend>Are you a chef or an eater?</legend>
                    <input 
                        type="radio"
                        id="customer"
                        name="type"
                        value="customer"
                        checked={signUpData.type === "customer"}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer">Customer</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="chef"
                        name="type"
                        value="chef"
                        checked={signUpData.type === "chef"}
                        onChange={handleChange}
                    />
                    <label htmlFor="chef">Chef</label>
                    <br />
                </fieldset>
                
                <br />
                <button>Sign Up</button>
            </form>
        </div>
    )
};

type AuthModalProps = {
    modalIsOpen: boolean,
    closeModal: ()=>void
}

export default function AuthModal({ modalIsOpen, closeModal } : AuthModalProps) {
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
                        <ModalContent />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
