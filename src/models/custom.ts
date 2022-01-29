import i18n from '@/i18n';

export enum Gender {
    Male,
    Female,
}

type Score = 0 | 1 | 2 | 3 | 4 | 5;

interface Params {
    id: string;
    name: string;
    gender: Gender;
    birthday?: string;
    vip: boolean;
    hobbies?: string[];
    remarks?: string;
    score?: Score;
}

export default class Custom {
    public readonly id: string;
    public readonly name: string;
    public readonly gender: Gender;
    public readonly birthday?: string;
    public readonly vip: boolean;
    public readonly hobbies?: string[];
    public readonly remarks?: string;
    public readonly score?: Score;

    constructor(params: Params) {
        this.id = params.id;
        this.name = params.name;
        this.gender = params.gender;
        this.birthday = params.birthday;
        this.vip = params.vip;
        this.hobbies = params.hobbies;
        this.remarks = params.remarks;
        this.score = params.score;
    }
}
