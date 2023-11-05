import { Subscription } from 'rxjs';

interface ISubscriptionListObject {
    [key: string]: Subscription;
}

export class SubscriptionList {
    private _list: ISubscriptionListObject = {};

    constructor() {
        return new Proxy(this, {
            get(obj: any, key: string) {
                if (key in obj) return obj[key];
                if (key in obj._list) return obj._list[key];
                return null;
            },
            set(obj: SubscriptionList, key: string, value: Subscription): boolean {
                obj.unsubscribeSafe(key);
                obj._list[key] = value;
                return true;
            }
        });
    }

    public unsubscribeSafe(pipename: string): void {
        if (this._list[pipename]) {
            console.debug('Unsubscribing from', pipename);
            this._list[pipename].unsubscribe();
        }
    }

    public unsubscribeAllSafe(): void {
        for (const pipename in this._list) this.unsubscribeSafe(pipename);
    }
}