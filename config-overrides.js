// config-overrides.js
/*const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(   // 再默认基础上注入
        // 插件名， 插件配置
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
        config
    );

    // config = injectBabelPlugin(
    //     ['@babel/plugin-proposal-decorators', { "legacy": true }],
    //     config,
    // );

    return config;
};*/


// react-app-rewired 2.0以后不能使用 injectBabelPlugin 方法，改成以下方式
const {
    override,
    fixBabelImports,
    addDecoratorsLegacy,
} = require("customize-cra");


module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
    }),
    addDecoratorsLegacy(),  // 添加装饰器
);


// 以下为 customize-cra 官方给的一个例子
/*const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
    fixBabelImports
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),

    // disable eslint in webpack
    disableEsLint(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
        ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    }),

    // adjust the underlying workbox
    adjustWorkbox(wb =>
        Object.assign(wb, {
            skipWaiting: true,
            exclude: (wb.exclude || []).concat("index.html")
        })
    ),
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
    })
);*/
