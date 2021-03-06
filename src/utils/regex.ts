
export interface Controller  {
    check(key: string, str: string): boolean;
}
export class Regex {
    register = new Map();

    constructor() {
        this.register.set('name', `^[-_A-Za-z0-9.]{1,32}$`);
        this.register.set('email', `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,64}$`);
        this.register.set('password', `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$`);
        this.register.set('6code', `^[0-9]{3}-[0-9]{3}$`);
        this.register.set('number', `^[0-9]$`);
    }

    check(key: string, str: string): boolean {
        if (!this.register.has(key)) {
            return false;
        }

        const regex = this.register.get(key);
        const got = str.match(regex);
        return (got != null && got.length == 1);
    }
}

const instance: Controller = new Regex();
export default instance;