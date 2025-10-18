import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Code, Lightbulb, Sprout, Briefcase, FlaskConical, Leaf, Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <div className={styles.heroContent}>
            <div className={styles.profileImageContainer}>
              <Image
                src="/ADE-PW.jpg"
                alt="Ademola Aina"
                width={200}
                height={200}
                className={styles.profileImage}
                priority
              />
            </div>
            <h1 className={styles.heroTitle}>
              Ademola Aina
            </h1>
            <ul className={styles.heroTags}>
                <li>
                  <GraduationCap className={styles.heroTagIcon} />
                  <span>PhD researcher</span>
                </li>
                <li>
                  <Code className={styles.heroTagIcon} />
                  <span>Full-stack engineer</span>
                </li>
                <li>
                  <Sprout className={styles.heroTagIcon} />
                  <span>Technology Integration for Sustainable Practices</span>
                </li>
              </ul>
          </div>
        </section>        {/* About Section */}
        <section className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                I'm <strong>Ademola Aina</strong>, a PhD candidate in Agricultural Process Engineering with a passion for 
                building intelligent, scalable software.
                I combine computational modeling, data science, 
                and AI to create scalable solutions that solve complex real-world challenges, 
                from optimizing postharvest fruit systems to building user-friendly, and intelligent
                web platforms.
                 I enjoy turning research insights into practical, user-focused technology.
              </p>
              
              <h3 className={styles.currentFocusTitle}>Current Focus</h3>
              <ul className={styles.focusList}>
                <li>
                  <GraduationCap className={styles.focusIcon} />
                  <span>PhD candidate in Agricultural Process Engineering, applying AI to disease detection in fresh produce.</span>
                </li>
                <li>
                  <Code className={styles.focusIcon} />
                  <span>Full-Stack Engineer of Afripub — a digital platform for publishing and promoting African literature.</span>
                </li>
                <li>
                  <Lightbulb className={styles.focusIcon} />
                  <span>Full-Stack Engineer of MyInterviewerAI, an AI-driven interview simulation platform.</span>
                </li>
                <li>
                  <Sprout className={styles.focusIcon} />
                  <span>Advancing sustainable innovation through the fusion of research, AI, and software engineering.</span>
                </li>
              </ul>
              
              <div className={styles.skillsContainer}>
                <h3 className={styles.skillsTitle}>Academic + Technical Skills</h3>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillCategoryTitle}>Research & Modeling</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Finite Element Modeling</span>
                      <span className={styles.skillTag}>Computer Vision</span>
                      <span className={styles.skillTag}>Machine Learning</span>
                      <span className={styles.skillTag}>Data Analytics</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillCategoryTitle}>Programming</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Python</span>
                      <span className={styles.skillTag}>JavaScript</span>
                      <span className={styles.skillTag}>React</span>
                      <span className={styles.skillTag}>Node.js</span>
                      <span className={styles.skillTag}>Next.js</span>
                      <span className={styles.skillTag}>SQL</span>
                      <span className={styles.skillTag}>R</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillCategoryTitle}>Cloud & Tools</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Firebase</span>
                      <span className={styles.skillTag}>AWS</span>
                      <span className={styles.skillTag}>Azure</span>
                      <span className={styles.skillTag}>Data Visualization</span>
                      <span className={styles.skillTag}>Simulation Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.section} id="projects">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.portfolioIntro}>
            Innovative solutions at the intersection of agriculture, education, and technology
          </p>
          <div className={styles.projectsGrid}>
            {/* MyInterviewerAI Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>MyInterviewerAI</h3>
                <span className={styles.projectTag}>AI Platform</span>
              </div>
              <p className={styles.projectDescription}>
                AI-driven interview simulation with real-time feedback to boost candidate confidence and performance
              </p>
              <ul className={styles.projectFeatures}>
                <li>Led full-stack development of the platform</li>
                <li>Real-time AI-powered feedback system</li>
                <li>LLM assessment</li>
                <li>Interactive interview simulations</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>AI/ML</span>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Node.js</span>
                <span className={styles.techBadge}>Real-time Processing</span>
              </div>
              <div className={styles.projectLinks}>
                <a 
                  href="https://myinterviewer.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Live App →
                </a>
              </div>
            </div>

            {/* The Auto Menders */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>The Auto Menders</h3>
                <span className={styles.projectTag}>Web Application</span>
              </div>
              <p className={styles.projectDescription}>
                Full-featured automotive service booking and management platform
              </p>
              <ul className={styles.projectFeatures}>
                <li>Admin dashboard for business management</li>
                <li>Appointment calendar system</li>
                <li>Blog CMS with Google Calendar integration</li>
                <li>Automated email notifications</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>Full-Stack</span>
                <span className={styles.techBadge}>CMS</span>
                <span className={styles.techBadge}>API Integration</span>
              </div>
              <a 
                href="https://www.theautomenders.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Visit Website →
              </a>
            </div>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/projects" className={styles.viewAllBtn}>
              View All Projects
              <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>
        </section>

        {/* Publications Section */}
        <section className={styles.section} id="publications">
          <h2 className={styles.sectionTitle}>Research & Publications</h2>
          <div className={styles.publicationsIntro}>
            <p className={styles.publicationsText}>
              As a PhD researcher at <strong>Universiti Putra Malaysia</strong>, my work focuses on 
              numerical and data-driven modeling for precision agriculture, computer vision applications 
              in smart farming, and technology integration for sustainable agricultural practices.
            </p>
          </div>
          <div className={styles.publicationsContainer}>
            <div className={styles.publicationCard}>
              <h3 className={styles.publicationTitle}>
                Finite element modelling of the mechanical behavior of papaya fruit under compression
              </h3>
              <p className={styles.publicationAuthors}>
                Aina, A. M., Harith, H. H., Hashim, N., & Shukery, M. F. M.
              </p>
              <p className={styles.publicationJournal}>
                Postharvest Biology and Technology, 226, 113565 (2025)
              </p>
              <a 
                href="https://doi.org/10.1016/j.postharvbio.2025.113565" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.publicationLink}
              >
                View Publication →
              </a>
            </div>

            <div className={styles.publicationCard}>
              <h3 className={styles.publicationTitle}>
                The influence of papaya shape on its mass model and mechanical properties
              </h3>
              <p className={styles.publicationAuthors}>
                Aina, A. M., Harith, H., Hashim, N., & Shukery, M. F. M.
              </p>
              <p className={styles.publicationJournal}>
                Journal of Food Process Engineering, 47(5), e14627 (2024)
              </p>
              <a 
                href="https://doi.org/10.1111/jfpe.14627" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.publicationLink}
              >
                View Publication →
              </a>
            </div>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/publications" className={styles.viewAllBtn}>
              View All Publications
              <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>
        </section>

        {/* Blog Section */}
        <div>
          <BlogSection />
          <div className={styles.viewAllContainer}>
            <Link href="/blog" className={styles.viewAllBtn}>
              View All Blog Posts
              <ArrowRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <section className={styles.section} id="contact">
          <h2 className={styles.sectionTitle}>Let's Build Something Together</h2>
          <div className={styles.contactContainer}>
            <p className={styles.contactText}>
              Whether you're interested in collaboration on research projects, software development opportunities, 
              or just want to discuss ideas at the intersection of technology and sustainability, I'd love to hear from you.
            </p>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <Briefcase size={32} />
                </div>
                <h3 className={styles.contactCardTitle}>Work Opportunities</h3>
                <p className={styles.contactCardText}>
                  Open to full-time, freelance, and consulting projects in software engineering and AI/ML
                </p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <FlaskConical size={32} />
                </div>
                <h3 className={styles.contactCardTitle}>Research Collaboration</h3>
                <p className={styles.contactCardText}>
                  Interested in interdisciplinary research in precision agriculture and computer vision
                </p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <Leaf size={32} />
                </div>
                <h3 className={styles.contactCardTitle}>Sustainability Projects</h3>
                <p className={styles.contactCardText}>
                  Passionate about tech solutions that create positive environmental impact
                </p>
              </div>
            </div>
            <div className={styles.hireSection}>
              <h3 className={styles.hireSectionTitle}>Hire Me For</h3>
              <div className={styles.roleCards}>
                <div className={styles.roleCard}>
                  <FlaskConical className={styles.roleIcon} />
                  <h4>Research Assistant</h4>
                  <p>Agricultural research, data analysis, and academic collaboration</p>
                  <a href="https://1drv.ms/w/c/1054ed53d0671c19/EVau1hHd9MhJkU8JXj-tRFgBMBlWMKgWQZ834RPRn84zPw?e=9hdWmD" target="_blank" rel="noopener noreferrer" className={styles.viewCvBtn}>
                    View Academic CV
                  </a>
                </div>
                <div className={styles.roleCard}>
                  <Code className={styles.roleIcon} />
                  <h4>Software Engineer</h4>
                  <p>Full-stack development, AI/ML integration, and system architecture</p>
                  <a href="https://1drv.ms/w/c/1054ed53d0671c19/EbcTrUmgYPpPsHJ0PRVUabsBWyzRqdsvmjVHD7bZk8jouA?e=ugJYx6" target="_blank" rel="noopener noreferrer" className={styles.viewCvBtn}>
                    View CV
                  </a>
                </div>
                <div className={styles.roleCard}>
                  <Lightbulb className={styles.roleIcon} />
                  <h4>Data Analyst</h4>
                  <p>Data processing, visualization, and insights generation</p>
                  <a href="https://1drv.ms/w/c/1054ed53d0671c19/EbcTrUmgYPpPsHJ0PRVUabsBWyzRqdsvmjVHD7bZk8jouA?e=ugJYx6" target="_blank" rel="noopener noreferrer" className={styles.viewCvBtn}>
                    View CV
                  </a>
                </div>
              </div>
              
              <div className={styles.connectSection}>
                <h3 className={styles.connectTitle}>Let's Connect</h3>
                <div className={styles.socialGrid}>
                  <a href="mailto:ademola.aina@outlook.com" className={styles.socialCard}>
                    <div className={styles.socialIcon}><Mail size={24} /></div>
                    <h4>Email</h4>
                    <p>Direct message for opportunities</p>
                  </a>
                  <a href="https://linkedin.com/in/ademola-aina-m" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                    <div className={styles.socialIcon}><Linkedin size={24} /></div>
                    <h4>LinkedIn</h4>
                    <p>Professional network & updates</p>
                  </a>
                  <a href="https://github.com/ade-mic" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                    <div className={styles.socialIcon}><Github size={24} /></div>
                    <h4>GitHub</h4>
                    <p>Code repositories & projects</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
