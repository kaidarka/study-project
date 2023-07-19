import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = (props: INavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((state) => !state);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo illo magni nam nesciunt
                nihil?
                Alias consequatur debitis, dolore ducimus ea eius
                eligendi facere ipsa ipsam nesciunt quidem
                quos
                rerum sapiente temporibus vel. A ad adipisci amet at aut
                commodi consequuntur deserunt ducimus eaque
                eligendi enim, hic iusto labore nam nemo, numquam provident
                quaerat quia quisquam sed sint sunt
                suscipit
                tenetur ullam unde voluptas voluptatum! Accusamus architecto
                consequatur deleniti dolores, doloribus
                eius esse, facilis minus pariatur quia quibusdam quis quos totam!
                Corporis culpa delectus
                dignissimos doloribus earum, est facilis iusto, natus nisi
                possimus quo repellat, soluta tempore.
                Corporis dicta eos quibusdam.
            </Modal>
        </div>
    );
};
