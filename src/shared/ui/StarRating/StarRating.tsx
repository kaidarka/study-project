import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../../ui/Icon';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg?react';

export const stars = [1, 2, 3, 4, 5];

type StarRatingProps = {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
};

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setIsSelected(true);
        }
    };

    useEffect(() => {
        setCurrentStarsCount(selectedStars);
    }, [selectedStars]);

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((item) => (
                <Icon
                    className={classNames(cls.starIcon, {
                        [cls.selected]: selectedStars >= item,
                        [cls.hovered]: currentStarsCount >= item,
                    })}
                    Svg={StarIcon}
                    key={item}
                    width={size}
                    height={size}
                    onClick={onClick(item)}
                    onMouseEnter={onHover(item)}
                    onMouseLeave={onLeave}
                />
            ))}
        </div>
    );
});
