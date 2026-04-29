import LogoIcon from '@/shared/assets/icons/kaidarka-logo.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';

type AppLogoProps = {
    className?: string;
    size?: number;
};

export const AppLogo = (props: AppLogoProps) => {
    const { className, size = 100 } = props;
    return <LogoIcon className={classNames('', {}, [className])} width={size * 2} height={size} />;
};
