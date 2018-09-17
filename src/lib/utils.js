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
