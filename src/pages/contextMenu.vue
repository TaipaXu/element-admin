<template>
<div class="context-menu-page">
    <div v-contextmenu:tagcontextmenu class="context-menu-target">

    </div>

    <v-contextmenu ref="tagcontextmenu">
        <v-contextmenu-item>
            {{ $t('message.contextMenu.menuA') }}
        </v-contextmenu-item>
        <v-contextmenu-item>
            {{ $t('message.contextMenu.menuB') }}
        </v-contextmenu-item>
        <v-contextmenu-item>
            {{ $t('message.contextMenu.menuC') }}
        </v-contextmenu-item>
        <v-contextmenu-item>
            {{ $t('message.contextMenu.menuD') }}
        </v-contextmenu-item>
    </v-contextmenu>
</div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.context-menu {
    &-target {
        width: 100px;
        height: 100px;
        background-color: beige;
        cursor: pointer;
    }
}
</style>
