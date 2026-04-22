import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { add, decrement, increment } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };
    const handleAddThree = () => {
        add(3);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={handleIncrement}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-button" onClick={handleDecrement}>
                {t('decrement')}
            </Button>
            <Button data-testid="add-three-button" onClick={handleAddThree}>
                {t('add three')}
            </Button>
        </div>
    );
};
