'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { ArrowLeft, ExternalLink, Calendar, Tag, Github, Globe } from 'lucide-react';

const projects = [
  {
    id: 'myinterviewerai',
    title: 'myInterviewerAI',
    category: 'AI Platform',
    description: 'AI-driven interview simulation with real-time feedback to boost candidate confidence and performance',
    longDescription: 'A comprehensive AI-powered platform that helps job seekers prepare for interviews through realistic simulations, real-time feedback, and personalized coaching. The platform uses advanced machine learning algorithms to assess responses and provide actionable insights.',
    features: [
      'Led full-stack development of the platform',
      'Real-time AI-powered feedback system',
      'Machine learning assessment algorithms',
      'Interactive interview simulations',
      'Personalized coaching recommendations',
      'Progress tracking and analytics'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'Real-time Processing', 'Python', 'TensorFlow'],
    link: 'https://myinterviewer.xyz',
    github: null,
    status: 'live',
    year: '2024'
  },
  {
    id: 'afripub',
    title: 'Afripub',
    category: 'Research Platform',
    description: 'A research visibility platform for African scholars to enhance collaboration and knowledge sharing',
    longDescription: 'Afripub is building a comprehensive platform to increase the visibility of African research and foster collaboration among scholars across the continent. The platform will feature publication databases, researcher profiles, and collaboration tools.',
    features: [
      'Currently in development',
      'Connects researchers across Africa',
      'Publication database and collaboration tools',
      'Enhances visibility of African research',
      'Research metrics and analytics',
      'Networking and collaboration features'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'GraphQL'],
    link: null,
    github: null,
    status: 'development',
    year: '2025'
  },
  {
    id: 'farmcollab',
    title: 'FarmCollab',
    category: 'Marketplace',
    description: 'Marketplace platform connecting farmers with buyers for seamless produce sales',
    longDescription: 'FarmCollab creates a direct connection between farmers and buyers, eliminating middlemen and ensuring fair prices. The platform features real-time inventory management, secure transactions, and logistics coordination.',
    features: [
      'Direct farmer-to-buyer marketplace',
      'Real-time inventory management',
      'Secure transaction system',
      'Mobile-responsive design',
      'Logistics coordination',
      'Price transparency tools'
    ],
    technologies: ['React', 'Firebase', 'E-commerce', 'Payment Integration', 'Node.js'],
    link: null,
    github: null,
    status: 'live',
    year: '2023'
  },
  {
    id: 'reuseng',
    title: 'ReUseNG',
    category: 'Sustainability',
    description: 'Sustainability-focused e-commerce landing page promoting reuse and circular economy',
    longDescription: 'ReUseNG promotes sustainable consumption through a beautifully designed platform that encourages reuse and circular economy principles. The platform educates users about environmental impact while providing access to sustainable products.',
    features: [
      'Modern, conversion-optimized design',
      'Sustainability messaging and branding',
      'Responsive and accessible',
      'Fast, optimized performance',
      'Environmental impact calculator',
      'Educational content integration'
    ],
    technologies: ['React', 'Next.js', 'UI/UX', 'SEO', 'Analytics'],
    link: null,
    github: null,
    status: 'live',
    year: '2024'
  },
  {
    id: 'nrabc',
    title: 'NRABC Website',
    category: 'Web Platform',
    description: 'Scalable React-based outreach platform for the National Research and Advisory Board',
    longDescription: 'A comprehensive web platform built for the National Research and Advisory Board to manage their outreach activities, publish research findings, and engage with stakeholders. The platform handles large-scale traffic and complex content management needs.',
    features: [
      'Comprehensive information architecture',
      'Content management system',
      'Multi-page navigation structure',
      'Optimized for large-scale traffic',
      'Advanced search functionality',
      'User engagement analytics'
    ],
    technologies: ['React', 'CMS', 'Scalability', 'Performance', 'CDN', 'Caching'],
    link: null,
    github: null,
    status: 'live',
    year: '2023'
  },
  {
    id: 'automenders',
    title: 'The Auto Menders',
    category: 'Web Application',
    description: 'Full-featured automotive service booking and management platform',
    longDescription: 'A comprehensive platform for automotive service centers to manage bookings, customer relationships, and business operations. Features include an admin dashboard, appointment scheduling, blog CMS, and automated communications.',
    features: [
      'Admin dashboard for business management',
      'Appointment calendar system',
      'Blog CMS with Google Calendar integration',
      'Automated email notifications',
      'Customer relationship management',
      'Service history tracking'
    ],
    technologies: ['Full-Stack', 'CMS', 'API Integration', 'Email Automation', 'Calendar APIs'],
    link: 'https://www.theautomenders.com/',
    github: null,
    status: 'live',
    year: '2023'
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  if (project) {
    return (
      <div className={styles.container}>
        <nav className={styles.topNav}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            Home
          </Link>
        </nav>

        <div className={styles.projectDetail}>
          <button onClick={() => setSelectedProject(null)} className={styles.backBtn}>
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <div className={styles.projectHeader}>
            <div className={styles.projectMeta}>
              <span className={styles.categoryBadge}>{project.category}</span>
              <span className={styles.yearBadge}>{project.year}</span>
              <span className={`${styles.statusBadge} ${styles[project.status]}`}>
                {project.status === 'live' ? 'Live' : 'In Development'}
              </span>
            </div>
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectDescription}>{project.longDescription}</p>
            
            {(project.link || project.github) && (
              <div className={styles.projectLinks}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.primaryLink}>
                    <Globe size={20} />
                    Visit Website
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
                    <Github size={20} />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={styles.projectContent}>
            <section className={styles.section}>
              <h2>Key Features</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Technologies Used</h2>
              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <nav className={styles.topNav}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          Home
        </Link>
      </nav>

      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className={styles.headerLogo}
          />
          <h1 className={styles.pageTitle}>Featured Projects</h1>
          <p className={styles.pageSubtitle}>
            Innovative solutions at the intersection of agriculture, education, and technology
          </p>
        </div>
      </header>

      <div className={styles.filterSection}>
        <div className={styles.filterButtons}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
        <div className={styles.projectCount}>
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.map((proj) => (
          <div key={proj.id} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{proj.title}</h3>
              <span className={styles.cardCategory}>{proj.category}</span>
            </div>
            
            <p className={styles.cardDescription}>{proj.description}</p>
            
            <div className={styles.cardTech}>
              {proj.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className={styles.cardTechBadge}>{tech}</span>
              ))}
              {proj.technologies.length > 4 && (
                <span className={styles.cardTechBadge}>+{proj.technologies.length - 4}</span>
              )}
            </div>

            <div className={styles.cardFooter}>
              <button 
                onClick={() => setSelectedProject(proj.id)}
                className={styles.detailsBtn}
              >
                View Details →
              </button>
              {proj.link && (
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.liveLink}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
