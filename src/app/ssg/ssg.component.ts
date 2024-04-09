import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ssg',
  standalone: true,
  templateUrl: './ssg.component.html',
  styleUrl: './ssg.component.scss',
})
export class SsgComponent {
  @ViewChild('date') private date?: ElementRef;
  @ViewChild('uuid') private uuid?: ElementRef;
  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.date) {
      this.date.nativeElement.innerText = new Date();
    }

    lastValueFrom(
      this.http.get<{ uuid: string }>('https://httpbin.org/uuid')
    ).then(({ uuid }) => {
      if (this.uuid) {
        this.uuid.nativeElement.innerText = uuid;
      }
    });
  }
}
