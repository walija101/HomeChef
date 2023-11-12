import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "@/styles/DMeal.module.scss";
import Fade from '@mui/material/Fade';
import { signIn } from 'next-auth/react'
import { useState } from 'react';

const modalBoxStyles = {

    '& .MuiTextField-root': { m: 1, width: '95%'},
    maxWidth: '600px',
    maxHeight: '500px',
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
    p: 3,
    borderRadius: "10px",
    overflowY: "auto"
    
};

const ModalContent = () => {
    return (
        <div className={styles.container}>

           <h1 className={styles.title}>Joe's Casserole</h1>

           <img src={'./images/cass.jpg'} className={styles.img}/>

           <div className={styles.second}> 
                <hr/>               
                <div>Price: $29.99</div>
                <hr/> 
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint harum distinctio. Eos quam maiore.</div>
                <hr/> 
           </div>

           <div className={styles.third}>
                <div>Ingredients:</div>
                <ul className={styles.ingrediants}>
                    <li>corn</li>
                    <li>chicken</li>
                    <li>peas</li>
                </ul>
                <hr/> 
           </div>
           <div className={styles.fourth}>
                <div>
                    <div> Chef name: John Stewart </div>
                    <div>Rating: 4.5</div>
                </div>
                <img src={'./images/gordo.jpeg'} className={styles.pfp}/>
            </div>
            
            <div className={styles.order}>
                <button className={styles.button}>Order</button>
            </div>

        </div>
    )
};

type AuthModalProps = {
    mmodalIsOpen: boolean,
    mcloseModal: ()=>void
}

export default function LoginModal({ mmodalIsOpen, mcloseModal } : AuthModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={mmodalIsOpen}
                onClose={mcloseModal}
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
                <Fade in={mmodalIsOpen}>
                    <Box component='div' sx={modalBoxStyles}>
                        <ModalContent />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
