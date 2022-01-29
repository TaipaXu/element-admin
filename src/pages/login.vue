<template>
<div class="login-page">
    <header class="login-header">
        <h1 class="login-title">
            <a :href="$domain" target="_blank">Element<b> Admin</b></a>
        </h1>
    </header>
    <main class="login-main">
        <h2 class="login-main__title">{{ $t('message.login.title') }}</h2>
        <el-form
        ref="$form"
        :model="form"
        :rules="rules"
        class="login-form">
            <el-form-item prop="account">
                <el-input
                v-model="form.account"
                :placeholder="$t('message.login.account')"
                clearable>
                    <template #prefix>
                        <e-icon name="user-filled" :size="18" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                v-model="form.password"
                type="password"
                :placeholder="$t('message.login.password')"
                clearable>
                    <template #prefix>
                        <e-icon name="lock" :size="18" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item class="login-form__last-item">
                <el-checkbox
                v-model="form.remember"
                :label="$t('message.login.remember')"
                size="large"></el-checkbox>
                <el-button
                type="primary"
                :disabled="!form.account || !form.password"
                class="login-form__submit"
                @click="login">{{ $t('message.login.signIn') }}</el-button>
            </el-form-item>
        </el-form>
        <el-divider border-style="double"></el-divider>
        <footer class="login-footer">
            <el-link type="primary">{{ $t('message.login.forgotPassword') }}</el-link>
            <select
            v-model="language"
            @change="languageChange"
            class="login-language">
                <option :value="MLanguage.En">English</option>
                <option :value="MLanguage.Zh">中文</option>
            </select>
        </footer>
    </main>
</div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from 'vue';
import { useRouter } from 'vue-router';
import store from '@/store';
import { LanguageStorage } from '@/storage';
import EIcon from '@/widgets/eIcon.vue';
import MLanguage from '@/models/language';
import i18n from '@/i18n';

const language = ref(store.getters['app/language']);
const { proxy, } = getCurrentInstance() as ComponentInternalInstance;

const languageChange = (value: Event) => {
    const language: MLanguage = Number((value.target as HTMLSelectElement).value);
    proxy!.$i18n.locale = language === MLanguage.En ? 'en' : 'zh';
    store.commit('app/setLanguage', language);
    LanguageStorage.set(language);
};

const rules = {
    account: [
        {
            required: true,
            message: i18n.global.t('message.login.rules.accountRequiredMessage'),
            trigger: 'blur',
        },
        {
            min: 5,
            max: 20,
            message: i18n.global.t('message.login.rules.accountLengthMessage'),
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: i18n.global.t('message.login.rules.passwordRequiredMessage'),
            trigger: 'blur',
        },
        {
            min: 5,
            max: 20,
            message: i18n.global.t('message.login.rules.passwordLengthMessage'),
            trigger: 'blur',
        },
    ],
};

const $form = ref();

const form = reactive({
    account: 'admin',
    password: '123456',
    remember: false,
});

const $router = useRouter();
const login = async () => {
    $form.value.validate((valid: boolean) => {
        if (valid) {
            try {
                store
                    .dispatch('user/login', {
                        account: form.account,
                        password: form.password,
                        remember: form.remember,
                    })
                    .then(() => {
                        $router.replace({ name: 'dashboard', });
                    })
                    .catch((error) => {
                        console.log('login error');
                    });
            } catch (error) {

            }
        }
    });
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';

.login {
    &-page {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 100%;
        background-color: #d2d6de;
        padding-bottom: 20px;

        .el-input__prefix {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    &-header {
        margin-top: 7%;
    }

    &-title {
        font-size: 35px;
        font-weight: normal;
    }

    &-main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 94%;
        padding: 20px 20px;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        box-shadow: 5px 5px 5px #00000059;

        @include media-breakpoint-up(lg) {
            width: 420px;
        }

        &__title {
            margin: 0;
            font-size: 14px;
            font-weight: normal;
            color: #666;
        }
    }

    &-form {
        width: 100%;
        margin-top: 20px;

        &__last-item {
            .el-form-item__content {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }

        &__submit {
            width: 120px;
        }
    }

    &-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    &-language {
        background-color: transparent;
        border: none;
        outline: none;
        appearance: none;
        font-size: 12px;
        cursor: pointer;
    }
}
</style>
