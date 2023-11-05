import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

export class Chainable {
    public throw(err: HttpErrorResponse): Observable<any> {
        return throwError(() => err);
    }

    public continue<T>(val: T): Observable<T> {
        return of(val);
    }
}

export class RxUtils {
    public static orThrow<T>(input: T, err: HttpErrorResponse): Observable<T> {
        if (input) return of(input);
        return throwError(() => err);
    }

    public static orThrowReturn<T, R>(input: T, err: HttpErrorResponse, ret: R): Observable<R> {
        if (input) return of(ret);
        return throwError(() => err);
    }

    public static logError(...args: any[]): Chainable {
        console.error(...args);
        return new Chainable();
    }

    public static logDebug(...args: any[]): Chainable {
        console.debug(...args);
        return new Chainable();
    }

    public static noop(): void {
        // left blank
    }
}