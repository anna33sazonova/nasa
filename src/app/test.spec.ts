import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NasaService } from './common/nasa.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {Observable, of} from "rxjs";
import { ImageOfTheDay } from './common/imageOfTheDay.model';

describe('Quest Test Suite', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getImageOfTheDay" method which returns an Observable<string> object', () => {
    const service: NasaService = TestBed.get(NasaService);
    service.getImageOfTheDay().subscribe(
      (param_img: ImageOfTheDay) => {
        expect(param_img.hdurl).toBeTruthy();
      }
    )
  });

  fit('should create a AppComponent instance', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit(
    'component should have a public property named "imgOfTheDay"',
    async(
      () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.imageOfTheDay).toBeDefined();
      }
    )
  );

  fit(
    'component should display an image',
    async(
      () => {
        const fixture = TestBed.createComponent(AppComponent);
        const service: NasaService = TestBed.get(NasaService);
        const mock:Observable<ImageOfTheDay> = of( 
            {copyright: '', date: '', explanation: '',
            hdurl: "https://apod.nasa.gov/apod/image/1903/IC405_Abolfath_3171.jpg",
            media_type: '', service_version: '', title: '', url: ''}            
            );

        spyOn(service, "getImageOfTheDay").and.returnValue( mock );

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const content = compiled.querySelector("img").src;
        expect(content).toContain(fixture.componentInstance.imageOfTheDay?.url);
      }
    )
  );
});
@anna33sazonova
 
