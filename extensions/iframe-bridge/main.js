console.log('main');
console.log(location.href);
const queryString = window.location.search;
console.log('queryString', queryString);
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token');
const permissions = JSON.parse(urlParams.get('permissions'));
console.log('token', token);
console.log('permissions', permissions);
console.log('document.referrer', document.referrer);

import {
    Message,
    Alert,
    Confirm,
    Prompt,
    Notification,
    StartLoading,
    StopLoading
} from './bridge.js';

// Message
document.querySelector('.button-message').addEventListener('click', () => {
    Message({
        message: `Hell from child. ${Date()}`,
        type: 'success',
        showClose: true,
    });
});

// Alert
document.querySelector('.button-alert').addEventListener('click', () => {
    Alert({
        message: `Hell from child. ${Date()}`,
        title: 'Hell from child',
        confirmButtonText: 'OK',
        callback: () => {
            console.log('alert callback');
        },
    });
});

// Confirm
document.querySelector('.button-confirm').addEventListener('click', () => {
    Confirm({
        message: `Hell from child. ${Date()}`,
        title: 'Hell from child',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        confirmCallback: () => {
            console.log('confirmCallback');
        },
        cancelCallback: () => {
            console.log('cancelCallback');
        },
    });
});

// Prompt
document.querySelector('.button-prompt').addEventListener('click', () => {
    Prompt({
        message: `Hell from child. ${Date()}`,
        title: 'Hell from child',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        confirmCallback: (value) => {
            console.log('confirmCallback', value);
        },
        cancelCallback: () => {
            console.log('cancelCallback');
        },
    });
});

// Notification
document.querySelector('.button-notification').addEventListener('click', () => {
    Notification({
        message: `Hell from child. ${Date()}`,
        title: 'Hell from child',
        type: 'success',
    });
});

// Loading
document.querySelector('.button-loading').addEventListener('click', () => {
    StartLoading({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    });
    setTimeout(() => {
        StopLoading();
    }, 1500);
});

const $textarea = document.querySelector('.textarea');
window.addEventListener('message', (message) => {
    if (message.origin !== document.referrer.slice(0, -1)) {
        return;
    }
    console.log('child receives message', message);
    $textarea.value = JSON.stringify(message.data);
}, false);
