<template>
<nav class="navbar">
    <m-icon name="menu" :size="28" cursor @click="emits('menu')" />
    <breadcrumb class="navbar__breadcrumb" />
    <div style="flex: 1"></div>
    <div class="navbar__menus">
        <navbar-alerts class="navbar__menu" />

        <navbar-fullscreen class="navbar__menu" />

        <navbar-languages class="navbar__menu" />

        <navbar-user class="navbar__menu" />
    </div>
</nav>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb.vue';
import NavbarAlerts from './navbarAlerts.vue';
import NavbarFullscreen from './navbarFullscreen.vue';
import NavbarLanguages from './navbarLanguages.vue';
import NavbarUser from './navbarUser.vue';
import MIcon from '@/widgets/mIcon.vue';

const emits = defineEmits(['menu',]);
</script>

<style lang="scss">
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #eee;

    &__breadcrumb {
        margin-left: 20px;
    }

    &__menu {
        & + & {
            margin-left: 15px;
        }
    }
}
</style>
