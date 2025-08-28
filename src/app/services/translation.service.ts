import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLanguage = new BehaviorSubject<string>('fr');
  public currentLanguage$ = this._currentLanguage.asObservable();
  
  private translations: { [key: string]: any } = {};

  get currentLanguage(): string {
    return this._currentLanguage.value;
  }

  constructor() {
    this.loadTranslations();
  }

  async loadTranslations(): Promise<void> {
    try {
      // Load French translations
      const frResponse = await fetch('assets/i18n/fr.json');
      this.translations['fr'] = await frResponse.json();
      
      // Load English translations
      const enResponse = await fetch('assets/i18n/en.json');
      this.translations['en'] = await enResponse.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback translations avec structure hiérarchique
      this.translations = {
        'fr': {
          nav: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Compétences',
            experience: 'Expérience',
            projects: 'Projets',
            contact: 'Contact'
          },
          skills: {
            title: 'Compétences & Expertise',
            subtitle: 'Technologies et outils que j\'utilise'
          },
          experience: {
            title: 'Expérience & Formation',
            subtitle: 'Mon parcours professionnel'
          }
        },
        'en': {
          nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
          },
          skills: {
            title: 'Skills & Expertise',
            subtitle: 'Technologies and tools I work with'
          },
          experience: {
            title: 'Experience & Education',
            subtitle: 'My professional journey'
          }
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
    const keys = key.split('.');
    let translation: any = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      translation = translation?.[k];
      if (!translation) break;
    }
    
    return (typeof translation === 'string' ? translation : key);
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr';
    this.setLanguage(newLanguage);
  }
}
