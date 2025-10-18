import React from 'react';
import styles from './HireMe.module.css';
import { FileText, Briefcase, Mail, Linkedin, Github } from 'lucide-react';

export default function HireMe() {
  return (
    <div className={styles.container}>
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

      <div className={styles.contactSection}>
        <h3 className={styles.contactTitle}>Let's Connect</h3>
        <div className={styles.contactGrid}>
          <a 
            href="mailto:ademola.aina@outlook.com?subject=Job Opportunity"
            className={styles.contactCard}
          >
            <div className={styles.contactIcon}><Mail size={24} /></div>
            <h4>Email</h4>
            <p>Direct message for opportunities</p>
          </a>
          <a 
            href="https://linkedin.com/in/ademola-aina-m"
            target="_blank"
            rel="noopener noreferrer" 
            className={styles.contactCard}
          >
            <div className={styles.contactIcon}><Linkedin size={24} /></div>
            <h4>LinkedIn</h4>
            <p>Professional network & updates</p>
          </a>
          <a 
            href="https://github.com/ade-mic"
            target="_blank"
            rel="noopener noreferrer" 
            className={styles.contactCard}
          >
            <div className={styles.contactIcon}><Github size={24} /></div>
            <h4>GitHub</h4>
            <p>Code repositories & projects</p>
          </a>
        </div>

        <div className={styles.cvSection}>
          <a 
            href="https://1drv.ms/w/c/1054ed53d0671c19/EbcTrUmgYPpPsHJ0PRVUabsBWyzRqdsvmjVHD7bZk8jouA?e=ugJYx6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvButton}
          >
            <FileText size={20} />
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}