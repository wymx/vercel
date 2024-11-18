<template>
    <div style="">
        
        <div @click="shortQR" style="width: 100px;height: 100px;color: black;">点击</div>
        <input type="file" id="choseFile">
        <div @click="upFileClick" style="width: 100px;height: 100px;color: black;">上传文件</div>
    </div>
</template>
<script setup>
import  { requestIndex,getOpenId,upFile }  from '@/apis';
const shortQR = async () => {
    const info = await requestIndex();
    console.log("aaaaaaaaa",info);

};
const upFileClick = async () => {
    const file = document.getElementById("choseFile");
    if (!file.files[0]) {
        console.log("请选择文件");
        return;
    }
    const info = await upFile({
        file: file.files[0],
        type: "image",
        fileName: file.files[0].name,
    });
    console.log("上传返回信息",info);

};
</script>
