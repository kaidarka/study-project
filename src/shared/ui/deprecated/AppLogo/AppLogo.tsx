import LogoIcon from '@/shared/assets/icons/kaidarka-logo.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';

interface IAppLogoProps {
    className?: string;
}

/** @deprecated Используйте аналогичный компонент из папки redesigned */
export const AppLogo = (props: IAppLogoProps) => {
    const { className } = props;
    return (
        <LogoIcon
            className={classNames(cls.AppLogo, {}, [className])}
            color="currentColor"
            width={200}
            height={100}
        />
    );
};
