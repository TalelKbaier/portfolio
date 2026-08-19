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
      title: 'Développeur – Assistant Delivery Team',
      company: 'Triweb',
      description: 'Gestion et suivi de projets, de la conception jusqu\'au déploiement. Développement d\'applications web et automatisation de processus métier. Mise en place et administration d\'infrastructures et intégration de solutions d\'automatisation et d\'intelligence artificielle.',
      technologies: ['Angular', 'Node.js', 'Docker', 'Ubuntu', 'CI/CD', 'IA'],
      type: 'work',
      duration: '3+ ans'
    },
    {
      year: '2022 - 2026',
      title: 'Diplôme d\'ingénieur en informatique',
      company: 'ESPRIT – École Supérieure Privée d\'Ingénierie et de Technologies',
      description: 'Spécialité : Cloud Computing et architecture informatique (cours du soir). Major de promotion | PFE : mention Excellent.',
      technologies: ['Cloud Computing', 'Architecture', 'DevOps', 'Microservices'],
      type: 'education',
      location: 'Tunis, Tunisie'
    },
    {
      year: '2020 - 2022',
      title: 'Licence en Business Intelligence',
      company: 'FSEGT – Faculté des Sciences Économiques et de Gestion de Tunis',
      description: 'Formation en analyse de données, développement de solutions BI et gestion de projets analytiques.',
      technologies: ['BI', 'Data Analysis', 'SQL', 'Power BI'],
      type: 'education',
      location: 'Tunis, Tunisie'
    },
    {
      year: '2022',
      title: 'Business Analytics – Stage de fin de licence',
      company: 'Assurance COMAR',
      description: 'Analyse, nettoyage et structuration des données. Création de tableaux de bord et d\'indicateurs d\'aide à la décision.',
      technologies: ['Power BI', 'SQL Server', 'Data Analysis', 'Excel'],
      type: 'work',
      duration: '5 mois'
    },
    {
      year: '2021',
      title: 'Développeur WordPress',
      company: 'Freelance',
      description: 'Développement de sites web avec WordPress.',
      technologies: ['WordPress', 'PHP'],
      type: 'work'
    },
    {
      year: '2019 - 2020',
      title: 'Première année en Business Computing',
      company: 'ISIMA – Institut Supérieur d\'Informatique de Mahdia',
      description: 'Première année d\'études en informatique de gestion.',
      technologies: ['Informatique', 'Business Computing'],
      type: 'education',
      location: 'Mahdia, Tunisie'
    },
    {
      year: '2018 - 2019',
      title: 'Baccalauréat en sciences techniques',
      company: 'Lycée du Bardo',
      description: 'Obtention du baccalauréat en sciences techniques.',
      technologies: ['Sciences Techniques'],
      type: 'education',
      location: 'Tunis, Tunisie'
    }
  ];

  competitions = [
    {
      year: '2021',
      title: '1er prix Hackathon IEEE',
      company: 'ISET Bizerte',
      description: 'Développement d\'une solution innovante en équipe lors du hackathon organisé par IEEE ISET Bizerte.',
      technologies: ['Innovation', 'Teamwork', 'Problem Solving'],
      type: 'competition' as const,
      link: 'https://drive.google.com/file/d/1ASAxl1DAM5L3Kli9cqtPC2mYm-ceFoBx/view?usp=drive_link'
    },
    {
      year: '2020-2021',
      title: 'Finaliste OSTx Open Startup',
      company: 'Open Startup Tunisia',
      description: 'Participation au programme d\'accélération de startups avec un projet technologique innovant.',
      technologies: ['Entrepreneurship', 'Innovation', 'Pitch'],
      type: 'competition' as const,
      link: 'https://drive.google.com/file/d/1hx_WNN00jDzkfdwly_dhajh7N6Oj4oO4/view?usp=sharing'
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
      company: 'Club Rotaract Tunis El Manar',
      description: 'Direction du club Rotaract, organisation d\'événements et développement de partenariats.',
      technologies: ['Leadership', 'Event Management', 'Networking'],
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

  getDescriptionList(exp: Experience): { text: string; highlight: boolean }[] {
    return exp.description
      .split(/\. /)
      .map((item, index, arr) => {
        let text = item.trim();
        if (index < arr.length - 1 && !text.endsWith('.')) {
          text += '.';
        }
        return text;
      })
      .filter(text => text.length > 0)
      .map(text => ({
        text,
        highlight: /major|mention excellent/i.test(text)
      }));
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
