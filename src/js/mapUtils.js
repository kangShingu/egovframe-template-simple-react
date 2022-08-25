const fillzero = (n, digits) => {
    let zero = '';
    n = n.toString();
    if (digits > n.length) {
        for (let i = 0; digits - n.length > i; i++) {
            zero += '0';
        }
    }
    return zero + n;
}

export {fillzero}