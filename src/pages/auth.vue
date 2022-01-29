<template>
<div class="auth-page">
    <el-radio-group v-model="role">
        <el-radio-button label="admin" @click="setAdmin">{{ $t('message.auth.admin') }}</el-radio-button>
        <el-radio-button label="normal" @click="setNormal">{{ $t('message.auth.normal') }}</el-radio-button>
    </el-radio-group>
    <el-card class="auth-permissions">
        {{ store.getters['user/user'].permissions.join(' ') }}
    </el-card>
</div>
</template>

<script setup lang="ts">
import store from '@/store';

const role = computed(() => {
    const isAdmin = (store.getters['user/user'].permissions as string[]).includes('admin');
    if (isAdmin) {
        return 'admin';
    }
    return 'normal';
});

const setAdmin = () => {
    store.getters['user/user'].permissions = ['admin',];
};

const setNormal = () => {
    store.getters['user/user'].permissions = ['normal',];
};
</script>

<style lang="scss">
.auth {
    &-permissions {
        margin-top: 10px;
    }
}
</style>
