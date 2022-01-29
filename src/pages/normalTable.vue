<template>
<div>
    <el-table :data="items" border stripe>
        <el-table-column
        fixed
        prop="id"
        :label="$t('message.table.id')"
        align="center" />
        <el-table-column
        prop="name"
        :label="$t('message.table.name')"
        align="center" />
        <el-table-column
        prop="gender"
        :label="$t('message.table.gender')"
        align="center">
            <template #default="scope">
                {{ scope.row.gender === MGender.Male ? $t('message.common.male') : $t('message.common.female') }}
            </template>
        </el-table-column>
        <el-table-column
        prop="birthday"
        :label="$t('message.table.birthday')"
        align="center" />
        <el-table-column
        prop="vip"
        :label="$t('message.table.vip')"
        align="center">
            <template #default="scope">
                {{ scope.row.vip ? $t('message.common.yes') : $t('message.common.no') }}
            </template>
        </el-table-column>
        <el-table-column
        prop="hobbies"
        :label="$t('message.table.hobbies')"
        align="center" />
        <el-table-column
        prop="remarks"
        :label="$t('message.table.remarks')"
        align="center" />
    </el-table>
</div>
</template>

<script setup lang="ts">
import MCustom, { Gender as MGender } from '@/models/custom';

const items: MCustom[] = [];
for (let index = 0; index < 50; index++) {
    items.push(new MCustom({
        id: 'C001',
        name: 'Virgil Wolfe',
        gender: MGender.Male,
        birthday: '1980-01-02',
        vip: true,
        hobbies: ['football', 'basketball',],
        remarks: 'A good man',
    }));
}
</script>

<style lang="scss"></style>
