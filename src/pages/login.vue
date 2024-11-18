<template>
    <div>
        <input type="text" v-model="username" placeholder="用户名">
        <input type="password" v-model="password" placeholder="密码">
        <div @click="loginClick" style="width: 100px;height: 100px;color: black;">登录</div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { login } from '@/apis'
const username = ref("");
const password = ref("");
const loginClick = async () => {
    if (!username.value) {
        console.log("请输入用户名");
        return;
    }
    if (!password.value) {
        console.log("请输入密码");
        return;
    }
    const info = await login({
        username: username.value,
        password: password.value,
    });
    console.log("登录返回信息",info);
    if (info.code === 200) {
        // 登录成功
        // 跳转页面
        // 存储token
    }
};
</script>