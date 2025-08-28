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
      value: 'Talel Khaldi',
      link: 'https://linkedin.com/in/talel-khaldi',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'talel-khaldi',
      link: 'https://github.com/talel-khaldi',
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
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 2000);
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
    // Create a mock CV download - in real implementation, this would download an actual PDF
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,CV - Talel Khaldi - Développeur Cloud & Web';
    link.download = 'CV_Talel_Khaldi.pdf';
    link.click();
  }
}
