import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Code, Lightbulb, Sprout, Briefcase, FlaskConical, Leaf, Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.svg"
              alt="Ademola Aina Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <div className={styles.logoText}>
              <p className={styles.logoTagline}>Ademola Aina</p>
            </div>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

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
            <h2 className={styles.heroSubtitle}>
              Bridging Research and Real-World Innovation
            </h2>
            <p className={styles.heroDescription}>
              PhD Researcher • Full-Stack Software Engineer • Builder of AI-Driven Solutions for Agriculture, Education, and Sustainability
            </p>
            <div className={styles.ctas}>
              <a href="#projects" className={styles.primaryBtn}>
                View Projects
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.section} id="about">
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                I'm <strong>Ademola Aina</strong>, a PhD candidate in Agricultural Process Engineering with a passion for 
                building intelligent, scalable software. My work blends computational modeling, machine learning, and 
                full-stack development to solve real-world problems—from postharvest fruit optimization to AI-powered 
                interview simulations.
              </p>
              
              <h3 className={styles.currentFocusTitle}>Current Focus</h3>
              <ul className={styles.focusList}>
                <li>
                  <GraduationCap className={styles.focusIcon} />
                  <span>Pursuing a PhD in precision agriculture and postharvest modeling</span>
                </li>
                <li>
                  <Code className={styles.focusIcon} />
                  <span>Building Afripub, a platform for African research visibility and collaboration</span>
                </li>
                <li>
                  <Lightbulb className={styles.focusIcon} />
                  <span>Previously led full-stack development on myInterviewerAI, an AI-powered interview simulation platform</span>
                </li>
                <li>
                  <Sprout className={styles.focusIcon} />
                  <span>Exploring sustainable tech integration through academic research and software innovation</span>
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
                <h3 className={styles.projectTitle}>myInterviewerAI</h3>
                <span className={styles.projectTag}>AI Platform</span>
              </div>
              <p className={styles.projectDescription}>
                AI-driven interview simulation with real-time feedback to boost candidate confidence and performance
              </p>
              <ul className={styles.projectFeatures}>
                <li>Led full-stack development of the platform</li>
                <li>Real-time AI-powered feedback system</li>
                <li>Machine learning assessment algorithms</li>
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
                  Live Demo →
                </a>
              </div>
            </div>

            {/* Afripub Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>Afripub</h3>
                <span className={styles.projectTag}>Research Platform</span>
              </div>
              <p className={styles.projectDescription}>
                A research visibility platform for African scholars to enhance collaboration and knowledge sharing
              </p>
              <ul className={styles.projectFeatures}>
                <li>Currently in development</li>
                <li>Connects researchers across Africa</li>
                <li>Publication database and collaboration tools</li>
                <li>Enhances visibility of African research</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>TypeScript</span>
                <span className={styles.techBadge}>Database</span>
                <span className={styles.techBadge}>Cloud Platform</span>
              </div>
              <div className={styles.projectLinks}>
                <span className={styles.comingSoon}>Coming Soon</span>
              </div>
            </div>

            {/* FarmCollab Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>FarmCollab</h3>
                <span className={styles.projectTag}>Marketplace</span>
              </div>
              <p className={styles.projectDescription}>
                Marketplace platform connecting farmers with buyers for seamless produce sales
              </p>
              <ul className={styles.projectFeatures}>
                <li>Direct farmer-to-buyer marketplace</li>
                <li>Real-time inventory management</li>
                <li>Secure transaction system</li>
                <li>Mobile-responsive design</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Firebase</span>
                <span className={styles.techBadge}>E-commerce</span>
                <span className={styles.techBadge}>Payment Integration</span>
              </div>
            </div>

            {/* ReUseNG Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>ReUseNG</h3>
                <span className={styles.projectTag}>Sustainability</span>
              </div>
              <p className={styles.projectDescription}>
                Sustainability-focused e-commerce landing page promoting reuse and circular economy
              </p>
              <ul className={styles.projectFeatures}>
                <li>Modern, conversion-optimized design</li>
                <li>Sustainability messaging and branding</li>
                <li>Responsive and accessible</li>
                <li>Fast, optimized performance</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>UI/UX</span>
                <span className={styles.techBadge}>SEO</span>
              </div>
            </div>

            {/* NRABC Website */}
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>NRABC Website</h3>
                <span className={styles.projectTag}>Web Platform</span>
              </div>
              <p className={styles.projectDescription}>
                Scalable React-based outreach platform for the National Research and Advisory Board
              </p>
              <ul className={styles.projectFeatures}>
                <li>Comprehensive information architecture</li>
                <li>Content management system</li>
                <li>Multi-page navigation structure</li>
                <li>Optimized for large-scale traffic</li>
              </ul>
              <div className={styles.projectTech}>
                <span className={styles.techBadge}>React</span>
                <span className={styles.techBadge}>CMS</span>
                <span className={styles.techBadge}>Scalability</span>
                <span className={styles.techBadge}>Performance</span>
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
        <BlogSection />

        {/* Contact Section */}
        <section className={styles.section} id="contact">
          <h2 className={styles.sectionTitle}>Let's Build Something Together</h2>
          <div className={styles.contactContainer}>
            <p className={styles.contactText}>
              Whether you're interested in collaboration on research projects, software development opportunities, 
              or just want to discuss ideas at the intersection of technology and sustainability—I'd love to hear from you.
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
            <div className={styles.contactLinks}>
              <a href="mailto:your.email@example.com" className={styles.contactBtn}>
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactBtnSecondary}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactBtnSecondary}>
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image
              src="/logo.svg"
              alt="Ademola Aina Logo"
              width={50}
              height={50}
            />
            <div className={styles.footerBrand}>
              <h3>Code & Cultivate</h3>
              <p>Ademola Aina</p>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerCopyright}>
            <p>© 2025 Ademola Aina. All rights reserved.</p>
            <p className={styles.footerTagline}>Bridging Research and Real-World Innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
