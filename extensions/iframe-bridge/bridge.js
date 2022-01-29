import { uuid } from './uuid.js';

const parentOrigin = document.referrer.slice(0, -1);
const callbacks = [];

export const Message = ({ message, type, showClose, }) => {
    parent.window.postMessage({
        type: 'message',
        data: {
            message,
            type,
            showClose,
        },
    }, parentOrigin);
};

export const Alert = ({ message, title, confirmButtonText, callback, }) => {
    const callbackKey = `alert-${uuid()}`;
    if (callback !== undefined) {
        callbacks[callbackKey] = callback;
    }

    parent.window.postMessage({
        type: 'alert',
        data: {
            message,
            title,
            confirmButtonText,
            callback: callbackKey,
        },
    }, parentOrigin);
};

export const Confirm = ({ message, title, confirmButtonText, cancelButtonText, type, confirmCallback, cancelCallback, }) => {
    const confirmCallbackKey = `confirmCallbackKey-${uuid()}`;
    const cancelCallbackKey = `cancelCallbackKey-${uuid()}`;
    if (confirmCallback !== undefined) {
        callbacks[confirmCallbackKey] = confirmCallback;
    }
    if (cancelCallback !== undefined) {
        callbacks[cancelCallbackKey] = cancelCallback;
    }

    parent.window.postMessage({
        type: 'confirm',
        data: {
            message,
            title,
            confirmButtonText,
            cancelButtonText,
            type,
            confirmCallback: confirmCallbackKey,
            cancelCallback: cancelCallbackKey,
        },
    }, parentOrigin);
};

export const Prompt = ({ message, title, confirmButtonText, cancelButtonText, type, confirmCallback, cancelCallback, }) => {
    const confirmCallbackKey = `promptConfirmCallbackKey-${uuid()}`;
    const cancelCallbackKey = `promptCancelCallbackKey-${uuid()}`;
    if (confirmCallback !== undefined) {
        callbacks[confirmCallbackKey] = confirmCallback;
    }
    if (cancelCallback !== undefined) {
        callbacks[cancelCallbackKey] = cancelCallback;
    }

    parent.window.postMessage({
        type: 'prompt',
        data: {
            message,
            title,
            confirmButtonText,
            cancelButtonText,
            type,
            confirmCallback: confirmCallbackKey,
            cancelCallback: cancelCallbackKey,
        },
    }, parentOrigin);
};

export const Notification = ({ message, title, type, }) => {
    parent.window.postMessage({
        type: 'notification',
        data: {
            message,
            title,
            type,
        },
    }, parentOrigin);
};

export const StartLoading = ({ lock, text, background, }) => {
    parent.window.postMessage({
        type: 'startLoading',
        data: {
            lock,
            text,
            background,
        },
    }, parentOrigin);
};

export const StopLoading = () => {
    parent.window.postMessage({
        type: 'stopLoading',
    }, parentOrigin);
};

window.addEventListener('message', (message) => {
    if (message.origin !== parentOrigin) {
        return;
    }
    console.log('child receives message', message);

    const type = message.data.type;
    switch (type) {
    case 'callback':
    {
        callbacks[message.data.name](message.data.params);
        delete callbacks[message.data.name];
        break;
    }

    default:
        break;
    }
}, false);
