// Returns a stringified version of input,
// behaving in exactly the same way as JSON.stringify()
function stringifier(input) {
    if (typeof input === 'string') {
        return `"${input}"`;
    }
    else if (typeof input === 'number' || input === null) {
        return `${input}`;
    }
    if (typeof input === 'function' || input === undefined) {
        return undefined;
    }
    const nullDataTypes = (value) => {
        if (typeof value === 'function' || value === undefined) {
            return true;
        }
    };
    const ignoreDataTypes = (value) => {
        if (typeof value === 'function' || value === undefined) {
            return true;
        }
    };

    if (Array.isArray(input)) {
        let res = "[";
        for (let i = 0; i < input.length; i++) {
            res += nullDataTypes(input[i]) ? `${stringifier(null)},` : `${stringifier(input[i])},`;
        }
        res = `${res.substring(0, res.length - 1)}]`;
        return res;
    }
    else {
        let res = '{';
        for (let key in input) {
            if (input.hasOwnProperty(key)) {
                res += !(ignoreDataTypes(input[key])) ? `"${key}":${stringifier(input[key])},` : '';
            }
        }
        res = `${res.substring(0, res.length - 1)}}`;
        return res;
    }
}

console.log(stringifier([0, 'This is a string', function () { }, '', null, undefined]));

console.log(stringifier({
    num: 0,
    string: 'This is a string',
    func: function () { },
    emptyString: '',
    null: null,
    undefined: undefined
}))