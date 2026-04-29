import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(featureFlag: keyof FeatureFlags) {
    console.log('featureFlags', featureFlags);
    return featureFlags?.[featureFlag] ?? false;
}
