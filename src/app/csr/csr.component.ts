import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-csr',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './csr.component.html',
  styleUrl: './csr.component.scss',
})
export class CsrComponent {
  now = new Date();
  uuid = '';

  constructor() {
    const http = inject(HttpClient);
    firstValueFrom(
      http.get<{ uuid: string }>('https://httpbin.org/uuid', {
        transferCache: false,
      })
    ).then(({ uuid }) => (this.uuid = uuid));
  }
}
