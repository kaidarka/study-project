import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface ILoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
    const { isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
