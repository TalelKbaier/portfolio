import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface I18nText {
  fr: string;
  en: string;
}

interface Experience {
  year: string;
  title: I18nText;
  company: I18nText;
  description: I18nText[];
  technologies: string[];
  type: 'work' | 'education' | 'competition';
  location?: I18nText;
  duration?: I18nText;
  link?: string;
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
      title: { fr: 'Développeur – Assistant Delivery Team', en: 'Developer – Assistant Delivery Team' },
      company: { fr: 'Triweb', en: 'Triweb' },
      description: [
        { fr: 'Gestion et suivi de projets, de la conception jusqu\'au déploiement.', en: 'Project management and monitoring, from design to deployment.' },
        { fr: 'Développement d\'applications web et automatisation de processus métier.', en: 'Development of web applications and automation of business processes.' },
        { fr: 'Mise en place et administration d\'infrastructures et intégration de solutions d\'automatisation et d\'intelligence artificielle.', en: 'Deployment and administration of infrastructures, integration of automation and artificial intelligence solutions.' }
      ],
      technologies: ['Angular', 'Node.js', 'Docker', 'Ubuntu', 'CI/CD', 'AI'],
      type: 'work',
      duration: { fr: '3+ ans', en: '3+ years' }
    },
    {
      year: '2022 - 2026',
      title: { fr: 'Diplôme d\'ingénieur en informatique', en: 'Engineering degree in Computer Science' },
      company: { fr: 'ESPRIT – École Supérieure Privée d\'Ingénierie et de Technologies', en: 'ESPRIT – Private Higher School of Engineering and Technology' },
      description: [
        { fr: 'Spécialité : Cloud Computing et architecture informatique (cours du soir).', en: 'Specialty: Cloud Computing and IT architecture (evening classes).' },
        { fr: 'Major de promotion | PFE : mention Excellent.', en: 'Class valedictorian | PFE: Excellent.' }
      ],
      technologies: ['Cloud Computing', 'Architecture', 'DevOps', 'Microservices'],
      type: 'education',
      location: { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia' }
    },
    {
      year: '2020 - 2022',
      title: { fr: 'Licence en Business Intelligence', en: 'Bachelor\'s degree in Business Intelligence' },
      company: { fr: 'FSEGT – Faculté des Sciences Économiques et de Gestion de Tunis', en: 'FSEGT – Faculty of Economic Sciences and Management of Tunis' },
      description: [
        { fr: 'Formation en analyse de données, développement de solutions BI et gestion de projets analytiques.', en: 'Training in data analysis, BI solution development and analytical project management.' }
      ],
      technologies: ['BI', 'Data Analysis', 'SQL', 'Power BI'],
      type: 'education',
      location: { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia' }
    },
    {
      year: '2022',
      title: { fr: 'Business Analytics – Stage de fin de licence', en: 'Business Analytics – Bachelor\'s internship' },
      company: { fr: 'Assurance COMAR', en: 'Assurance COMAR' },
      description: [
        { fr: 'Analyse, nettoyage et structuration des données.', en: 'Data analysis, cleaning and structuring.' },
        { fr: 'Création de tableaux de bord et d\'indicateurs d\'aide à la décision.', en: 'Creation of dashboards and decision-support indicators.' }
      ],
      technologies: ['Power BI', 'SQL Server', 'Data Analysis', 'Excel'],
      type: 'work',
      duration: { fr: '5 mois', en: '5 months' }
    },
    {
      year: '2021',
      title: { fr: 'Développeur WordPress', en: 'WordPress Developer' },
      company: { fr: 'Freelance', en: 'Freelance' },
      description: [
        { fr: 'Développement de sites web avec WordPress.', en: 'Development of websites with WordPress.' }
      ],
      technologies: ['WordPress', 'PHP'],
      type: 'work'
    },
    {
      year: '2019 - 2020',
      title: { fr: 'Première année en Business Computing', en: 'First year in Business Computing' },
      company: { fr: 'ISIMA – Institut Supérieur d\'Informatique de Mahdia', en: 'ISIMA – Higher Institute of Computer Science of Mahdia' },
      description: [
        { fr: 'Première année d\'études en informatique de gestion.', en: 'First year of study in business computing.' }
      ],
      technologies: ['Informatique', 'Business Computing'],
      type: 'education',
      location: { fr: 'Mahdia, Tunisie', en: 'Mahdia, Tunisia' }
    },
    {
      year: '2018 - 2019',
      title: { fr: 'Baccalauréat en sciences techniques', en: 'Technical Sciences Baccalaureate' },
      company: { fr: 'Lycée du Bardo', en: 'Lycée du Bardo' },
      description: [
        { fr: 'Obtention du baccalauréat en sciences techniques.', en: 'Obtaining the technical sciences baccalaureate.' }
      ],
      technologies: ['Sciences Techniques'],
      type: 'education',
      location: { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia' }
    }
  ];

  competitions = [
    {
      year: '2021',
      title: { fr: '1er prix Hackathon IEEE', en: '1st prize IEEE Hackathon' },
      company: { fr: 'ISET Bizerte', en: 'ISET Bizerte' },
      description: [
        { fr: 'Développement d\'une solution innovante en équipe lors du hackathon organisé par IEEE ISET Bizerte.', en: 'Development of an innovative team solution during the hackathon organized by IEEE ISET Bizerte.' }
      ],
      technologies: ['Innovation', 'Teamwork', 'Problem Solving'],
      type: 'competition' as const,
      link: 'https://drive.google.com/file/d/1ASAxl1DAM5L3Kli9cqtPC2mYm-ceFoBx/view?usp=drive_link'
    },
    {
      year: '2020-2021',
      title: { fr: 'Finaliste OSTx Open Startup', en: 'OSTx Open Startup Finalist' },
      company: { fr: 'Open Startup Tunisia', en: 'Open Startup Tunisia' },
      description: [
        { fr: 'Participation au programme d\'accélération de startups avec un projet technologique innovant.', en: 'Participation in a startup acceleration program with an innovative technology project.' }
      ],
      technologies: ['Entrepreneurship', 'Innovation', 'Pitch'],
      type: 'competition' as const,
      link: 'https://drive.google.com/file/d/1hx_WNN00jDzkfdwly_dhajh7N6Oj4oO4/view?usp=sharing'
    }
  ];

  associativeRoles = [
    {
      year: '2022-2023',
      title: { fr: 'Vice-président', en: 'Vice-President' },
      company: { fr: 'Rotary Carthage La Baie Espoir', en: 'Rotary Carthage La Baie Espoir' },
      description: [
        { fr: 'Coordination des activités associatives et gestion d\'équipes pour des projets communautaires.', en: 'Coordination of associative activities and team management for community projects.' }
      ],
      technologies: ['Leadership', 'Management', 'Community Service'],
      type: 'work' as const
    },
    {
      year: '2021-2022',
      title: { fr: 'Président', en: 'President' },
      company: { fr: 'Club Rotaract Tunis El Manar', en: 'Club Rotaract Tunis El Manar' },
      description: [
        { fr: 'Direction du club Rotaract, organisation d\'événements et développement de partenariats.', en: 'Leading the Rotaract club, organizing events and developing partnerships.' }
      ],
      technologies: ['Leadership', 'Event Management', 'Networking'],
      type: 'work' as const
    }
  ];

  activeTab = 'professional';

  professionals: any[] = [];
  educations: any[] = [];
  competitionsList: any[] = [];
  associativeList: any[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.currentLanguage$.subscribe(() => this.buildDisplay());
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  private text(value: I18nText): string {
    return this.translationService.t(value);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  private toDisplay(exp: Experience): any {
    return {
      ...exp,
      title: this.text(exp.title),
      company: this.text(exp.company),
      location: exp.location ? this.text(exp.location) : undefined,
      duration: exp.duration ? this.text(exp.duration) : undefined,
      description: exp.description.map(item => ({
        text: this.text(item),
        highlight: /major|valedictorian|mention|excellent/i.test(this.text(item))
      }))
    };
  }

  private buildDisplay() {
    this.professionals = this.experiences.filter(exp => exp.type === 'work').map(exp => this.toDisplay(exp));
    this.educations = this.experiences.filter(exp => exp.type === 'education').map(exp => this.toDisplay(exp));
    this.competitionsList = this.competitions.map(exp => this.toDisplay(exp));
    this.associativeList = this.associativeRoles.map(exp => this.toDisplay(exp));
  }

  getCurrentExperiences() {
    switch (this.activeTab) {
      case 'professional':
        return this.professionals;
      case 'education':
        return this.educations;
      case 'competitions':
        return this.competitionsList;
      case 'associative':
        return this.associativeList;
      default:
        return [];
    }
  }

  getDescriptionList(exp: any): { text: string; highlight: boolean }[] {
    return exp ? exp.description : [];
  }
}
