<script setup lang="ts">
import generateRandomString from "../utils/generateRandomString";
import getConfig from "../utils/getConfig";
import copy2Clipboard from "../utils/copy2Clipboard";

function generateIReadConfig() {
    const originConfig = getConfig();
    originConfig.data[0] = "%@";
    const body = JSON.stringify(originConfig);
    const process = `@dyn:\np=def:\"|'|\\n @=>;\ntxt=keyword.jxd_executeRegexRules:p;\nformat('${body}',txt)`;
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
                url: "https://bv2.firefly.matce.cn/run/predict",
                parser: {
                    audioUrl:
                        '@str:"https://bv2.firefly.matce.cn/file={{@json:data[1].name}}"',
                },
                httpConfigs: {
                    useCookies: 1,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    customFormatParams: "params[data]",
                },
                params: {
                    data: process,
                },
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
                    playData: "ResponseData",
                },
                httpConfigs: {
                    useCookies: 1,
                    headers: {},
                },
            },
        ],
        _TTSName: "☁️ - MHY " + originConfig.data[1],
    };
    return iReadTemplate;
}

function copyIRead() {
    const iReadConfig = generateIReadConfig();
    copy2Clipboard(JSON.stringify(iReadConfig));
}
</script>

<template>
    <div>
        <button @click="copyIRead" class="v-button">复制爱阅记配置</button>
    </div>
</template>
