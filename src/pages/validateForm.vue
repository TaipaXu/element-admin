<template>
<div>
    <el-form ref="$form" :model="form" :rules="rules" label-width="100px">
        <el-form-item :label="$t('message.form.name')" prop="name">
            <el-input
            v-model="form.name"
            :placeholder="$t('message.form.name')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.form.gender')" prop="gender">
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
        <el-form-item :label="$t('message.form.birthday')" prop="birthday">
            <el-date-picker
            v-model="form.birthday"
            type="date"
            :placeholder="$t('message.form.birthday')"
            style="width: 100%">
            </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('message.form.vip')" prop="vip">
            <el-switch v-model="form.vip"></el-switch>
        </el-form-item>
        <el-form-item :label="$t('message.form.hobbies')" prop="hobbies">
            <el-checkbox-group v-model="form.hobbies">
                <el-checkbox label="football" name="type">{{ $t('message.form.football') }}</el-checkbox>
                <el-checkbox label="basketball" name="type">{{ $t('message.form.basketball') }}</el-checkbox>
                <el-checkbox label="swimming" name="type">{{ $t('message.form.swimming') }}</el-checkbox>
                <el-checkbox label="videoGames" name="type">{{ $t('message.form.videoGames') }}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="$t('message.form.remarks')" prop="remarks">
            <el-input v-model="form.remarks" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="reset">{{ $t('message.common.reset') }}</el-button>
            <el-button
            type="primary"
            @click="submit">{{ $t('message.common.submit') }}</el-button>
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

const rules = {
    name: [
        {
            required: true,
            message: i18n.global.t('message.validateForm.rules.nameRequiredMessage'),
            trigger: 'blur',
        },
        {
            min: 3,
            max: 20,
            message: i18n.global.t('message.validateForm.rules.nameLengthMessage'),
            trigger: 'blur',
        },
    ],
};

const form = reactive({
    name: '',
    gender: undefined,
    birthday: undefined,
    vip: false,
    hobbies: [],
    remarks: '',
});

const $form = ref();

const reset = () => {
    $form.value.resetFields();
};

const submit = () => {
    $form.value.validate((valid: boolean) => {
        console.log(valid);
    });
};
</script>

<style lang="scss"></style>
