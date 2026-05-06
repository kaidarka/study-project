import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import Cheremsha404Meme from '@/shared/assets/images/cheremsha-404-meme.png';
import { Page } from '@/widgets/Page';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: INotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.content}>
                <img
                    src={Cheremsha404Meme}
                    alt={t('Черемша на странице 404')}
                    className={cls.image}
                />
                <h1 className={cls.title}>404</h1>
                <p className={cls.subtitle}>{t('Страница не найдена')}</p>
                <p className={cls.meme}>{t('Тихо, не спеша, без суеты')}</p>
            </div>
        </Page>
    );
};
