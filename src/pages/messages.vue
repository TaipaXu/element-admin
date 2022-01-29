<template>
<div class="messages-page">
    <!-- Message -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Message</h1>
            </div>
        </template>
        <el-button type="success" @click="messageA">success</el-button>
        <el-button type="info" @click="messageB">info</el-button>
        <el-button type="warning" @click="messageC">warning</el-button>
        <el-button type="danger" @click="messageD">danger</el-button>
    </el-card>

    <!-- Message Box -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Message Box</h1>
            </div>
        </template>
        <el-button @click="alert">Alert</el-button>
        <el-button @click="confirm">Confirm</el-button>
        <el-button @click="prompt">Prompt</el-button>
    </el-card>

    <!-- Notification -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Notification</h1>
            </div>
        </template>
        <el-button type="success" @click="notificationA">success</el-button>
        <el-button type="info" @click="notificationB">info</el-button>
        <el-button type="warning" @click="notificationC">warning</el-button>
        <el-button type="danger" @click="notificationD">danger</el-button>
    </el-card>

    <!-- Confirm -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Popup Confirm</h1>
            </div>
        </template>
        <el-popconfirm :title="i18n.global.t('message.messages.title')">
            <template #reference>
                <el-button>{{ $t('message.messages.popup') }}</el-button>
            </template>
        </el-popconfirm>
    </el-card>

    <!-- Popover -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Popover</h1>
            </div>
        </template>
        <el-popover
        placement="top-start"
        :title="i18n.global.t('message.messages.title')"
        :width="200"
        trigger="hover"
        :content="i18n.global.t('message.messages.content')">
            <template #reference>
                <el-button>{{ $t('message.messages.hover') }}</el-button>
            </template>
        </el-popover>

        <el-popover
        placement="bottom"
        :title="i18n.global.t('message.messages.title')"
        :width="200"
        trigger="click"
        :content="i18n.global.t('message.messages.content')">
            <template #reference>
                <el-button>{{ $t('message.messages.click') }}</el-button>
            </template>
        </el-popover>

        <el-popover
        ref="popover"
        placement="right"
        :title="i18n.global.t('message.messages.title')"
        :width="200"
        trigger="focus"
        :content="i18n.global.t('message.messages.content')">
            <template #reference>
                <el-button>{{ $t('message.messages.focus') }}</el-button>
            </template>
        </el-popover>

        <el-popover
        v-model:visible="visible"
        placement="bottom"
        :title="i18n.global.t('message.messages.title')"
        :width="200"
        trigger="manual"
        :content="i18n.global.t('message.messages.content')">
            <template #reference>
                <el-button @click="visible = !visible">{{ $t('message.messages.manual') }}</el-button>
            </template>
        </el-popover>
    </el-card>

    <!-- Tooltip -->
    <el-card class="messages-card">
        <template #header>
            <div class="messages-card__header">
                <h1>Tooltip</h1>
            </div>
        </template>
        <el-tooltip :content="i18n.global.t('message.messages.content')" placement="top">
            <el-button>{{ $t('message.messages.tooltip') }}</el-button>
        </el-tooltip>
    </el-card>
</div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';

const messageA = () => {
    ElMessage({
        message: i18n.global.t('message.messages.content'),
        type: 'success',
        showClose: true,
    });
};

const messageB = () => {
    ElMessage({
        message: i18n.global.t('message.messages.content'),
        type: 'info',
    });
};

const messageC = () => {
    ElMessage({
        message: i18n.global.t('message.messages.content'),
        type: 'warning',
    });
};

const messageD = () => {
    ElMessage({
        message: i18n.global.t('message.messages.content'),
        type: 'error',
    });
};

const alert = () => {
    ElMessageBox.alert(i18n.global.t('message.messages.content'), i18n.global.t('message.messages.title'), {
        confirmButtonText: i18n.global.t('message.common.confirm'),
        callback: (action: string) => {
            console.log('action', action);
        },
    });
};

const confirm = () => {
    ElMessageBox.confirm(i18n.global.t('message.messages.content'), i18n.global.t('message.messages.title'), {
        confirmButtonText: i18n.global.t('message.common.confirm'),
        cancelButtonText: i18n.global.t('message.common.cancel'),
        type: 'warning',
    })
        .then(() => {})
        .catch(() => {});
};

const prompt = () => {
    ElMessageBox.prompt(i18n.global.t('message.messages.content'), i18n.global.t('message.messages.title'), {
        confirmButtonText: i18n.global.t('message.common.confirm'),
        cancelButtonText: i18n.global.t('message.common.cancel'),
    })
        .then(({ value, }) => {})
        .catch(() => {});
};

const notificationA = () => {
    ElNotification({
        title: i18n.global.t('message.messages.title'),
        message: i18n.global.t('message.messages.content'),
        type: 'success',
        showClose: false,
    });
};

const notificationB = () => {
    ElNotification({
        title: i18n.global.t('message.messages.title'),
        message: i18n.global.t('message.messages.content'),
        type: 'info',
        duration: 0,
    });
};

const notificationC = () => {
    ElNotification({
        title: i18n.global.t('message.messages.title'),
        message: i18n.global.t('message.messages.content'),
        type: 'warning',
    });
};

const notificationD = () => {
    ElNotification({
        title: i18n.global.t('message.messages.title'),
        message: i18n.global.t('message.messages.content'),
        type: 'error',
    });
};

const visible = ref(false);
</script>

<style lang="scss">
.messages {
    &-card {
        & + & {
            margin-top: 10px;
        }

        &__header {
            h1 {
                margin: 0;
            }
        }
    }
}
</style>
