export default function (text: string) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            alert("已复制到剪贴板");
        })
        .catch((error) => {
            console.error("复制到剪贴板失败", error);
        });
}