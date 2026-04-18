import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const images = {
  hero: new URL('../3.png', import.meta.url).href,
  portrait: new URL('../8.png', import.meta.url).href,
  profileFocus: new URL('../profile-focus.jpg', import.meta.url).href,
  htbProfile: new URL('../htb-profile.jpg', import.meta.url).href,
  contactArt: new URL('../contact-art.png', import.meta.url).href
};

const profile = {
  name: 'Videsh Ragul R',
  alias: 'Frey',
  role: 'Associate Security Consultant',
  tagline:
    'Associate Security Consultant focused on infrastructure penetration testing, Active Directory security, network security, and hands-on adversary simulation through Hack The Box.',
  location: 'Chennai, India',
  phone: '+91 7358901448',
  email: 'videshragul003@gmail.com',
  linkedin: 'https://linkedin.com/in/videsh-ragul-a17157220',
  github: 'https://github.com/VIDESHRAGUL',
  tryhackme: 'https://tryhackme.com/p/Frey003',
  hackthebox: 'https://app.hackthebox.com/users/2314112?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs'
};

const stats = [
  ['CEH', 'Certified Ethical Hacker'],
  ['CRTP', 'Certified Red Team Professional'],
  ['Hacker', 'Hack The Box Rank'],
  ['Platinum', 'Season 10 Tier']
];

const htbStats = [
  ['#838', 'Global Ranking'],
  ['34.42%', 'Content Ownership'],
  ['158', 'Platform Points'],
  ['57', 'Total Flags'],
  ['#844', 'Seasonal Ranking'],
  ['655', 'Season Points'],
  ['71.43%', 'Tier Progress'],
  ['22/26', 'Season Flags']
];

const experiences = [
  {
    company: 'Auriseg Consulting Pvt Ltd',
    type: 'Full-time / On-site',
    role: 'Associate Security Consultant',
    period: 'Jan 2025 - Present',
    body:
      'Working on infrastructure security assessments with a focus on Active Directory, network security, internal attack paths, misconfiguration discovery, and remediation-focused reporting. This role aligns closely with my current Hack The Box practice and strengthens my approach to practical enterprise security.',
    roles: [
      {
        title: 'Associate Security Consultant',
        period: 'Oct 2025 - Present',
        location: 'India / On-site',
        focus: 'Active Directory security, network security, infrastructure assessment, and client-ready reporting.'
      },
      {
        title: 'Security Engineer - Trainee',
        period: 'Jan 2025 - Nov 2025',
        location: 'Featherlite The Address, Chennai / On-site',
        focus: 'Built practical assessment discipline across enterprise infrastructure, Windows environments, internal network security, and documentation workflows.'
      }
    ]
  }
];

const certifications = [
  {
    short: 'CEH',
    name: 'Certified Ethical Hacker',
    issuer: 'EC-Council'
  },
  {
    short: 'CRTP',
    name: 'Certified Red Team Professional',
    issuer: 'Altered Security'
  }
];

