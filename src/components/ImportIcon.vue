<script setup lang="ts">
function generateRandomString() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < 32; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    return randomString;
}

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
        "#range_id_4",
    ];
    let data = [];
    for (const selector of selectors) {
        if (selector) {
            const value = (document.querySelector(selector) as HTMLInputElement)
                .value;
            data.push(value);
        } else {
            data.push(null);
        }
    }
    for (let i of [2, 3, 4, 5, 8, 9, 13]) {
        data[i] = parseFloat(data[i] as string);
    }
    data[7] = true;

    return {
        data: data,
        event_data: null,
        fn_index: 0,
        session_hash: null,
    };
}
function generateIReadConfig() {
    const originConfig = getConfig();
    originConfig.data[0] = "%@";
    const body = JSON.stringify(originConfig);
    const iReadTemplate = {
        _ClassName: "JxdAdvCustomTTS",
        _TTSConfigID: generateRandomString(),
        ttsHandles: [
            {
                processType: 1,
                maxPageCount: 1,
                maxWordCount: "200",
                nextPageForGetMedthod: 1,
                forGetMethod: 0,
                requestByWebView: 0,
                nextPageParams: {},
                paramsEx: "@json:data",
                url: "https://v2.genshinvoice.top/run/predict",
                parser: {
                    audioUrl:
                        '@str:"https://v2.genshinvoice.top/file={{@json:data[1].name}}"',
                },
                httpConfigs: {
                    useCookies: 1,
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
                params: {
                    data: body,
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
        _TTSName: originConfig.data[1],
    };
    return iReadTemplate;
}
function copy2Clipboard(text: string) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            alert("已复制到剪贴板");
        })
        .catch((error) => {
            console.error("复制到剪贴板失败", error);
        });
}
function copyIRead() {
    const iReadConfig = generateIReadConfig();
    copy2Clipboard(JSON.stringify(iReadConfig));
}
</script>

<template>
    <div>
        <button @click="copyIRead">复制爱阅记配置</button>
    </div>
</template>