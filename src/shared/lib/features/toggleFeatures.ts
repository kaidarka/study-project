import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

type ToggleFeaturesOptions<T> = {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
};

export function toggleFeatures<T>(options: ToggleFeaturesOptions<T>): T {
    const { name, off, on } = options;

    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
