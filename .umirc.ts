import {IConfig} from 'umi-types';

import routes from './config/router.config';
import plugins from './config/plugins.config';
import theme from './config/theme.config';

let constant = require('./src/constants/globalConstant');

/**
 * 部署相关参数可以参看：https://umijs.org/zh/guide/deploy.htm
 */
const config: IConfig = {
    treeShaking: true,
    targets: {
        ie: 11,
    },
    disableCSSModules: true,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    plugins,
    routes,
    theme,
    define: constant.constant.devConstant,
    proxy: {
        [constant.constant.devConstant['process.env.API_SERVER']]: {
            target: 'http://management.cdk8s.com:90951a',
            pathRewrite: {[`^/${constant.constant.devConstant['process.env.API_SERVER']}`]: ''},
            changeOrigin: true,
        },
    },
};

export default config;