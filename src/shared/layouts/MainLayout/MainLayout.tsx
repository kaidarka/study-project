import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

type MainLayoutProps = {
    className?: string;
    header: React.ReactNode;
    content: React.ReactNode;
    sidebar: React.ReactNode;
    toolbar?: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { className, content, header, sidebar, toolbar } = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
