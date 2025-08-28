import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image?: string;
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord administrateur.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      category: 'web',
      status: 'completed',
      featured: true,
      github: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automatisation du déploiement d\'infrastructures cloud avec Ansible et Terraform.',
      technologies: ['Ansible', 'Terraform', 'AWS', 'Docker', 'Jenkins'],
      category: 'cloud',
      status: 'completed',
      featured: true,
      github: '#'
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Tableau de bord BI pour l\'analyse des données de ventes et la visualisation des KPIs.',
      technologies: ['Power BI', 'SQL Server', 'Python', 'DAX'],
      category: 'data',
      status: 'completed',
      featured: true,
      link: '#'
    },
    {
      title: 'Mobile App React Native',
      description: 'Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'mobile',
      status: 'in-progress',
      featured: false,
      github: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Architecture microservices pour une application de gestion d\'entreprise.',
      technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'Redis'],
      category: 'cloud',
      status: 'completed',
      featured: false,
      github: '#'
    },
    {
      title: 'AI Chatbot Integration',
      description: 'Intégration d\'un chatbot IA pour le support client avec traitement du langage naturel.',
      technologies: ['Python', 'TensorFlow', 'Node.js', 'WebSocket'],
      category: 'ai',
      status: 'in-progress',
      featured: false,
      github: '#'
    }
  ];

  projectCategories = [
    { key: 'all', name: 'Tous les projets' },
    { key: 'web', name: 'Web Development' },
    { key: 'cloud', name: 'Cloud & DevOps' },
    { key: 'data', name: 'Data & BI' },
    { key: 'mobile', name: 'Mobile' },
    { key: 'ai', name: 'AI & ML' }
  ];

  activeCategory = 'all';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  getFilteredProjects(): Project[] {
    if (this.activeCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeCategory);
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-progress';
      case 'planned':
        return 'status-planned';
      default:
        return '';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'completed':
        return this.translate('projects.completed');
      case 'in-progress':
        return this.translate('projects.inProgress');
      case 'planned':
        return this.translate('projects.planned');
      default:
        return '';
    }
  }
}
