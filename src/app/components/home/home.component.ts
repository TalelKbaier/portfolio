import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private translationService: TranslationService) {}

  ngOnInit() {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  downloadCV() {
    window.open('assets/cv/Talel_KBAIER_cvFr.pdf', '_blank');
  }
}
