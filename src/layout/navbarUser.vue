<template>
<el-dropdown popper-class="navbar-user__popper">
    <m-icon name="face" :size="20" cursor />
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>
                <a :href="$domain" target="_blank">
                    Element Admin
                </a>
            </el-dropdown-item>
            <el-dropdown-item @click="logout">{{ $t('message.navbar.signOut') }}</el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import MIcon from '@/widgets/mIcon.vue';
import store from '@/store';

const $router = useRouter();
const logout = async () => {
    try {
        await store.dispatch('user/logout');
    } catch (error) {

    }
    $router.push({ name: 'login', replace: true, });
    store.commit('route/removeAllRoutes');
};
</script>

<style lang="scss">
.navbar-user {
    &__popper {
        width: 130px;
    }
}
</style>
