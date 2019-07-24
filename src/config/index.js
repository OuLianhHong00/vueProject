const localBaseUrl = 'http://localhost:8080/'


export default {
    /**
     * @description token在Cookie中存储的时间，默认2小时 即1/12天
     */
    cookieExpires: 1 / 12,
    /**
     *@description api请求基础路径
     */
    baseUrl: localBaseUrl,
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home',
    /**
     * @description 统一的页面title
     */
    windowTitle: 'Vue后台管理系统',

}
