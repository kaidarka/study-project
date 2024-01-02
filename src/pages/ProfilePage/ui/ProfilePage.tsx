import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface IProfilePageProps {
    className?: string;
}

export const ProfilePage = (props: IProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames('', {}, [className])}
            >
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
