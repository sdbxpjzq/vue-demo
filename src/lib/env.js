/* eslint-disable no-underscore-dangle,prefer-const,no-undef */
let MAIN_HOST = 'mafengwo.cn';
if (process.env.NODE_ENV === 'development') {
    const ARGV = JSON.parse(_ARGV_);
    MAIN_HOST = ARGV.remain[0] ? ARGV.remain[0] : MAIN_HOST;
}
const AJAX_HOST = `m.${MAIN_HOST}`;
const PROTOCOL = window.location.protocol;
const UTIL = {
    MAIN_HOST,
    AJAX_BASEURL: `${PROTOCOL}//${AJAX_HOST}`,
    DEFAULT_IMG: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWBAMAAAAF9IgvAAAAElBMVEX88tz8+uz89uz8/vz88uT8+vT1Qw6wAAABIElEQVR4nO3YQQqCQBiGYePPfdAFgi4g/LgPukDQ/e9S1jhOzhgtmk+i99lIM4t3RtTQpgEAAAAAAAAAAD/A3Lts0N1V8Tw/jCnyrRdKVhqsIYReN++quhdKYUWFy+HL7BGelR4/TbD55wU/lA5x7Pjs7iX14ZCe+204EyarW3Lux5Xo6snm40KE9WnzcR3C+nipJctQ1ttQvR/62ZSgHu7v5C6X1uNTr8unBPXx+VqYEtSb2cNdXLfXvxtxffbHoq5/PEWdOnXq1KlTp76cWH5JF3w+uC5P2aV6Hf/p/OaaP9WOp59M8hlFvdQ/Sz4Xji+u7rs4toljtevxrb2k+rfK+8NuzXiztP1e0h5Y1tbse7LGrgEAAAAAAAAAAH7XDd8YWSJ14/N+AAAAAElFTkSuQmCC',
};
export default UTIL;
