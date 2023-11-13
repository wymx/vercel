<template>
    <div style="">
        home页面
        <div @click="shortQR" style="width: 100px;height: 100px;color: black;">点击</div>
    </div>
</template>
<script setup>
import  { getOpenId }  from '@/apis';
// import request from '../../../utils/request/index';

const shortQR = async () => {
    const info = await getOpenId('/getOpenId');
    console.log("aaaaaaaaa",info);
};
</script>