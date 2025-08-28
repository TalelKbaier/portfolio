import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
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
    // Programming
    { name: 'Python', level: 90, icon: 'fab fa-python', category: 'programming' },
    { name: 'Java Spring', level: 85, icon: 'fab fa-java', category: 'programming' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js-square', category: 'programming' },
    { name: 'TypeScript', level: 82, icon: 'fab fa-js-square', category: 'programming' },
    
    // Web Development  
    { name: 'Angular', level: 85, icon: 'fab fa-angular', category: 'web' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js', category: 'web' },
    { name: 'React', level: 78, icon: 'fab fa-react', category: 'web' },
    { name: '.NET', level: 75, icon: 'fab fa-microsoft', category: 'web' },
    { name: 'WordPress', level: 82, icon: 'fab fa-wordpress', category: 'web' },
    { name: 'HTML5/CSS3', level: 95, icon: 'fab fa-html5', category: 'web' },
    { name: 'React Native', level: 75, icon: 'fab fa-react', category: 'web' },
    { name: 'PHP', level: 78, icon: 'fab fa-php', category: 'web' },
    
    // Cloud & DevOps
    { name: 'OpenStack', level: 88, icon: 'fas fa-cloud', category: 'cloud' },
    { name: 'Docker', level: 85, icon: 'fab fa-docker', category: 'cloud' },
    { name: 'Kubernetes', level: 80, icon: 'fas fa-dharmachakra', category: 'cloud' },
    { name: 'Ansible', level: 78, icon: 'fas fa-cogs', category: 'cloud' },
    { name: 'Jenkins', level: 75, icon: 'fas fa-tools', category: 'cloud' },
    { name: 'Prometheus', level: 72, icon: 'fas fa-chart-area', category: 'cloud' },
    { name: 'Grafana', level: 70, icon: 'fas fa-chart-line', category: 'cloud' },
    { name: 'Heat', level: 78, icon: 'fas fa-fire', category: 'cloud' },
    { name: 'Helm', level: 70, icon: 'fas fa-ship', category: 'cloud' },
    
    // Databases & BI
    { name: 'SQL Server', level: 85, icon: 'fas fa-database', category: 'database' },
    { name: 'MongoDB', level: 80, icon: 'fas fa-leaf', category: 'database' },
    { name: 'Power BI', level: 88, icon: 'fas fa-chart-line', category: 'database' },
    { name: 'phpMyAdmin', level: 82, icon: 'fas fa-database', category: 'database' },
    { name: 'Excel', level: 90, icon: 'fas fa-file-excel', category: 'database' },
    
    // Tools
    { name: 'Git', level: 90, icon: 'fab fa-git-alt', category: 'tools' },
    { name: 'Linux/Ubuntu', level: 85, icon: 'fab fa-ubuntu', category: 'tools' },
    { name: 'Selenium', level: 82, icon: 'fas fa-robot', category: 'tools' },
    { name: 'Samba', level: 78, icon: 'fas fa-folder-open', category: 'tools' },
    { name: 'Packet Tracer', level: 75, icon: 'fas fa-network-wired', category: 'tools' },
    { name: 'Odoo', level: 72, icon: 'fas fa-shopping-cart', category: 'tools' }
  ];

  skillCategories = [
    { key: 'programming', name: 'Programming' },
    { key: 'web', name: 'Web Development' },
    { key: 'cloud', name: 'Cloud & DevOps' },
    { key: 'database', name: 'Databases & BI' },
    { key: 'tools', name: 'Tools & Others' }
  ];

  activeCategory = 'all';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    // Animate skill bars after component loads
    setTimeout(() => this.animateSkillBars(), 500);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  getFilteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.activeCategory);
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
