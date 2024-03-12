<script setup lang="ts">
import getConfig from "../utils/getConfig";
import copy2Clipboard from "../utils/copy2Clipboard";
import MingcuteCloseLine from "./Icons/MingcuteCloseLine.vue";
import { BACKEND_URL } from "../main";
import { ref } from "vue";
const ocURL = ref("");
function closeModal() {
    const modal = document.getElementById(
        "iread-oc-modal"
    ) as HTMLDialogElement;
    if (modal) modal.close();
}
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
function openModal() {
    const modal = document.getElementById(
        "iread-oc-modal"
    ) as HTMLDialogElement;
    if (modal) modal.showModal();
    ocURL.value = getUrl();
}
</script>
<template>
    <dialog id="iread-oc-modal">
        <MingcuteCloseLine @click="closeModal" class="close-dialog" />
        <div class="inner-modal">
            <h5 style="font-size: large; margin: 0.5rem auto">
                爱阅记一键导入
            </h5>
            <a :href="ocURL" class="v-button btn-a" target="_blank">直接导入</a>
            <button @click="copy2Clipboard(ocURL)" class="v-button">
                复制链接
            </button>
        </div>
    </dialog>
    <div>
        <button @click="openModal" class="v-button">爱阅记一键导入</button>
    </div>
</template>

<style scoped>
#iread-oc-modal {
    position: fixed;
    margin: auto;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 3rem;
}
.close-dialog {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}
.inner-modal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
}
.btn-a {
    text-decoration: none;
    color: inherit;
    text-align: center;
}
</style>
