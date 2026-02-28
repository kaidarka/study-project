import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import {
    EditableProfileCard,
} from 'features/Profile/editableProfileCard';

export const ProfilePage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>

    );
};

export default ProfilePage;
