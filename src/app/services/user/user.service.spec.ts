import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpApiService } from '../http-api';
import { User } from 'src/app/models/user';

describe('UserService', () => {
    let userService: UserService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService, HttpApiService],
        });

        userService = TestBed.inject(UserService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should fetch user details', inject(
        [HttpTestingController],
        (httpClient: HttpTestingController) => {
            const userId = 1;
            const userResponse = {
                data: {
                    id: 1,
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john.doe@example.com',
                    avatar: 'path/to/avatar.jpg',
                    isFavourite: false,
                    isDisabled: false,
                }
            };

            userService.getUsers(userId).subscribe((user: User) => {
                expect(user.id).toEqual(userId);
                expect(user.first_name).toEqual('John');
                expect(user.last_name).toEqual('Doe');
                expect(user.email).toEqual('john.doe@example.com');
            });

            const req = httpTestingController.expectOne(`https://reqres.in/api/users/${userId}`);
            expect(req.request.method).toEqual('GET');
            req.flush(userResponse);
        }
    ));
});
