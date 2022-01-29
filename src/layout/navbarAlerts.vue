<template>
<el-popover
placement="bottom"
:width="200"
trigger="hover"
popper-class="navbar-alerts__popper">
    <template #reference>
        <m-icon
        name="notifications_active"
        :size="20"
        cursor
        class="navbar-alerts__icon"
        :class="props.class" />
    </template>
    <el-scrollbar class="navbar-alerts">
        <navbar-alert
        v-for="(alert, index) in alerts"
        :key="index"
        :value="alert" />
    </el-scrollbar>
</el-popover>
</template>

<script setup lang="ts">
import NavbarAlert from './navbarAlert.vue';
import MIcon from '@/widgets/mIcon.vue';
import MAlert from '@/models/alert';

const props = defineProps({
    class: {
        type: String,
    },
});

const alerts: MAlert[] = reactive([
    {
        type: 'news',
        datetime: '2022-01-01',
        content: 'news',
    },
    {
        type: 'notice',
        datetime: '2022-01-01',
        content: 'notice',
    },
    {
        type: 'news',
        datetime: '2022-01-01',
        content: 'news',
    },
    {
        type: 'news',
        datetime: '2022-01-01',
        content: 'news',
    },
    {
        type: 'news',
        datetime: '2022-01-01',
        content: 'news',
    },
]);
</script>

<style lang="scss">
.navbar-alerts {
    &__popper {
        padding: 0 !important;
    }

    height: 200px;
}
</style>
