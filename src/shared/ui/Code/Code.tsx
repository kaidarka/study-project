import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../ui/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy.svg?react';
import { Icon } from '../../ui/Icon/Icon';
import cls from './Code.module.scss';

interface ICodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: ICodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
