import '../polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import main app component
import { AppComponent } from './app.component';

// Import services
import { ThemeService } from './services/theme.service';
import { TranslationService } from './services/translation.service';

// Declare AOS for TypeScript
declare var AOS: any;

// Initialize AOS when the application starts
function initializeAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}

// Bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      CommonModule,
      FormsModule
    ),
    ThemeService,
    TranslationService
  ]
}).then(() => {
  // Initialize AOS after the application loads
  setTimeout(initializeAOS, 100);
}).catch(err => console.error(err));