const knowledge = [
  'Infrastructure penetration testing',
  'Active Directory enumeration and attack paths',
  'Network security assessment',
  'Web application security fundamentals',
  'Privilege escalation and misconfiguration analysis',
  'Security reporting and remediation communication',
  'Hack The Box machine practice'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frame = requestAnimationFrame(animate);
    };

    const enter = () => document.body.classList.add('cursor-active');
    const leave = () => document.body.classList.remove('cursor-active');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .panel, .cert-card').forEach((item) => {
      item.addEventListener('mouseenter', enter);
      item.addEventListener('mouseleave', leave);
    });
    animate();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('mousemove', move);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />

      <nav className="navbar">
        <a className="nav-logo" href="#hero" onClick={closeMenu}>
          VIDESH <span>RAGUL</span>
        </a>
        <button
          className="hamburger"
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#profile" onClick={closeMenu}>Profile</a>
          <a href="#hackthebox" onClick={closeMenu}>HTB</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Contact</a>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-art" style={{ backgroundImage: `url(${images.hero})` }} />
          <div className="scanline" />
          <div className="hero-copy">
            <div className="eyebrow">AKA {profile.alias} / CEH / CRTP</div>
            <h1>
              <span>VIDESH</span>
              <span className="outline">RAGUL</span>
            </h1>
            <p>{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn-primary" href="#experience">View Work</a>
              <a className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <img className="hero-figure" src={images.portrait} alt="Cybersecurity portfolio artwork" />
          <div className="scroll-hint">
            <span />
            Scroll
          </div>
        </section>

        <section className="stats" aria-label="Professional highlights">
          {stats.map(([value, label], index) => (
            <React.Fragment key={label}>
              <div className="stat-item reveal">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
              {index < stats.length - 1 && <div className="stat-divider" />}
            </React.Fragment>
          ))}
        </section>

        <section id="profile" className="profile-section">
          <div className="section-copy reveal">
            <div className="section-label">Profile</div>
            <h2>
              Security consultant with a practical offensive security mindset.
            </h2>
            <p>
              I focus on penetration testing, infrastructure security, and hands-on security research. My work centers on identifying attack paths, validating real risk, and communicating findings in a way that helps teams prioritize remediation.
            </p>
          </div>
          <div className="profile-grid">
            <div className="panel identity reveal">
              <img className="motion-media" src={images.profileFocus} alt="Frey profile artwork" />
              <div>
                <span>Current Focus</span>
                <strong>Hack The Box / Infrastructure Penetration Testing</strong>
              </div>
            </div>
            <div className="panel focus-panel reveal reveal-delay-1">
              <span>Professional Focus</span>
              <strong>Practical offensive security with clear reporting.</strong>
              <p>Focused on validating security weaknesses, explaining impact clearly, and turning technical findings into useful remediation guidance.</p>
              <p>Primary areas: infrastructure penetration testing, Active Directory attack paths, network security, and Hack The Box-driven practice.</p>
            </div>
            <div className="panel knowledge-panel reveal reveal-delay-2">
              <span>Knowledge Areas</span>
              {knowledge.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="hackthebox" className="htb-section">
          <div className="section-copy reveal">
            <div className="section-label">Hack The Box</div>
            <h2>Active platform practice focused on machines, flags, and attack-path discipline.</h2>
            <p>
              Hack The Box is where I actively sharpen enumeration, exploitation workflow, privilege escalation, and post-exploitation thinking. My current focus is consistent machine progress, clean methodology, and steady seasonal performance.
            </p>
          </div>
          <div className="htb-grid">
            <article className="htb-card reveal">
              <img className="motion-media" src={images.htbProfile} alt="Hack The Box focused artwork" />
              <div className="htb-overlay">
                <span>Avatar</span>
                <h3>Frey003</h3>
                <p>Hack The Box rank: Hacker / Current focus: machines, flags, and seasonal progress.</p>
                <a className="htb-link" href={profile.hackthebox} target="_blank" rel="noreferrer">
                  View Live HTB Profile
                </a>
              </div>
            </article>
            <div className="htb-metrics reveal reveal-delay-1">
              {htbStats.map(([value, label]) => (
                <div className="htb-metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-label">Experience</div>
          <h2 className="section-title reveal">
            Professional <span>Experience</span>
          </h2>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-card">
                  <div className="meta">{item.type}</div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.body}</p>
                  <div className="role-stack">
                    {item.roles.map((role) => (
                      <div className="role-item" key={`${role.title}-${role.period}`}>
                        <strong>{role.title}</strong>
                        <span>{role.period}</span>
                        <p>{role.location}</p>
                        <p>{role.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="cert-section">
          <div className="section-label">Certifications</div>
          <h2 className="section-title reveal">
            Core <span>Certifications</span>
          </h2>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <article className={`cert-card reveal reveal-delay-${index}`} key={cert.name}>
                <div>
                  <span>{cert.short}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-art reveal">
            <img className="motion-media" src={images.contactArt} alt="Cybersecurity contact artwork" />
          </div>
          <div className="contact-copy reveal reveal-delay-1">
            <div className="section-label">Contact</div>
            <h2>Available for security conversations and professional opportunities.</h2>
            <p>
              Based in {profile.location}. Open to conversations around infrastructure security, Active Directory assessments, network security, application security, and offensive security practice.
            </p>
            <div className="contact-list">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.tryhackme} target="_blank" rel="noreferrer">TryHackMe</a>
              <a href={profile.hackthebox} target="_blank" rel="noreferrer">Hack The Box</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>VIDESH <span>RAGUL</span></strong>
          <p>{profile.role} / CEH / CRTP / Hack The Box Player</p>
        </div>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.tryhackme} target="_blank" rel="noreferrer">TryHackMe</a>
          <a href={profile.hackthebox} target="_blank" rel="noreferrer">HTB</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
