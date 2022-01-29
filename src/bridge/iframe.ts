const trustedOrigins: string[] = [new URL(`${import.meta.env.VITE_EXTENSION_HOST}`).origin,];

const init = () => {
    let loading: any;

    window.addEventListener(
        'message',
        (info) => {
            if (!trustedOrigins.includes(info.origin)) {
                return;
            }
            const infoData = info.data;
            const type: string = infoData.type;
            const data = infoData.data;
            switch (type) {
            case 'message':
            {
                ElMessage({
                    message: data.message,
                    type: data.type,
                    showClose: data.showClose,
                });
                break;
            }

            case 'alert':
            {
                ElMessageBox.alert(data.message, data.title, {
                    confirmButtonText: data.confirmButtonText,
                    callback: (action: string) => {
                        const iframe = document.querySelector('iframe');
                        (iframe as any).contentWindow.postMessage(
                            {
                                type: 'callback',
                                name: data.callback,
                                params: action,
                            },
                            info.origin
                        );
                    },
                });
                break;
            }

            case 'confirm': {
                ElMessageBox.confirm(data.message, data.title, {
                    confirmButtonText: data.confirmButtonText,
                    cancelButtonText: data.cancelButtonText,
                    type: data.type,
                })
                    .then(() => {
                        const iframe = document.querySelector('iframe');
                        (iframe as any).contentWindow.postMessage(
                            {
                                type: 'callback',
                                name: data.confirmCallback,
                            },
                            info.origin
                        );
                    })
                    .catch(() => {
                        const iframe = document.querySelector('iframe');
                        (iframe as any).contentWindow.postMessage(
                            {
                                type: 'callback',
                                name: data.cancelCallback,
                            },
                            info.origin
                        );
                    });
                break;
            }

            case 'prompt': {
                ElMessageBox.prompt(data.message, data.title, {
                    confirmButtonText: data.confirmButtonText,
                    cancelButtonText: data.cancelButtonText,
                    type: data.type,
                })
                    .then((value: any) => {
                        const iframe = document.querySelector('iframe');
                        (iframe as any).contentWindow.postMessage(
                            {
                                type: 'callback',
                                name: data.confirmCallback,
                                params: value.value,
                            },
                            info.origin
                        );
                    })
                    .catch(() => {
                        const iframe = document.querySelector('iframe');
                        (iframe as any).contentWindow.postMessage(
                            {
                                type: 'callback',
                                name: data.cancelCallback,
                            },
                            info.origin
                        );
                    });
                break;
            }

            case 'notification': {
                ElNotification({
                    title: data.title,
                    message: data.message,
                    type: data.type,
                });
                break;
            }

            case 'startLoading': {
                if (loading === undefined) {
                    loading = ElLoading.service({
                        lock: data.lock,
                        text: data.text,
                        background: data.background,
                    });
                }
                break;
            }

            case 'stopLoading': {
                if (loading !== undefined) {
                    loading.close();
                }
                break;
            }

            default:
                break;
            }
        },
        false
    );
};

export default init;
