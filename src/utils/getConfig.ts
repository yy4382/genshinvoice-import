export default function () {
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
        data.push(
            selector
                ? (document.querySelector(selector) as HTMLInputElement).value
                : null
        );
    }
    if (!data[1]) {
        alert("请选择角色，或者等待页面加载完全后再点击按钮");
        throw new Error("not getting data from page");
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
