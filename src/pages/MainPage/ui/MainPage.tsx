import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная')}
            <HStack>
                <div>1</div>
                <ListBox />
            </HStack>
            <BugButton />
        </Page>
    );
};
export default MainPage;
