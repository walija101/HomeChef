import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from '@/styles/LoadingModal.module.scss'
import LottieComponent from './LottieComponent';

export default function LoadingModal({ isOpen }: { isOpen: boolean }) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
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
                <Fade in={isOpen}>
                    <div className={styles.loaderWrapper}>
                        <LottieComponent animationName={"loading"} givenWidth={"100%"} givenHeight={"100%"} shouldLoop={true} onComplete={() => {}} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}