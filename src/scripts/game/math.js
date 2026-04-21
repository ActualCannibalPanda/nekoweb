export function deg2rad(degree) {
    return degree * (Math.PI / 180);
}

export function sinFull(x, amp, b, horz, vert) {
    const period = (2 * Math.PI) / b
    return Math.abs(amp) * Math.sin(period * (x - horz)) + vert;
}

export function sin(x, amp, b) {
    return sinFull(x, amp, b, 0, 0);
}