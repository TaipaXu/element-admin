import mitt from 'mitt';

type Events = {
    language: 'en' | 'zh';
};

const emitter = mitt<Events>();

export default emitter;
