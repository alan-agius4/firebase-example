import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-csr',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './csr.component.html',
  styleUrl: './csr.component.scss',
})
export class CsrComponent {
  now = Date.now();
  uuid = '';

  constructor() {
    const http = inject(HttpClient);
    lastValueFrom(http.get<{ uuid: string }>('https://httpbin.org/uuid')).then(
      ({ uuid }) => (this.uuid = uuid)
    );
  }
}
