<template>
<div class="icons-page">
    <el-tabs type="border-card">
        <el-tab-pane :label="$t('message.icons.elementIcons')">
            <related-link
            name="Element icons"
            link="https://element-plus.gitee.io/zh-CN/component/icon.html" />
            <div>
                <e-icon
                v-for="(icon, index) in EIcons"
                :key="index"
                :name="icon"
                :size="80" cursor />
            </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('message.icons.materialIcons')">
            <related-link
            name="Material icons"
            link="https://marella.me/material-icons/demo/" />
            <div>
                <m-icon
                v-for="(icon, index) in mIcons"
                :key="index"
                :name="icon"
                :size="80" cursor />
            </div>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script setup lang="ts">
import MIcon from '@/widgets/mIcon.vue';
import EIcon from '@/widgets/eIcon.vue';
import { ElIconModules, changeIconName } from '@/utils/elIcon';

const EIcons: string[] = [];

for (const iconName in ElIconModules) {
    EIcons.push(changeIconName(iconName));
}

const mIcons: string[] = [
    '123',
    '360',
    '10k',
    '10mp',
    '11mp',
    '12mp',
    '13mp',
    '14mp',
    '15mp',
    '16mp',
    '17mp',
    '18mp',
    '19mp',
    '1k',
    'add_alert',
];
</script>

<style lang="scss"></style>
