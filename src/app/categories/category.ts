export class Category {
    id: number;
    name: String = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
