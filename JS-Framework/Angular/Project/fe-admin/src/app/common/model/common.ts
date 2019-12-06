// define models single 
export class ParamAPI {
    data: DataModel;
}

export class DataModel {
    message: string;
}

export class Action {
    action: string;
    title_page: string;
    disabled: boolean = false;
}

export class DropdownModel {
    type?: string;
    code: string;
    value: string;
}

export class Status {
    code: string;
    name: string;
    description: string;
}