type TMods = Record<string, boolean | string>;

export function classNames(cls: string, mods: TMods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}
