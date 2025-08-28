import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLanguage = new BehaviorSubject<string>('fr');
  public currentLanguage$ = this._currentLanguage.asObservable();
  
  private translations: { [key: string]: { [key: string]: string } } = {};

  get currentLanguage(): string {
    return this._currentLanguage.value;
  }

  constructor() {
    this.loadTranslations();
  }

  async loadTranslations(): Promise<void> {
    try {
      // Load French translations
      const frResponse = await fetch('/src/assets/i18n/fr.json');
      this.translations['fr'] = await frResponse.json();
      
      // Load English translations
      const enResponse = await fetch('/src/assets/i18n/en.json');
      this.translations['en'] = await enResponse.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback translations
      this.translations = {
        'fr': {
          'nav.home': 'Accueil',
          'nav.about': 'À propos',
          'nav.skills': 'Compétences',
          'nav.experience': 'Expérience',
          'nav.projects': 'Projets',
          'nav.contact': 'Contact'
        },
        'en': {
          'nav.home': 'Home',
          'nav.about': 'About',
          'nav.skills': 'Skills',
          'nav.experience': 'Experience',
          'nav.projects': 'Projects',
          'nav.contact': 'Contact'
        }
      };
    }
  }

  initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['fr', 'en'].includes(savedLanguage)) {
      this.setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
      this.setLanguage(browserLang);
    }
  }

  setLanguage(language: string): void {
    this._currentLanguage.next(language);
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }

  translate(key: string): string {
    const translation = this.translations[this.currentLanguage]?.[key];
    return translation || key;
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr';
    this.setLanguage(newLanguage);
  }
}
