import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Headers = HttpHeaders | { [header: string]: string | string[] };
export type Params = HttpParams | { [param: string]: string | string[] };

@Injectable()
export class HttpApiService {
	private apiPrefix: string = '/api';

	constructor(private http: HttpClient) { }

	public invokeUrl(apiUrl: string, path: string) {
		return `${apiUrl}${this.apiPrefix}${path}`;
	}
	public get(apiUrl: string, path: string, params?: Params, headers?: Headers): Observable<any> {
		return this.http.get(this.invokeUrl(apiUrl, path), { headers, params });
	}
	public post(apiUrl: string, path: string, body: any | null, params?: Params, headers?: Headers): Observable<any> {
		return this.http.post(this.invokeUrl(apiUrl, path), body, { headers, params });
	}
	public put(apiUrl: string, path: string, body: any | null, params?: Params, headers?: Headers): Observable<any> {
		return this.http.put(this.invokeUrl(apiUrl, path), body, { headers, params });
	}
	public delete(apiUrl: string, path: string, params?: Params, headers?: Headers): Observable<any> {
		return this.http.delete(this.invokeUrl(apiUrl, path), { headers, params });
	}
}