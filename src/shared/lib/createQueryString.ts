export function createQueryString(
    queryString: string,
    query: {
        name: string;
        value: string;
    }[],
) {
    const params = new URLSearchParams(queryString);
    query.forEach(({ name, value }) => {
        params.set(name, value);
    });

    return params.toString();
}
