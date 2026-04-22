import { memo } from 'react';
import cls from './Overlay.module.scss';

type OverlayProps = {
    onClick?: () => void;
};

export const Overlay = memo((props: OverlayProps) => {
    const { onClick } = props;
    return <div className={cls.Overlay} onClick={onClick} />;
});
