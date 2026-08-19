import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface I18nText {
  fr: string;
  en: string;
}

interface Project {
  title: I18nText;
  description: I18nText[];
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
  expandedMap = new Map<any, boolean>();

  visibleDescription(project: any): string[] {
    const list = this.getDescriptionList(project);
    if (!this.expandedMap.get(project)) {
      return list.slice(0, 2);
    }
    return list;
  }

  isExpanded(project: any): boolean {
    return !!this.expandedMap.get(project);
  }

  getHiddenCount(project: any): number {
    const list = this.getDescriptionList(project);
    return Math.max(0, list.length - 2);
  }

  toggleExpand(project: any) {
    this.expandedMap.set(project, !this.expandedMap.get(project));
  }
  
  projects: Project[] = [
    // Projet de Fin d'Études
    {
      title: { fr: 'PFE – Application Web Intelligente (2026)', en: 'PFE – Intelligent Web Application (2026)' },
      description: [
        { fr: 'Application web intelligente construite de bout en bout, combinant développement full stack, assistant IA conversationnel et automatisation de tâches métier.', en: 'Intelligent web application built end-to-end, combining full stack development, a conversational AI assistant and business task automation.' },
        { fr: 'Conception et développement complet de l\'interface et de la logique métier (frontend & backend) de l\'application.', en: 'Complete design and development of the application interface and business logic (frontend & backend).' },
        { fr: 'Intégration d\'un assistant IA conversationnel (chat) qui dialogue avec les utilisateurs et traite leurs demandes en temps réel.', en: 'Integration of a conversational AI assistant (chat) that interacts with users and processes their requests in real time.' },
        { fr: 'Mise en place de workflows d\'automatisation avec n8n pour automatiser les tâches métier récurrentes (traitement de données, notifications, intégration d\'API IA).', en: 'Implementation of automation workflows with n8n to automate recurring business tasks (data processing, notifications, AI API integration).' },
        { fr: 'Conception et automatisation d\'un pipeline CI/CD dans Azure DevOps, assurant la création et la publication des images Docker sur Docker Hub.', en: 'Design and automation of a CI/CD pipeline in Azure DevOps, ensuring the creation and publication of Docker images on Docker Hub.' },
        { fr: 'Conteneurisation de l\'application avec Docker, orchestration avec Kubernetes et déploiement sur une infrastructure virtualisée avec Proxmox.', en: 'Application containerization with Docker, orchestration with Kubernetes and deployment on a virtualized infrastructure with Proxmox.' },
        { fr: 'Supervision et monitoring avec Prometheus pour la collecte des métriques et Grafana pour leur visualisation.', en: 'Monitoring with Prometheus for metric collection and Grafana for their visualization.' },
        { fr: 'Déploiement de machines virtuelles dédiées au stockage persistant des données de l\'application.', en: 'Deployment of dedicated virtual machines for the persistent storage of application data.' }
      ],
      technologies: ['Azure DevOps', 'Docker', 'Kubernetes', 'Proxmox', 'n8n', 'Prometheus', 'Grafana', 'Assistants IA'],
      category: 'pfe',
      status: 'completed',
      featured: true
    },
    // Projets Professionnels
    {
      title: { fr: 'Applications Web Modernes', en: 'Modern Web Applications' },
      description: [
        { fr: 'Conception et développement de plusieurs applications web avec .NET, Angular, Node.js, WordPress et SQL Server.', en: 'Design and development of several web applications with .NET, Angular, Node.js, WordPress and SQL Server.' }
      ],
      technologies: ['.NET', 'Angular', 'Node.js', 'WordPress', 'SQL Server'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Infrastructure Samba & Synchronisation', en: 'Samba Infrastructure & Synchronization' },
      description: [
        { fr: 'Mise en place d\'une infrastructure sous Ubuntu, comprenant un partage de fichiers avec Samba et une synchronisation planifiée avec cron.', en: 'Setup of an Ubuntu infrastructure, including file sharing with Samba and scheduled synchronization with cron.' }
      ],
      technologies: ['Ubuntu', 'Samba', 'Cron', 'Linux'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Tableaux de Bord BI', en: 'BI Dashboards' },
      description: [
        { fr: 'Création de tableaux de bord et d\'indicateurs de suivi avec Power BI Desktop et Excel.', en: 'Creation of dashboards and tracking indicators with Power BI Desktop and Excel.' }
      ],
      technologies: ['Power BI', 'Excel', 'Business Intelligence'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Intégration IA & Assistants IA', en: 'AI Integration & AI Assistants' },
      description: [
        { fr: 'Intégration d\'API d\'intelligence artificielle et développement d\'assistants IA pour automatiser des tâches métier.', en: 'Integration of artificial intelligence APIs and development of AI assistants to automate business tasks.' }
      ],
      technologies: ['API IA', 'Assistants IA', 'n8n', 'Automatisation'],
      category: 'professional',
      status: 'completed',
      featured: false
    },
    // Projets Académiques
    {
      title: { fr: 'Projet CI/CD – Azure DevOps', en: 'CI/CD Project – Azure DevOps' },
      description: [
        { fr: 'Déploiement d\'une infrastructure cloud privée sur OpenStack et application full-stack conteneurisée sur Kubernetes.', en: 'Deployment of a private cloud infrastructure on OpenStack and a full-stack application containerized on Kubernetes.' }
      ],
      technologies: ['Azure DevOps', 'OpenStack', 'Kubernetes', 'Docker', 'CI/CD'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Projet DevOps – Jenkins', en: 'DevOps Project – Jenkins' },
      description: [
        { fr: 'Mise en place d\'un pipeline Jenkins intégrant SonarQube, Nexus et Docker, avec déploiement d\'une stack Spring Boot + MySQL via Docker Compose et supervision avec Prometheus/Grafana.', en: 'Setup of a Jenkins pipeline integrating SonarQube, Nexus and Docker, with deployment of a Spring Boot + MySQL stack via Docker Compose and monitoring with Prometheus/Grafana.' }
      ],
      technologies: ['Jenkins', 'SonarQube', 'Nexus', 'Docker', 'Spring Boot', 'MySQL', 'Prometheus', 'Grafana'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Application Web – React/.NET/MongoDB', en: 'Web Application – React/.NET/MongoDB' },
      description: [
        { fr: 'Développement d\'une application web avec React, .NET et MongoDB.', en: 'Development of a web application with React, .NET and MongoDB.' }
      ],
      technologies: ['React', '.NET', 'MongoDB'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Application Mobile – React Native', en: 'Mobile Application – React Native' },
      description: [
        { fr: 'Développement d\'une application mobile avec React Native.', en: 'Development of a mobile application with React Native.' }
      ],
      technologies: ['React Native'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Machine Learning', en: 'Machine Learning' },
      description: [
        { fr: 'Réalisation de travaux pratiques de Machine Learning supervisé et non supervisé.', en: 'Hands-on practical work in supervised and unsupervised Machine Learning.' }
      ],
      technologies: ['Python', 'Machine Learning', 'Supervisé/non supervisé'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Réseaux – Cisco Packet Tracer', en: 'Networks – Cisco Packet Tracer' },
      description: [
        { fr: 'Configuration d\'infrastructures réseau : VLAN, routage IP statique et dynamique, sécurisation des ports et adressage IP.', en: 'Configuration of network infrastructures: VLAN, static and dynamic IP routing, port security and IP addressing.' }
      ],
      technologies: ['Cisco Packet Tracer', 'VLAN', 'Routing', 'Network Security'],
      category: 'academic',
      status: 'completed',
      featured: false
    },
    {
      title: { fr: 'Site E-commerce – Odoo', en: 'E-commerce Website – Odoo' },
      description: [
        { fr: 'Création d\'un site e-commerce avec Odoo.', en: 'Creation of an e-commerce website with Odoo.' }
      ],
      technologies: ['Odoo', 'E-commerce', 'ERP'],
      category: 'academic',
      status: 'completed',
      featured: false
    }
  ];

  projectCategories = [
    { key: 'all', name: { fr: 'Tous les projets', en: 'All projects' } },
    { key: 'pfe', name: { fr: 'Projet de Fin d\'Études', en: 'Final Year Project' } },
    { key: 'professional', name: { fr: 'Projets Professionnels', en: 'Professional Projects' } },
    { key: 'academic', name: { fr: 'Projets Académiques', en: 'Academic Projects' } }
  ];

  activeCategory = 'all';

  private cachedProjects: any[] = [];
  private cachedFeatured: any[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLanguage$.subscribe(() => this.buildDisplay());
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  text(value: I18nText): string {
    return this.translationService.t(value);
  }

  private toDisplay(project: Project): any {
    return {
      ...project,
      title: this.text(project.title),
      description: project.description.map(item => this.text(item))
    };
  }

  private buildDisplay() {
    this.cachedProjects = this.projects.map(project => this.toDisplay(project));
    this.cachedFeatured = this.projects.filter(project => project.featured).map(project => this.toDisplay(project));
  }

  getFilteredProjects(): any[] {
    if (this.activeCategory === 'all') {
      return this.cachedProjects;
    }
    return this.cachedProjects.filter(project => project.category === this.activeCategory);
  }

  getDescriptionList(project: any): string[] {
    return project ? project.description : [];
  }

  getFeaturedProjects(): any[] {
    return this.cachedFeatured;
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
    if (found) {
      return this.text(found.name);
    }
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
}