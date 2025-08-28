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
    { name: 'Python', level: 85, icon: 'fab fa-python', category: 'programming' },
    { name: 'Java Spring', level: 80, icon: 'fab fa-java', category: 'programming' },
    
    // Web Development
    { name: 'HTML5', level: 95, icon: 'fab fa-html5', category: 'web' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', category: 'web' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', category: 'web' },
    { name: 'Angular', level: 80, icon: 'fab fa-angular', category: 'web' },
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js', category: 'web' },
    { name: 'PHP', level: 70, icon: 'fab fa-php', category: 'web' },
    { name: 'WordPress', level: 85, icon: 'fab fa-wordpress', category: 'web' },
    
    // Cloud & DevOps
    { name: 'Docker', level: 80, icon: 'fab fa-docker', category: 'cloud' },
    { name: 'Kubernetes', level: 70, icon: 'fas fa-dharmachakra', category: 'cloud' },
    { name: 'OpenStack', level: 75, icon: 'fas fa-cloud', category: 'cloud' },
    { name: 'Jenkins', level: 70, icon: 'fab fa-jenkins', category: 'cloud' },
    
    // Databases & BI
    { name: 'SQL Server', level: 80, icon: 'fas fa-database', category: 'database' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-leaf', category: 'database' },
    { name: 'Power BI', level: 85, icon: 'fas fa-chart-bar', category: 'database' },
    
    // Tools
    { name: 'Git', level: 90, icon: 'fab fa-git-alt', category: 'tools' },
    { name: 'Linux', level: 85, icon: 'fab fa-linux', category: 'tools' },
    { name: 'Photoshop', level: 70, icon: 'fas fa-palette', category: 'tools' }
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
