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

  showMoreIndex: number | null = null;
  
  projects: Project[] = [
    // Projets Professionnels
    {
      title: 'Applications Web Modernes',
      description: 'Conception et développement d\'applications web avec Angular, .NET, Node.js, WordPress, SQL Server et phpMyAdmin.',
      technologies: ['Angular', 'Node.js', 'WordPress', 'SQL Server', 'phpMyAdmin', '.NET'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Automatisation Desktop Python',
      description: 'Développement d\'applications desktop en Python avec Selenium pour l\'automatisation de la récupération de données.',
      technologies: ['Python', 'Selenium', 'Desktop Development'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Infrastructure Samba & Synchronisation',
      description: 'Mise en place d\'un partage de dossiers Samba sous Ubuntu et configuration d\'une tâche cron pour la synchronisation régulière des fichiers.',
      technologies: ['Ubuntu', 'Samba', 'Cron', 'Linux'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Tableaux de Bord BI',
      description: 'Création de tableaux de bord et analyse de la performance technique d\'un programme de réassurance à l\'aide de Power BI Desktop et Excel.',
      technologies: ['Power BI', 'Excel', 'Business Intelligence', 'Réassurance'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    // Projets Académiques
    {
      title: 'Infrastructure Cloud OpenStack',
      description: 'Déploiement d\'une infrastructure cloud avec OpenStack et automatisation de la création d\'instances via Heat.',
      technologies: ['OpenStack', 'Heat', 'Cloud Computing'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Cluster Kubernetes Automatisé',
      description: 'Mise en place d\'un cluster Kubernetes automatisé avec Ansible, supervisé avec Prometheus et Grafana via Helm.',
      technologies: ['Kubernetes', 'Ansible', 'Prometheus', 'Grafana', 'Helm'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Docker Swarm & Haute Disponibilité',
      description: 'Mise en place d\'un cluster Docker Swarm et conteneurisation d\'une application web, avec garantie de haute disponibilité.',
      technologies: ['Docker Swarm', 'Containerization'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Pipeline CI/CD Jenkins',
      description: 'Mise en place d\'un pipeline CI/CD avec Jenkins.',
      technologies: ['Jenkins', 'CI/CD', 'DevOps'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Configuration Réseau Avancée',
      description: 'Configuration réseau : routage IP, VLAN, sécurisation des ports, adressage IP statique et dynamique, routage dynamique (réalisée avec Cisco Packet Tracer).',
      technologies: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'Network Security'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Applications Web Modernes',
      description: 'Développement d\'applications web avec React, .NET et MongoDB, ainsi que d\'une application mobile avec React Native.',
      technologies: ['React', '.NET', 'MongoDB', 'React Native'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Sites E-commerce Odoo',
      description: 'Création de sites e-commerce avec Odoo.',
      technologies: ['Odoo', 'E-commerce', 'ERP'],
      category: 'academic',
      status: 'completed',
      featured: false
    }
  ];

  projectCategories = [
    { key: 'all', name: 'Tous les projets' },
    { key: 'professional', name: 'Projets Professionnels' },
    { key: 'academic', name: 'Projets Académiques' }
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
