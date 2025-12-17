import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark = signal(false);

  toggleTheme() {
    this.isDark.update(v => !v);
    const html = document.documentElement;
    if (this.isDark()) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
