import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

type Selector<T> = (state: StateSchema) => T;
type BuildSelectorResult<T> = [() => T, Selector<T>];

export function buildSelector<T>(selector: Selector<T>): BuildSelectorResult<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}
