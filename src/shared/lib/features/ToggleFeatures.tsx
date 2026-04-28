import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';
import { ReactNode } from 'react';

type ToggleFeaturesProps = {
    name: keyof FeatureFlags;
    on: ReactNode;
    off: ReactNode;
};

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { name, off, on } = props;

    if (getFeatureFlag(name)) {
        return on;
    }

    return off;
};
