export const breakpoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
};

export function currentBreakpoint(width?: number) {
    if (!width) {
        width = window.innerWidth;
    }
    const breakpointsArray = Object.entries(breakpoints).sort(
        (a, b) => a[1] - b[1]
    );
    const breakpoint = breakpointsArray.find(
        (breakpoint) => breakpoint[1] > width!!
    );
    return breakpoint
        ? breakpoint[0]
        : breakpointsArray[breakpointsArray.length - 1][0];
}
