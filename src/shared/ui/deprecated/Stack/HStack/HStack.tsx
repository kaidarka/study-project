import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
/** @deprecated Используйте аналогичный компонент из папки redesigned */
export const HStack = (props: HStackProps) => <Flex {...props} direction="row" />;
