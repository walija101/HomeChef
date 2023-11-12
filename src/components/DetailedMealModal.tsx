import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "@/styles/DMeal.module.scss";
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import { MealType } from '@/lib/models/meal/meal.types';

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

const ModalContent = ({ closeModal, meal }: { closeModal: () => void, meal: MealType  }) => {
    const router = useRouter();

    return (
        <div className={styles.container}>

           <h1 className={styles.title}>{`${meal.chef}'s Casserole`}</h1>

           <img src={`./images/${meal.image}.jpg`} className={styles.img}/>

           <div className={styles.second}> 
                <hr/>               
                <div>{`Price: $${meal.price}`}</div>
                <hr/> 
                <div>{meal.description}</div>
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
                    <div>{` Chef name: ${meal.chef} `}</div>
                    <div>Rating: 4.5</div>
                </div>
                <img src={`./images/${meal.chefPicture}.jpg`} className={styles.pfp}/>
            </div>
            
            <div className={styles.order}>
                <Button
                    variant='contained'
                    sx={{
                        fontWeight: 'bold',
                        width: '90%',
                        backgroundColor: '#edead3',
                        color: 'brown',
                        '&:hover': {
                            backgroundColor: 'burlywood'
                        }
                    }}
                    onClick={() => {
                    closeModal()
                    router.push('/order')
                }}>
                    Order
                </Button>
            </div>

        </div>
    )
};

type AuthModalProps = {
    mmodalIsOpen: boolean,
    closeModal: ()=>void,
    meal: MealType
}

export default function LoginModal({ mmodalIsOpen, closeModal, meal } : AuthModalProps) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={mmodalIsOpen}
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
                <Fade in={mmodalIsOpen}>
                    <Box component='div' sx={modalBoxStyles}>
                        <ModalContent closeModal={closeModal} meal={meal} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
