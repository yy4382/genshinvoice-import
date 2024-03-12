# Genshinvoice import

[![Build Release](https://github.com/yy4382/genshinvoice-import/actions/workflows/build-release.yaml/badge.svg)](https://github.com/yy4382/genshinvoice-import/actions/workflows/build-release.yaml)

将 <https://v2.genshinvoice.top/> 中的原神语音导入到小说软件中用于听书。目前完成了爱阅记的配置生成复制。

## 使用

1. 安装。在 Greasy Fork 中安装脚本。查看 [原神语音听书导入 - Greasy Fork](https://greasyfork.org/zh-CN/scripts/489531-%E5%8E%9F%E7%A5%9E%E8%AF%AD%E9%9F%B3%E5%90%AC%E4%B9%A6%E5%AF%BC%E5%85%A5)。脚本安装方法自行搜索。关键词：“油猴脚本”、“Tampermonkey” 等。
2. 打开 <https://v2.genshinvoice.top/>，选择好你喜欢的语音和参数。
3. 点击右下角的听书导入按钮，选择复制配置或者一键导入。
4. 如果选择了复制配置，需要这样导入：打开爱阅记，在“设置”-“在线语音库管理”-右上角“菜单”-“JSON 输入”中粘贴刚才复制的内容，点击“导入”即可。

## Known issues

- 对于“按句切分 在按段落切分的基础上再按句子切分文本”选项，即使在网页上选择了关闭，仍然会在配置中打开。
- 对于 iOS 上的 Stay 显示不了按钮。调试了下发现虽然 Stay 在 Console 里打印里已经启动，但是 DOM 上并没有新增元素，怀疑是 Stay 的问题，建议换用 UserScripts。

## 说明

在 Chromium 系浏览器的 Tampermonkey 中经测试正常使用。

在 Safari 或其他 WebKit 系浏览器中，macOS 下 [UserScripts](https://apps.apple.com/cn/app/userscripts/id1463298887) 和 [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171) 都可以正常使用。但是在 iOS 下，都遇到了问题；经过多次重启 Safari 和刷新页面之后，UserScripts 可以正常使用，但 Stay 仍然无法正常使用。

## Credits:

- [fishaudio/Bert-VITS2](https://github.com/fishaudio/Bert-VITS2) 语音合成提供者
- [lisonge/vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) 脚本开发脚手架
- CJ'sPIG 爱阅记语音源规则帮助
