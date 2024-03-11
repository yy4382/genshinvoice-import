// ==UserScript==
// @name         原神语音听书导入
// @namespace    https://yfi.moe
// @version      0.1.0
// @author       Yunfi <i@yfi.moe>
// @description  从 https://v2.genshinvoice.top 导入原神语音用于听书
// @license      MIT
// @icon         https://v2.genshinvoice.top/favicon.ico
// @match        https://v2.genshinvoice.top/*
// @require      https://cdn.staticfile.org/vue/3.4.21/vue.global.prod.min.js
// @grant        GM_addStyle
// ==/UserScript==

(o=>{if(typeof GM_addStyle=="function"){GM_addStyle(o);return}const t=document.createElement("style");t.textContent=o,document.head.append(t)})(" :root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:#202020de;background-color:#fff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#f9f9f9;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.card{padding:2em}#vue-app{max-width:1280px;margin:auto 14.5px;padding:16px;text-align:center}@media (prefers-color-scheme: dark){:root{color:#ffffffde;background-color:#0b0f19}a:hover{color:#747bff}button{background-color:#343434}}.btn-h[data-v-7b9f2bca]{display:flex;justify-content:center;gap:16px} ");

(function (vue) {
  'use strict';

  function getConfig() {
    const selectors = [
      null,
      "#component-5 > label > div > div.wrap-inner > div > input",
      "#range_id_0",
      "#range_id_1",
      "#range_id_2",
      "#range_id_3",
      "#component-14 > label > div > div.wrap-inner > div > input",
      "#component-29 > label > input",
      "#range_id_6",
      "#range_id_5",
      null,
      "#component-8 > label > textarea",
      "#component-22 > label > textarea",
      "#range_id_4"
    ];
    let data = [];
    for (const selector of selectors) {
      data.push(
        selector ? document.querySelector(selector).value : null
      );
    }
    for (let i of [2, 3, 4, 5, 8, 9, 13]) {
      data[i] = parseFloat(data[i]);
    }
    data[7] = true;
    return {
      data,
      event_data: null,
      fn_index: 0,
      session_hash: null
    };
  }
  function copy2Clipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("已复制到剪贴板");
    }).catch((error) => {
      console.error("复制到剪贴板失败", error);
    });
  }
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "OneClickIRead",
    setup(__props) {
      function getUrl() {
        const { data } = getConfig();
        if (!data)
          throw new Error("No data in config");
        data[0] = "%@";
        const dataUrl = `${BACKEND_URL}/api/gvits/ireadnote?data=${encodeURIComponent(
        JSON.stringify(data)
      )}`;
        const importUrl = `iReadNote://import/itts=${dataUrl}`;
        return importUrl;
      }
      function copyUrl() {
        const url = getUrl();
        copy2Clipboard(url);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("button", { onClick: copyUrl }, "复制爱阅记一键导入URL")
        ]);
      };
    }
  });
  function generateRandomString(digits = 32) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < digits; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    return randomString;
  }
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "CopyIRead",
    setup(__props) {
      function generateIReadConfig() {
        const originConfig = getConfig();
        originConfig.data[0] = "%@";
        const body = JSON.stringify(originConfig);
        const process = `@dyn:
p=def:"|'|\\n @=>;
txt=keyword.jxd_executeRegexRules:p;
format('${body}',txt)`;
        const iReadTemplate = {
          _ClassName: "JxdAdvCustomTTS",
          _TTSConfigID: generateRandomString(),
          maxWordCount: "200",
          ttsConfigGroup: "☁️",
          ttsHandles: [
            {
              processType: 1,
              maxPageCount: 1,
              nextPageForGetMedthod: 1,
              forGetMethod: 0,
              requestByWebView: 0,
              nextPageParams: {},
              url: "https://v2.genshinvoice.top/run/predict",
              parser: {
                audioUrl: '@str:"https://v2.genshinvoice.top/file={{@json:data[1].name}}"'
              },
              httpConfigs: {
                useCookies: 1,
                headers: {
                  "Content-Type": "application/json"
                },
                customFormatParams: "params[data]"
              },
              params: {
                data: process
              }
            },
            {
              maxPageCount: 1,
              nextPageForGetMedthod: 1,
              requestByWebView: 0,
              forGetMethod: 1,
              processType: 1,
              params: {},
              nextPageParams: {},
              url: "@json:audioUrl",
              parser: {
                playData: "ResponseData"
              },
              httpConfigs: {
                useCookies: 1,
                headers: {}
              }
            }
          ],
          _TTSName: "☁️ - MHY " + originConfig.data[1]
        };
        return iReadTemplate;
      }
      function copyIRead() {
        const iReadConfig = generateIReadConfig();
        copy2Clipboard(JSON.stringify(iReadConfig));
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("button", { onClick: copyIRead }, "复制爱阅记配置")
        ]);
      };
    }
  });
  const _hoisted_1 = { id: "vue-app" };
  const _hoisted_2 = { class: "btn-h" };
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createVNode(_sfc_main$2),
            vue.createVNode(_sfc_main$1)
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b9f2bca"]]);
  vue.createApp(App).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );
  const BACKEND_URL = "https://tts.api.yfi.moe";

})(Vue);