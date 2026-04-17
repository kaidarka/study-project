import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg?react';

export const stars = [1, 2, 3, 4, 5] as const;

type StarRatingProps = {
    className?: string;
    onSelect?: (starsCount: typeof stars[number]) => void;
    size?: number;
    selectedStars?: typeof stars[number];
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, onSelect, size = 30, selectedStars = 0,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState<typeof stars[number] | 0>(0);
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = (starsCount: typeof stars[number]) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: typeof stars[number]) => () => {
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
                    className={
                        classNames(
                            cls.starIcon,
                            {
                                [cls.selected]: selectedStars >= item,
                                [cls.hovered]: currentStarsCount >= item,
                            },
                        )
                    }
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
