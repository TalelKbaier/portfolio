import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  type: 'work' | 'education' | 'competition';
  location?: string;
  duration?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  experiences: Experience[] = [
    {
      year: '2023 - Présent',
      title: 'Développeur',
      company: 'Triweb',
      description: 'Conception, développement et déploiement d\'applications, mise en place d\'infrastructures serveur sous Ubuntu et automatisation de processus métier.',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Ubuntu', 'CI/CD'],
      type: 'work',
      duration: '1+ an'
    },
    {
      year: '2022-Présent',
      title: 'Ingénierie en informatique (Cloud Computing & Architecture)',
      company: 'ESPRIT',
      description: 'Formation spécialisée en architecture cloud, développement d\'applications distribuées et technologies émergentes.',
      technologies: ['Cloud Computing', 'Architecture', 'DevOps', 'Microservices'],
      type: 'education',
      location: 'Tunis, Tunisia'
    },
    {
      year: '2022',
      title: 'Développeur Freelance',
      company: 'Indépendant',
      description: 'Développement de solutions web personnalisées pour divers clients, gestion de projets en autonomie.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      type: 'work',
      duration: '6 mois'
    },
    {
      year: '2021',
      title: 'Business Analytics (Stage PFE)',
      company: 'Assurance COMAR',
      description: 'Développement de tableaux de bord analytiques et mise en place de solutions BI pour l\'optimisation des processus métier.',
      technologies: ['Power BI', 'SQL Server', 'Python', 'Data Analysis'],
      type: 'work',
      duration: '5 mois'
    },
    {
      year: '2021',
      title: 'Développeur WordPress',
      company: 'Projets clients',
      description: 'Création et personnalisation de sites web WordPress, optimisation SEO et maintenance.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      type: 'work',
      duration: '8 mois'
    },
    {
      year: '2020-2022',
      title: 'Licence en Business Intelligence',
      company: 'FSEGT',
      description: 'Formation en analyse de données, développement de solutions BI et gestion de projets analytiques.',
      technologies: ['BI', 'Data Analysis', 'SQL', 'Power BI'],
      type: 'education',
      location: 'Tunis, Tunisia'
    }
  ];

  competitions = [
    {
      year: '2021',
      title: '1er prix Hackathon IEEE',
      company: 'ISET Bizerte',
      description: 'Développement d\'une solution innovante en équipe lors du hackathon organisé par IEEE ISET Bizerte.',
      technologies: ['Innovation', 'Teamwork', 'Problem Solving'],
      type: 'competition' as const
    },
    {
      year: '2020/2021',
      title: 'Finaliste OSTx Open Startup',
      company: 'Open Startup Tunisia',
      description: 'Participation au programme d\'accélération de startups avec un projet technologique innovant.',
      technologies: ['Entrepreneurship', 'Innovation', 'Pitch'],
      type: 'competition' as const
    }
  ];

  associativeRoles = [
    {
      year: '2022-2023',
      title: 'Vice-président',
      company: 'Rotary Carthage La Baie Espoir',
      description: 'Coordination des activités associatives et gestion d\'équipes pour des projets communautaires.',
      technologies: ['Leadership', 'Management', 'Community Service'],
      type: 'work' as const
    },
    {
      year: '2021-2022',
      title: 'Président',
      company: 'Rotaract Tunis El Manar',
      description: 'Direction de l\'association étudiante, organisation d\'événements et développement de partenariats.',
      technologies: ['Leadership', 'Event Management', 'Networking'],
      type: 'work' as const
    },
    {
      year: '2018-2019',
      title: 'Président',
      company: 'BIL Omrane Supérieur',
      description: 'Gestion de l\'association lycéenne et coordination des activités étudiantes.',
      technologies: ['Leadership', 'Organization', 'Communication'],
      type: 'work' as const
    }
  ];

  activeTab = 'professional';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getCurrentExperiences() {
    switch (this.activeTab) {
      case 'professional':
        return this.experiences.filter(exp => exp.type === 'work');
      case 'education':
        return this.experiences.filter(exp => exp.type === 'education');
      case 'competitions':
        return this.competitions;
      case 'associative':
        return this.associativeRoles;
      default:
        return this.experiences;
    }
  }
}
