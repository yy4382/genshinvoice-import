# Genshinvoice import

将 <https://v2.genshinvoice.top/> 中的原神语音导入到小说软件中用于听书。目前完成了爱阅记的配置生成复制。

## 使用

1. 安装。在 Greasy Fork 中安装脚本。查看 [原神语音听书导入 - Greasy Fork](https://greasyfork.org/zh-CN/scripts/489531-%E5%8E%9F%E7%A5%9E%E8%AF%AD%E9%9F%B3%E5%90%AC%E4%B9%A6%E5%AF%BC%E5%85%A5)
2. 打开 <https://v2.genshinvoice.top/>，选择好你喜欢的语音和参数。
3. 点击页面底部的“复制爱阅记配置”按钮，你在网页上所选的选项会以爱阅记听书配置的形式复制到剪贴板。
4. 打开爱阅记，在“设置”-“在线语音库管理”-右上角“菜单”-“JSON输入”中粘贴刚才复制的内容，点击“导入”即可。

## 说明

在 Chromium 系浏览器的 Tampermonkey 中经测试正常使用。

在 Safari 或其他 WebKit 系浏览器中，macOS 下 [UserScripts](https://apps.apple.com/cn/app/userscripts/id1463298887) 和 [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171) 都可以正常使用。但是在 iOS 下，都遇到了问题；经过多次重启 Safari 和刷新页面之后，UserScripts 可以正常使用，但 Stay 仍然无法正常使用。