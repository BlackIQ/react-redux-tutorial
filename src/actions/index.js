export const inc = (n) => {
    return {
        type: "INC",
        payload: n,
    };
}

export const dec = (n) => {
    return {
        type: "DEC",
        payload: n,
    };
}