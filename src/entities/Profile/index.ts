export { ProfileCard } from './ui/ProfileCard/ProfileCard';
export {
    getProfileData,
} from './model/selectors/getProfileData/getProfileData';
export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';
export {
    Profile,
    ProfileSchema,
} from './model/types/profile';
export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';
