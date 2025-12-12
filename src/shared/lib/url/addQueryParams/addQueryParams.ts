export function getQueryParams(params: OptionalRecord<string, string>) {
    // Если хотя бы один параметр undefined, возвращаем пустую строку
    const hasUndefined = Object.values(params).some((value) => value === undefined);
    if (hasUndefined) {
        return '';
    }

    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    const result = searchParams.toString();
    return result ? `?${result}` : '';
}

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
