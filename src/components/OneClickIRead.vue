<script setup lang="ts">
import getConfig from "../utils/getConfig";
import copy2Clipboard from "../utils/copy2Clipboard";
import { BACKEND_URL } from "../main";
function getUrl() {
    const { data } = getConfig();
    if (!data) throw new Error("No data in config");
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
</script>
<template>
    <div>
        <button @click="copyUrl">复制爱阅记一键导入URL</button>
    </div>
</template>
