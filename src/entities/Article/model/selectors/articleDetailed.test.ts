import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailedData,
    getArticleDetailedIsLoading,
    getArticleDetailedError,
} from './articleDetailed';

describe('getArticleDetailedData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetailed: { data },
        };
        expect(getArticleDetailedData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state schema', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailedData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailedIsLoading.test', () => {
    test('should return is loading value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailed: { isLoading: true },
        };
        expect(getArticleDetailedIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state schema', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailedData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailedError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailed: { error: 'some error' },
        };
        expect(getArticleDetailedError(state as StateSchema)).toEqual('some error');
    });
    test('should work with empty state schema', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailedData(state as StateSchema)).toEqual(undefined);
    });
});
