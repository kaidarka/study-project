import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface IProfilePageProps {
    className?: string;
}

export const ProfilePage = (props: IProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames('', {}, [className])}
            >
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
