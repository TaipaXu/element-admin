<template>
<div>
    <el-form :model="form" label-width="100px">
        <el-form-item :label="$t('message.form.name')">
            <el-input
            v-model="form.name"
            :placeholder="$t('message.form.name')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.form.gender')">
            <el-select
            v-model="form.gender"
            :placeholder="$t('message.form.gender')"
            style="width: 100%">
                <el-option
                v-for="gender in genders"
                :key="gender.value"
                :label="gender.label"
                :value="gender.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item :label="$t('message.form.birthday')">
            <el-date-picker
            v-model="form.birthday"
            type="date"
            :placeholder="$t('message.form.birthday')"
            style="width: 100%">
            </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('message.form.vip')">
            <el-switch v-model="form.vip"></el-switch>
        </el-form-item>
        <el-form-item :label="$t('message.form.hobbies')">
            <el-checkbox-group v-model="form.hobbies">
                <el-checkbox label="football" name="type">{{ $t('message.form.football') }}</el-checkbox>
                <el-checkbox label="basketball" name="type">{{ $t('message.form.basketball') }}</el-checkbox>
                <el-checkbox label="swimming" name="type">{{ $t('message.form.swimming') }}</el-checkbox>
                <el-checkbox label="videoGames" name="type">{{ $t('message.form.videoGames') }}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="$t('message.form.remarks')">
            <el-input v-model="form.remarks" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">{{ $t('message.common.submit') }}</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { useStore } from "vuex";
import MOption from "@/models/option";
import i18n from '@/i18n';

let genders: Ref<MOption[]> = ref([]);

const getGenders = () => {
    genders.value = [
        {
            label: i18n.global.t('message.common.male'),
            value: 'male',
        },
        {
            label: i18n.global.t('message.common.female'),
            value: 'female',
        },
    ];
};

getGenders();

const $store = useStore();
watch(() => $store.getters['app/language'], () => {
    genders.value = [
        {
            label: i18n.global.t('message.common.male'),
            value: 'male',
        },
        {
            label: i18n.global.t('message.common.female'),
            value: 'female',
        },
    ];
});

const form = ref({
    name: '',
    gender: undefined,
    birthday: undefined,
    vip: false,
    hobbies: [],
    remarks: '',
});
</script>

<style lang="scss"></style>
