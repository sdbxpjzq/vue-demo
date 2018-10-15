/**
 * ====================== 工具 ================
 */

/**
 * 设置路由模式
 * @returns {string}
 */
export function routerMode() {
    let modeType = 'history';
    if (process.env.NODE_ENV === 'development') {
        modeType = 'hash';
    }
    return modeType;
}

/**
 * 是否微信环境
 * @returns {boolean}
 */
export function isWeChat() {
    return false;
}

/**
 *
 * 获取cookie
 * @param {String} params
 */
export function getCookie(params) {
    const cookies = document.cookie.split('; '); // 注意这里的格式问题
    const cookieObj = {};

    cookies.forEach((v) => {
        const parts = v.split('=');
        cookieObj[parts[0]] = parts[1];
    });
    console.log(cookieObj);

    return cookieObj[params] ? cookieObj[params] : '';
}

