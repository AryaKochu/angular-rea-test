import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppService } from './app.service';
describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{provide: 'http://example.com/api.json', useValue: '../assets/api/api'},
        AppService,
        { provide: MockBackend, useClass: MockBackend}
      ]
    });
  });

  it('should create the service', async(
    inject([AppService], (service: AppService) => {
      expect(service).toBeTruthy();
    })));

  it('should be successful with a valid response',
    inject([AppService, MockBackend], (service: AppService, mockBackend: MockBackend) => {
      const testData = {
        'results': [{
          'price': '$726,500',
          'agency': {
            'brandingColors': {
              'primary': '#ffe512'
            },
            'logo': 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
          },
          'id': '1',
          'mainImage': 'http://main.jpg'
        }],
        'saved': [{
          'price': '$526,500',
          'agency': {
            'brandingColors': {
              'primary': '#000000'
            },
            'logo': 'http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif'
          },
          'id': '4',
          'mainImage': 'http://main-saved.jpg'
        }]
      }

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions ({
          body: JSON.stringify(testData)
        })));
      });
      service.fetchDataJSON().subscribe(data => {
        expect(data).toBeDefined();
        expect(data.length).toBeGreaterThan(0);
        expect(data).toBe(Object);
        expect(data['results']).toBeDefined();
        expect(data['results'].price).toEqual('$726,500');
        expect(data['results'].agency.brandingColors.primary).toEqual('#000000');
        expect(data['results'].agency.logo).toEqual('http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif');
        expect(data['results'].id).toEqual('4');
        expect(data['results'].mainImage).toEqual('http://main.jpg');
        expect(data['saved']).toBeDefined();
        expect(data['saved'].price).toEqual('$526,500');
        expect(data['saved'].agency.brandingColors.primary).toEqual('#000000');
        expect(data['saved'].agency.logo).toEqual('http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif');
        expect(data['saved'].id).toEqual('4');
        expect(data['saved'].mainImage).toEqual('http://main-saved.jpg');
      });
    }));
});
