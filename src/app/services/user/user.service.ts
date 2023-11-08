import { Injectable } from '@angular/core';
import { HttpApiService } from '../http-api';
import { Observable, catchError, map, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { Logger, RxUtils } from 'src/app/classes/utils';

@Injectable()
export class UserService {
	private name: string = this.constructor.name;
	private urlHead: string = "https://reqres.in";

	constructor(private httpApiService: HttpApiService) { }

	public getUsers(userId: number): Observable<User> {
		const funcname: string = this.getUsers.name;
		const path: string = `/users/${userId}`;

		return this.httpApiService.get(this.urlHead, path).pipe(
			catchError(e => RxUtils.logError(`[${this.name}]`, path, 'Error occured:', e).throw(e)),
			map(response => (new User(response.data))),
			tap((response: User) => Logger.log(this.name, funcname, 'Users fetched:', response))
		);
	}
}