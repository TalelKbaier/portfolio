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
    // Create a mock CV download - in real implementation, this would download an actual PDF
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,CV - Talel Kbaier - Ingénieur Cloud & Développeur Web\n\nExpérience:\n- 2023-Présent: Développeur chez Triweb\n- 2022: Développeur Freelance\n- 2021: Stage PFE Business Analytics chez Assurance COMAR\n\nFormation:\n- 2022-Présent: Ingénierie Cloud Computing & Architecture - ESPRIT\n- 2020-2022: Licence Business Intelligence - FSEGT\n\nCompétences:\n- Programmation: Python, Java Spring\n- Web: HTML5, CSS3, JavaScript, Angular, Node.js, PHP, WordPress\n- Cloud & DevOps: OpenStack, Docker, Kubernetes, Ansible, Jenkins\n- BI: SQL Server, MongoDB, Power BI\n\nContact:\n- Email: k.talel99@gmail.com\n- Téléphone: +216 20 887 855';
    link.download = 'CV_Talel_Kbaier.pdf';
    link.click();
  }
}
