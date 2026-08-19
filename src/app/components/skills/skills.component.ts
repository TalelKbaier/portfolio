import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface I18nText {
  fr: string;
  en: string;
}

interface Certification {
  name: I18nText;
  issuer: string;
  year: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  skills: Skill[] = [
    // Backend & Programming
    { name: 'Python', level: 90, icon: 'fab fa-python', category: 'programming' },
    { name: 'Java/Spring', level: 85, icon: 'fab fa-java', category: 'programming' },
    { name: '.NET', level: 80, icon: 'fab fa-microsoft', category: 'programming' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js', category: 'programming' },
    { name: 'PHP', level: 78, icon: 'fab fa-php', category: 'programming' },

    // Frontend & CMS
    { name: 'Angular', level: 85, icon: 'fab fa-angular', category: 'web' },
    { name: 'React', level: 78, icon: 'fab fa-react', category: 'web' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js-square', category: 'web' },
    { name: 'HTML5/CSS3', level: 95, icon: 'fab fa-html5', category: 'web' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap', category: 'web' },
    { name: 'WordPress', level: 82, icon: 'fab fa-wordpress', category: 'web' },

    // Cloud & DevOps
    { name: 'Azure DevOps', level: 85, icon: 'fab fa-microsoft', category: 'cloud' },
    { name: 'Docker', level: 85, icon: 'fab fa-docker', category: 'cloud' },
    { name: 'Kubernetes', level: 80, icon: 'fas fa-dharmachakra', category: 'cloud' },
    { name: 'Proxmox', level: 80, icon: 'fas fa-server', category: 'cloud' },
    { name: 'Ansible', level: 78, icon: 'fas fa-cogs', category: 'cloud' },
    { name: 'Jenkins', level: 78, icon: 'fas fa-tasks', category: 'cloud' },
    { name: 'Helm', level: 72, icon: 'fas fa-ship', category: 'cloud' },
    { name: 'Prometheus', level: 75, icon: 'fas fa-chart-area', category: 'cloud' },
    { name: 'Grafana', level: 75, icon: 'fas fa-chart-line', category: 'cloud' },
    { name: 'OVH', level: 75, icon: 'fas fa-cloud', category: 'cloud' },
    { name: 'OpenStack', level: 80, icon: 'fas fa-cloud', category: 'cloud' },

    // Systèmes & Réseaux
    { name: 'Linux', level: 85, icon: 'fab fa-linux', category: 'systems' },
    { name: 'Windows', level: 80, icon: 'fab fa-windows', category: 'systems' },
    { name: 'Samba', level: 78, icon: 'fas fa-folder-open', category: 'systems' },
    { name: 'VLAN', level: 80, icon: 'fas fa-network-wired', category: 'systems' },
    { name: 'Routage', level: 80, icon: 'fas fa-route', category: 'systems' },
    { name: 'NFS', level: 78, icon: 'fas fa-hdd', category: 'systems' },
    { name: 'SFTP', level: 78, icon: 'fas fa-file-zipper', category: 'systems' },
    { name: 'DNS', level: 78, icon: 'fas fa-globe', category: 'systems' },

    // Data & BI
    { name: 'SQL Server', level: 85, icon: 'fas fa-database', category: 'database' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-leaf', category: 'database' },
    { name: 'Power BI', level: 88, icon: 'fas fa-chart-line', category: 'database' },

    // IA & Automatisation
    { name: 'n8n', level: 80, icon: 'fas fa-project-diagram', category: 'ai' },
    { name: 'Intégration API IA', level: 82, icon: 'fas fa-plug', category: 'ai' },
    { name: 'Assistants IA', level: 80, icon: 'fas fa-robot', category: 'ai' },

    // Méthodes & Outils
    { name: 'Git', level: 90, icon: 'fab fa-git-alt', category: 'tools' },
    { name: 'UML', level: 80, icon: 'fas fa-diagram-project', category: 'tools' },
    { name: 'Odoo', level: 72, icon: 'fas fa-shopping-cart', category: 'tools' },
    { name: 'Microsoft Office', level: 85, icon: 'fas fa-file-word', category: 'tools' }
  ];

  skillCategories = [
    { key: 'programming', name: 'Programming' },
    { key: 'web', name: 'Web Development' },
    { key: 'cloud', name: 'Cloud & DevOps' },
    { key: 'systems', name: 'Systems & Networks' },
    { key: 'database', name: 'Databases & BI' },
    { key: 'ai', name: 'AI & Automation' },
    { key: 'tools', name: 'Methods & Tools' }
  ];

  activeCategory = 'all';

  certifications: Certification[] = [
    {
      name: { fr: 'Python niveau 1', en: 'Python Level 1' },
      issuer: 'FormaLab',
      year: '2023',
      icon: 'fab fa-python',
      link: 'https://drive.google.com/file/d/1PdIBFGr6RDzoCkz6uXcNu4zMD7AdhICV/view?usp=sharing'
    },
    {
      name: { fr: 'Intro to AI', en: 'Intro to AI' },
      issuer: 'LinkedIn Learning',
      year: '2023',
      icon: 'fas fa-robot',
      link: 'https://www.linkedin.com/learning/certificates/e9792c39adeaba732ca9ebed79f18834457c7963805861519c65b19551d4b735'
    },
    {
      name: { fr: 'Sponsoring', en: 'Sponsoring' },
      issuer: 'LeCoach',
      year: '2022',
      icon: 'fas fa-handshake',
      link: 'https://drive.google.com/file/d/10do1VP9yPhhgEePjt8Wj_T-3p15IOPrL/view?usp=sharing'
    },
    {
      name: { fr: 'Applications of AI for Anomaly Detection', en: 'Applications of AI for Anomaly Detection' },
      issuer: 'NVIDIA',
      year: '2025',
      icon: 'fas fa-microchip',
      link: 'https://learn.nvidia.com/certificates?id=C8S1VEMeR1KTV7Cr_Bgxtw'
    }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    // Animate skill bars after component loads
    setTimeout(() => this.animateSkillBars(), 500);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  text(value: I18nText): string {
    return this.translationService.t(value);
  }

  getFilteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeCategory);
  }

  getSkillsByCategory(): { [key: string]: Skill[] } {
    const grouped: { [key: string]: Skill[] } = {};
    this.skillCategories.forEach(category => {
      grouped[category.key] = this.skills.filter(skill => skill.category === category.key);
    });
    return grouped;
  }

  getCategoryTitle(categoryKey: string): string {
    const category = this.skillCategories.find(cat => cat.key === categoryKey);
    return this.translate('skills.' + categoryKey);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
    // Re-animate skill bars when category changes
    setTimeout(() => this.animateSkillBars(), 100);
  }

  private animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const level = this.getFilteredSkills()[index]?.level || 0;
        (bar as HTMLElement).style.width = `${level}%`;
      }, index * 100);
    });
  }
}
