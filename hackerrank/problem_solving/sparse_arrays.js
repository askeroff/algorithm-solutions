function matchingStrings(strings, queries) {

    let data = {};
    let result = [];

    strings.forEach(string => {
        data[string] = data[string] !== undefined ? data[string] + 1 : 1;
    });
    queries.forEach(string => {
        if (data[string]) {
            result.push(data[string]);
        } else {
            result.push(0);
        }
    });

    return result;
}
