import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { FlexGap, FlexJustifyContent, HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './RatingCard.module.scss';
import { StarRating } from '@/shared/ui/StarRating';
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
    onCancel?: (starsCount: number) => void;
    rate?: number;
};

export const RatingCard = (props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel, rate } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState<number | undefined>(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (starsCount: number) => {
            setStarsCount(starsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(starsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        onAccept?.(starsCount || 0, feedback);
        setIsModalOpen(false);
    }, [onAccept, starsCount, feedback]);

    const cancelHandler = useCallback(() => {
        onCancel?.(starsCount || 0);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder="Ваш отзыв" onChange={setFeedback} value={feedback} />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack>
                <Text title={starsCount ? 'Спасибо за оценку!' : title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <VStack max gap={FlexGap.lg}>
                        {modalContent}
                        <HStack max gap={FlexGap.md} justifyContent={FlexJustifyContent.end}>
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandler}>
                                Закрыть
                            </Button>
                            <Button onClick={acceptHandler}>Отправить</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
