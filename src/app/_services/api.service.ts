import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private URL = 'http://127.0.0.1:3000/api/v1';
  private results: number = 0;

  constructor() {}

  async getAllIcons() {
    const res = await fetch(`${this.URL}/icons`);
    const data = await res.json();

    this.results = data.results;

    return data.data.icons;
  }

  async getLatestIcons(nr: number) {
    const res = await fetch(`${this.URL}/icons?sort=-retired&limit=${nr}`);
    const data = await res.json();

    this.results = data.results;

    return data.data.icons;
  }

  async getIconsWithQuery(query: string) {
    const res = await fetch(`${this.URL}/icons?${query}`);
    const data = await res.json();

    this.results = data.results;

    return data.data.icons;
  }

  getResults() {
    return this.results;
  }
}
