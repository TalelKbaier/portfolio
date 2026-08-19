import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private translationService: TranslationService) {}

  ngOnInit() {}

  getAge(): number {
    const birthDate = new Date(1999, 1, 17);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const beforeBirthday = now.getMonth() < birthDate.getMonth()
      || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate());
    if (beforeBirthday) {
      age--;
    }
    return age;
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
