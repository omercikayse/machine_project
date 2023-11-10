import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpApiService } from './http-api.service';

describe('HttpApiService', () => {
    let httpApiService: HttpApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpApiService],
        });

        httpApiService = TestBed.inject(HttpApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(httpApiService).toBeTruthy();
    });

    it('should send a GET request', inject(
        [HttpTestingController], (httpClient: HttpTestingController) => {
            const apiUrl = 'https://example.com';
            const path = '/sample';
            const response = { data: 'sample data' };

            httpApiService.get(apiUrl, path).subscribe((data) => {
                expect(data).toEqual(response);
            });

            const req = httpTestingController.expectOne(`${apiUrl}/api${path}`);
            expect(req.request.method).toEqual('GET');
            req.flush(response);
        }
    ));

    it('should send a POST request', inject(
        [HttpTestingController],
        (httpClient: HttpTestingController) => {
            const apiUrl = 'https://example.com';
            const path = '/sample';
            const requestBody = { key: 'value' };
            const response = { data: 'sample data' };

            httpApiService.post(apiUrl, path, requestBody).subscribe((data) => {
                expect(data).toEqual(response);
            });

            const req = httpTestingController.expectOne(`${apiUrl}/api${path}`);
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(requestBody);
            req.flush(response);
        }
    ));

    it('should send a PUT request', inject(
        [HttpTestingController],
        (httpClient: HttpTestingController) => {
            const apiUrl = 'https://example.com';
            const path = '/sample';
            const requestBody = { key: 'value' };
            const response = { data: 'sample data' };

            httpApiService.put(apiUrl, path, requestBody).subscribe((data) => {
                expect(data).toEqual(response);
            });

            const req = httpTestingController.expectOne(`${apiUrl}/api${path}`);
            expect(req.request.method).toEqual('PUT');
            expect(req.request.body).toEqual(requestBody);
            req.flush(response);
        }
    ));

    it('should send a DELETE request', inject(
        [HttpTestingController],
        (httpClient: HttpTestingController) => {
            const apiUrl = 'https://example.com';
            const path = '/sample';
            const response = { data: 'sample data' };

            httpApiService.delete(apiUrl, path).subscribe((data) => {
                expect(data).toEqual(response);
            });

            const req = httpTestingController.expectOne(`${apiUrl}/api${path}`);
            expect(req.request.method).toEqual('DELETE');
            req.flush(response);
        }
    ));
});
