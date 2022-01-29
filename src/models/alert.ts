export type Type = 'news' | 'notice';

interface Alert {
    type: Type;
    datetime: string;
    content: string;
};

export default Alert;
