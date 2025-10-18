'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { ArrowLeft, ExternalLink, Calendar, Tag, Github, Globe, Briefcase, FileText, Download } from 'lucide-react';

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
    year: '2025'
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
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className={styles.headerLogo}
          />
          <h1 className={styles.pageTitle}>Engineering Portfolio</h1>
          <p className={styles.pageSubtitle}>
            Showcasing impactful solutions in software engineering, data analytics, and research
          </p>
          <div className={styles.headerActions}>
            <a 
              href="https://1drv.ms/w/c/1054ed53d0671c19/EbcTrUmgYPpPsHJ0PRVUabsBWyzRqdsvmjVHD7bZk8jouA?e=ugJYx6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvButton}
            >
              <FileText size={20} />
              View CV
            </a>
            <a 
              href="mailto:enquiries@example.com?subject=Job Opportunity"
              className={styles.hireButton}
            >
              <Briefcase size={20} />
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <div className={styles.roleSection}>
        <h2 className={styles.roleTitle}>Available For:</h2>
        <div className={styles.roleCards}>
          <div className={styles.roleCard}>
            <h3>Research Assistant</h3>
            <p>Agricultural research, data analysis, and academic collaboration</p>
          </div>
          <div className={styles.roleCard}>
            <h3>Data Analyst</h3>
            <p>Data processing, visualization, and insights generation</p>
          </div>
          <div className={styles.roleCard}>
            <h3>Software Engineer</h3>
            <p>Full-stack development, AI/ML integration, and system architecture</p>
          </div>
        </div>
      </div>

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
