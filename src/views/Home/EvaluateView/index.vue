<template>
    <div class="EvaluateView-container">
        <div class="main-page-title">训练</div>
        <a-form
            :model="formState"
            ref="formRef"
            layout="inline"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
            <div class="form-header">
                <a-form-item
                    label="模型名称"
                    :label-col="{ span: 8 }"
                    :wrapper-col="{ span: 16 }"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-divider type="vertical" style="height: 100%; background-color: #d8d8d8" />
                <div class="form-header-spe">
                    <a-form-item
                        label="模型断点"
                        name="username"
                        :rules="[{ required: true, message: 'Please input your username!' }]"
                    >
                        <a-input v-model:value="formState.username" />
                    </a-form-item>
                    <a-form-item
                        label="训练方式"
                        name="username"
                        :rules="[{ required: true, message: 'Please input your username!' }]"
                    >
                        <a-input v-model:value="formState.username" />
                    </a-form-item>

                    <a-form-item
                        label="微调方法"
                        name="username"
                        :rules="[{ required: true, message: 'Please input your username!' }]"
                    >
                        <a-input v-model:value="formState.username" />
                    </a-form-item>
                </div>
                <a-divider type="vertical" style="height: 100%; background-color: #d8d8d8" />
                <a-form-item
                    label="训练框架"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-divider type="vertical" style="height: 100%; background-color: #d8d8d8" />
                <a-form-item
                    label="数据集"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
            </div>
            <div class="form-base">
                <a-form-item
                    class="form-base-item"
                    label="截断长度"
                    help="输入序列分词后的最大长度"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="学习率"
                    help="AdamW 优化器的初始学习率"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item
                    class="form-base-item"
                    label="训练轮数"
                    help="需要执行的训练总轮数"
                    name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]"
                >
                    <a-input v-model:value="formState.username" />
                </a-form-item>
            </div>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" @click="resetForm">Reset</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'

interface FormState {
    username: string
    password: string
    remember: boolean
}

const formRef = ref<FormInstance>()

const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
})
const onFinish = (values: any) => {
    console.log('Success:', values)
}
const resetForm = () => {
    formRef.value && formRef.value.resetFields()
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
}
</script>
<style lang="scss" scoped>
.EvaluateView-container {
    .form-header {
        width: 100%;
        display: flex;
        background-color: #d8d8d8;
        align-items: center;
        justify-content: space-around;
        border-radius: 5px;
        margin-bottom: 5px;
        &-spe {
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
    .form-base {
        width: 100%;
        display: flex;
        background-color: #d8d8d8;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        border-radius: 5px;
        &-item {
            margin: 10px 0;
            border: 1px solid #fff;
            padding: 10px 20px;
            border-radius: 5px;
        }
    }
}
</style>
