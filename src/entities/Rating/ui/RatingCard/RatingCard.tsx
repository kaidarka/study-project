import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import {
    FlexGap, FlexJustifyContent, HStack, VStack,
} from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './RatingCard.module.scss';
import { StarRating, stars } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

type RatingCardProps = {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onAccept?: (starsCount: number, feedback?: string) => void;
    onCancel?: () => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className, title, feedbackTitle, hasFeedback, onAccept, onCancel,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState<typeof stars[number]>();
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((starsCount: typeof stars[number]) => {
        setStarsCount(starsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(starsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        onAccept?.(starsCount || 0, feedback);
        setIsModalOpen(false);
    }, [onAccept, starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        onCancel?.();
        setIsModalOpen(false);
        setStarsCount(undefined);
    }, [onCancel]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder="Ваш отзыв" onChange={setFeedback} value={feedback} />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack>
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <VStack max gap={FlexGap.lg}>
                        {modalContent}
                        <HStack max gap={FlexGap.md} justifyContent={FlexJustifyContent.end}>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={cancelHandler}
                            >
                                Закрыть
                            </Button>
                            <Button onClick={acceptHandler}>
                                Отправить
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <VStack max gap={FlexGap.lg}>
                        {modalContent}
                        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={acceptHandler}>
                            Отправить
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
};
