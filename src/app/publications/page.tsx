'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { ArrowLeft, ExternalLink, Calendar, FileText, Users, BookOpen } from 'lucide-react';

const publications = [
  {
    id: 'papaya-fem-2025',
    title: 'Finite element modelling of the mechanical behavior of papaya fruit under compression',
    authors: 'Aina, A. M., Harith, H. H., Hashim, N., & Shukery, M. F. M.',
    journal: 'Postharvest Biology and Technology',
    volume: '226',
    pages: '113565',
    year: '2025',
    doi: '10.1016/j.postharvbio.2025.113565',
    abstract: 'This study investigates the mechanical behavior of papaya fruit under compression loading using finite element modeling (FEM). The research provides insights into the structural response of papaya to mechanical stress, which is crucial for optimizing postharvest handling and reducing fruit damage during transportation and storage.',
    keywords: ['Finite Element Modeling', 'Papaya', 'Mechanical Properties', 'Postharvest', 'Compression Testing'],
    type: 'Journal Article',
    category: 'Agricultural Engineering'
  },
  {
    id: 'papaya-shape-2024',
    title: 'The influence of papaya shape on its mass model and mechanical properties',
    authors: 'Aina, A. M., Harith, H., Hashim, N., & Shukery, M. F. M.',
    journal: 'Journal of Food Process Engineering',
    volume: '47',
    issue: '5',
    pages: 'e14627',
    year: '2024',
    doi: '10.1111/jfpe.14627',
    abstract: 'This research examines how the geometric shape of papaya fruit influences its mass distribution and mechanical properties. Understanding these relationships is essential for developing accurate predictive models for fruit handling systems and quality assessment protocols in the agricultural industry.',
    keywords: ['Papaya Shape', 'Mass Model', 'Mechanical Properties', 'Food Process Engineering', 'Fruit Quality'],
    type: 'Journal Article',
    category: 'Food Engineering'
  }
];

export default function PublicationsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedPublication, setSelectedPublication] = useState<string | null>(null);

  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort().reverse()];
  
  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(p => p.year === filter);

  const publication = selectedPublication ? publications.find(p => p.id === selectedPublication) : null;

  if (publication) {
    return (
      <div className={styles.container}>
        <nav className={styles.topNav}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            Home
          </Link>
        </nav>

        <div className={styles.publicationDetail}>
          <button onClick={() => setSelectedPublication(null)} className={styles.backBtn}>
            <ArrowLeft size={20} />
            Back to Publications
          </button>

          <div className={styles.publicationHeader}>
            <div className={styles.publicationMeta}>
              <span className={styles.typeBadge}>{publication.type}</span>
              <span className={styles.categoryBadge}>{publication.category}</span>
              <span className={styles.yearBadge}>{publication.year}</span>
            </div>
            
            <h1 className={styles.publicationTitle}>{publication.title}</h1>
            
            <div className={styles.publicationInfo}>
              <div className={styles.infoItem}>
                <Users size={18} />
                <span>{publication.authors}</span>
              </div>
              <div className={styles.infoItem}>
                <BookOpen size={18} />
                <span>
                  {publication.journal}, {publication.volume}
                  {publication.issue && `(${publication.issue})`}, {publication.pages} ({publication.year})
                </span>
              </div>
              <div className={styles.infoItem}>
                <FileText size={18} />
                <span>DOI: {publication.doi}</span>
              </div>
            </div>

            <a 
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.doiLink}
            >
              <ExternalLink size={20} />
              View Full Publication
            </a>
          </div>

          <div className={styles.publicationContent}>
            <section className={styles.section}>
              <h2>Abstract</h2>
              <p className={styles.abstract}>{publication.abstract}</p>
            </section>

            <section className={styles.section}>
              <h2>Keywords</h2>
              <div className={styles.keywords}>
                {publication.keywords.map((keyword, index) => (
                  <span key={index} className={styles.keywordBadge}>{keyword}</span>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>Citation</h2>
              <div className={styles.citation}>
                <p>
                  {publication.authors} ({publication.year}). {publication.title}. <em>{publication.journal}</em>, {publication.volume}
                  {publication.issue && `(${publication.issue})`}, {publication.pages}. https://doi.org/{publication.doi}
                </p>
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
          <h1 className={styles.pageTitle}>Research & Publications</h1>
          <p className={styles.pageSubtitle}>
            Peer-reviewed research in precision agriculture, postharvest modeling, and agricultural process engineering
          </p>
          <div className={styles.affiliation}>
            <p><strong>PhD Researcher</strong></p>
            <p>Department of Agricultural Process Engineering</p>
            <p>Universiti Putra Malaysia</p>
          </div>
        </div>
      </header>

      <div className={styles.researchFocus}>
        <div className={styles.focusContent}>
          <h2>Research Focus</h2>
          <p>
            My research focuses on numerical and data-driven modeling for precision agriculture, 
            computer vision applications in smart farming, and technology integration for sustainable 
            agricultural practices. I specialize in finite element modeling of fruit mechanical properties 
            to optimize postharvest handling and reduce food waste.
          </p>
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.filterButtons}>
          {years.map(year => (
            <button
              key={year}
              onClick={() => setFilter(year)}
              className={`${styles.filterBtn} ${filter === year ? styles.active : ''}`}
            >
              {year === 'all' ? 'All Years' : year}
            </button>
          ))}
        </div>
        <div className={styles.publicationCount}>
          {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'}
        </div>
      </div>

      <div className={styles.publicationsList}>
        {filteredPublications.map((pub) => (
          <div key={pub.id} className={styles.publicationCard}>
            <div className={styles.cardMeta}>
              <span className={styles.cardYear}>{pub.year}</span>
              <span className={styles.cardCategory}>{pub.category}</span>
            </div>
            
            <h3 className={styles.cardTitle}>{pub.title}</h3>
            
            <p className={styles.cardAuthors}>{pub.authors}</p>
            
            <p className={styles.cardJournal}>
              <em>{pub.journal}</em>, {pub.volume}
              {pub.issue && `(${pub.issue})`}, {pub.pages}
            </p>

            <div className={styles.cardFooter}>
              <button 
                onClick={() => setSelectedPublication(pub.id)}
                className={styles.detailsBtn}
              >
                View Details →
              </button>
              <a 
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.doiBtn}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
                DOI
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
