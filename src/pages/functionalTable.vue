<template>
<div>
    <div class="queries">
        <el-input
        v-model="keywords"
        :placeholder="$t('message.common.keywords')"
        :maxlength="100"
        clearable
        style="width: 180px"
        @change="search" />
        <el-select
        v-model="select"
        :placeholder="$t('message.common.select')"
        clearable
        @change="search">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-button type="primary" @click="search">{{ $t('message.common.search') }}</el-button>
        <el-button type="primary" @click="add">{{ $t('message.common.add') }}</el-button>
        <el-button
        type="danger"
        :disabled="multipleSelection.length === 0"
        @click="deleteItems(multipleSelection)">{{ $t('message.common.delete') }}</el-button>
    </div>
    <el-table
    v-loading="tableLoading"
    :data="customs"
    border
    stripe
    @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="40"
        align="center" />
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
        align="center"
        width="400px" />
        <el-table-column
        prop="score"
        :label="$t('message.table.score')"
        width="100"
        align="center">
            <template #default="scope">
                <m-icon
                v-for="(icon, index) in scope.row.score"
                :key="index"
                name="star"
                :size="14" />
            </template>
        </el-table-column>
        <el-table-column
        :label="$t('message.table.operations')"
        fixed="right"
        width="220"
        align="center">
            <template #default="scope">
                <el-button
                size="small"
                @click="detail(scope.row)">{{ $t('message.common.detail') }}</el-button>
                <el-button
                size="small">{{ $t('message.common.edit') }}</el-button>
                <el-button
                type="danger"
                size="small"
                @click="deleteItems([scope.row])">{{ $t('message.common.delete') }}</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div style="height: 40px"></div>
    <el-pagination
    v-model:current-page="currnetPage"
    background
    :small="store.getters['app/size'] < MSize.Sm"
    layout="prev, pager, next"
    :total="totalPage"
    @current-change="pageChange"></el-pagination>
</div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { useRouter } from "vue-router";
import MIcon from '@/widgets/mIcon.vue';
import store from '@/store';
import { Size as MSize } from '@/models/app';
import MCustom, { Gender as MGender } from '@/models/custom';
import i18n from '@/i18n';

const keywords = ref('');
const currnetPage = ref(1);
const totalPage: number = 100;

const options = ref([
    {
        value: 'Option1',
        label: i18n.global.t('message.functionalTable.option'),
    },
    {
        value: 'Option2',
        label: i18n.global.t('message.functionalTable.option'),
    },
    {
        value: 'Option3',
        label: i18n.global.t('message.functionalTable.option'),
    },
    {
        value: 'Option4',
        label: i18n.global.t('message.functionalTable.option'),
    },
    {
        value: 'Option5',
        label: i18n.global.t('message.functionalTable.option'),
    },
]);
const select = ref('');

const tableLoading = ref(false);
const startTableLoading = () => tableLoading.value = true;
const stopTableLoading = () => tableLoading.value = false;

const customs: Ref<MCustom[]> = ref([]);

const getItems = async () => {
    const items: MCustom[] = [];

    if (tableLoading.value) {
        return;
    }

    startTableLoading();

    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    for (let index = 0; index < 50; index++) {
        items.push(new MCustom({
            id: 'C001',
            name: 'Virgil Wolfe',
            gender: MGender.Male,
            birthday: '1980-01-02',
            vip: true,
            hobbies: ['football', 'basketball',],
            remarks: 'A good man',
            score: 5,
        }));
    }
    customs.value = items;

    stopTableLoading();
};

const search = () => {
    currnetPage.value = 1;
    getItems();
};

const pageChange = (page: number) => {
    getItems();
};

search();

let multipleSelection: Ref<MCustom[]> = ref([]);

const handleSelectionChange = (val: MCustom[]) => {
    multipleSelection.value = val;
};

const add = () => {};

const deleteItems = (items: MCustom[]) => {};

const $router = useRouter();
const detail = (item: MCustom) => {
    $router.push({
        name: 'custom',
        params: {
            id: item.id,
        },
    });
};
</script>

<style lang="scss"></style>
