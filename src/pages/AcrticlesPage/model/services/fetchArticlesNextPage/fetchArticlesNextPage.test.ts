/**
 * @jest-environment jsdom
 */
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesNextPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchArticleList not called with is loading', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch)
            .toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalledWith({ page: 3 });
    });
});
