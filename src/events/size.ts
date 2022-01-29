import mitt from 'mitt';
import { Size as MSize } from '@/models/app';

interface SizeChange {
    oldSize: MSize,
    newSize: MSize,
};

type Events = {
    size: SizeChange;
};

const emitter = mitt<Events>();

export default emitter;
