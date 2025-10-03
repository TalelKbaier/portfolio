import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactMethods: ContactMethod[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'k.talel99@gmail.com',
      link: 'mailto:k.talel99@gmail.com',
      color: '#ea4335'
    },
    {
      icon: 'fas fa-phone',
      title: 'Téléphone',
      value: '+216 20 887 855',
      link: 'tel:+21620887855',
      color: '#4285f4'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Talel Kbaier',
      link: 'https://linkedin.com/in/talel-kb',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'talel-kbaier',
      link: 'https://github.com/talel-kb',
      color: '#333'
    }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit() {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  onSubmit() {
    if (this.isValidForm()) {
      const subject = encodeURIComponent(this.formData.subject);
      const body = encodeURIComponent(
        `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\n\n${this.formData.message}`
      );
      window.location.href = `mailto:k.talel99@gmail.com?subject=${subject}&body=${body}`;
    }
  }

  isValidForm(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim() &&
      this.isValidEmail(this.formData.email)
    );
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  downloadCV() {
    window.open('assets/cv/Talel_KBAIER_cvFr.pdf', '_blank');
  }
}
