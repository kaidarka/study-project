import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { JsonSettings } from '../model/types/jsonSettings';

type SaveJsonSettingsArg = {
    userId: string;
    jsonSettings: JsonSettings;
};

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        saveJsonSettings: build.mutation<User, SaveJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                method: 'PATCH',
                url: `/users/${userId}`,
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.query<User, string>({
            query: (userId) => ({
                method: 'GET',
                url: `/users/${userId}`,
            }),
        }),
    }),
});

export const setJsonSettingsMutation = userApi.endpoints.saveJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
