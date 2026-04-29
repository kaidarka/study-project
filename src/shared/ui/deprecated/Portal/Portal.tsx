import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/** @deprecated Используйте аналогичный компонент из папки redesigned */
export const Portal = (props: IPortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
