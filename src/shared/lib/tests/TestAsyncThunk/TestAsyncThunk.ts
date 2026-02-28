import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';
import MockedFunctionDeep = jest.MockedFunctionDeep;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    private readonly __types?: { returned?: Return; rejected?: RejectedValue };

    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: any;

    api: MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: any,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg?: Arg) {
        const action = this.actionCreator(arg as Arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
