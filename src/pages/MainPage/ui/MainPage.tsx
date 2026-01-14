import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Page } from 'widgets/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState<string | undefined>(undefined);

    return (
        <Page>
            {t('Главная')}
            <HStack>
                <div>1</div>
                <ListBox
                    items={[
                        { content: '1 asdasdadad', value: '1' },
                        { content: '2qweqweqwee', value: '2', disabled: true },
                    ]}
                    value={value}
                    onChange={(newValue) => { setValue(newValue); }}
                    placeholder="Выберите значение"
                />
            </HStack>
            <BugButton />
        </Page>
    );
};
export default MainPage;
