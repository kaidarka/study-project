import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/** @deprecated Используйте аналогичный компонент из папки redesigned */
export const VStack = (props: VStackProps) => <Flex {...props} direction="column" />;
