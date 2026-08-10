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
    // Projet de Fin d'Études
    {
      title: 'PFE – Application Web Intelligente (2026)',
      description: 'Application web intelligente – IA, automatisation, Cloud et CI/CD. Développement d\'une application web intégrant un assistant IA et des workflows d\'automatisation avec n8n. Conception et automatisation d\'un pipeline CI/CD dans Azure DevOps (création et publication d\'images Docker sur Docker Hub). Conteneurisation avec Docker, orchestration avec Kubernetes et déploiement sur une infrastructure virtualisée avec Proxmox. Supervision et monitoring avec Prometheus et Grafana. Déploiement de machines virtuelles dédiées au stockage persistant des données.',
      technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'Proxmox', 'n8n', 'Prometheus', 'Grafana', 'Assistants IA'],
      category: 'pfe',
      status: 'completed',
      featured: true
    },
    // Projets Professionnels
    {
      title: 'Applications Web Modernes',
      description: 'Conception et développement de plusieurs applications web avec .NET, Angular, Node.js, WordPress et SQL Server.',
      technologies: ['.NET', 'Angular', 'Node.js', 'WordPress', 'SQL Server'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Infrastructure Samba & Synchronisation',
      description: 'Mise en place d\'une infrastructure sous Ubuntu, comprenant un partage de fichiers avec Samba et une synchronisation planifiée avec cron.',
      technologies: ['Ubuntu', 'Samba', 'Cron', 'Linux'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Tableaux de Bord BI',
      description: 'Création de tableaux de bord et d\'indicateurs de suivi avec Power BI Desktop et Excel.',
      technologies: ['Power BI', 'Excel', 'Business Intelligence'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: 'Intégration IA & Assistants IA',
      description: 'Intégration d\'API d\'intelligence artificielle et développement d\'assistants IA pour automatiser des tâches métier.',
      technologies: ['API IA', 'Assistants IA', 'n8n', 'Automatisation'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    // Projets Académiques
    {
      title: 'Projet CI/CD – Azure DevOps',
      description: 'Déploiement d\'une infrastructure cloud privée sur OpenStack et application full-stack conteneurisée sur Kubernetes.',
      technologies: ['Azure DevOps', 'OpenStack', 'Kubernetes', 'Docker', 'CI/CD'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Projet DevOps – Jenkins',
      description: 'Mise en place d\'un pipeline Jenkins intégrant SonarQube, Nexus et Docker, avec déploiement d\'une stack Spring Boot + MySQL via Docker Compose et supervision avec Prometheus/Grafana.',
      technologies: ['Jenkins', 'SonarQube', 'Nexus', 'Docker', 'Spring Boot', 'MySQL', 'Prometheus', 'Grafana'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Application Web – React/.NET/MongoDB',
      description: 'Développement d\'une application web avec React, .NET et MongoDB.',
      technologies: ['React', '.NET', 'MongoDB'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Application Mobile – React Native',
      description: 'Développement d\'une application mobile avec React Native.',
      technologies: ['React Native'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Machine Learning',
      description: 'Réalisation de travaux pratiques de Machine Learning supervisé et non supervisé.',
      technologies: ['Python', 'Machine Learning', 'Supervisé/non supervisé'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Réseaux – Cisco Packet Tracer',
      description: 'Configuration d\'infrastructures réseau : VLAN, routage IP statique et dynamique, sécurisation des ports et adressage IP.',
      technologies: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'Network Security'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: 'Site E-commerce – Odoo',
      description: 'Création d\'un site e-commerce avec Odoo.',
      technologies: ['Odoo', 'E-commerce', 'ERP'],
      category: 'academic',
      status: 'completed',
      featured: false
    }
  ];

  projectCategories = [
    { key: 'all', name: 'Tous les projets' },
    { key: 'pfe', name: 'Projet de Fin d\'Études' },
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

  getCategoryName(category: string): string {
    const found = this.projectCategories.find(cat => cat.key === category);
    return found ? found.name : (category.charAt(0).toUpperCase() + category.slice(1));
  }
}
