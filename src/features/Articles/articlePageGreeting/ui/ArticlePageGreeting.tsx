import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const { isArticlePageOpened } = useJsonSettings();

    const onCloseModal = () => setIsOpen(false);

    useEffect(() => {
        if (!isArticlePageOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageOpened: true }));
        }
    }, [dispatch, isArticlePageOpened]);

    return (
        <Modal isOpen={isOpen} onClose={onCloseModal}>
            <Text
                title={t('Добро пожаловать на страницу статей')}
                text={t('Здесь вы можете найти статьи на разные темы')}
            />
        </Modal>
    );
});
