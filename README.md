Webpack DllPlugin demo

本项目分为root module和sub module，sub module存在[root]/src/module-[name]中

其中，root为sub提供common以及DllPlugin
在根目录中执行: npm run vendor 生成 vendor.[xxxx].js 和 vendor-manifest.json 文件

在sub module 目录中执行 npm run start 或者 npm run build 即可运行
