// content.js — shared content layer for Aridhaman website
// Public pages load content from localStorage (written by admin panel)

const DEFAULTS = {
  home: {
    hero_title: "Building something special. For the nation.",
    hero_body: "The website shall be updated with news regarding the company."
  },
  about: {
    title: "About Us",
    p1: "We are an organisation engaged in research and development across selected areas of technologies with cross-domain application potential, with an interest in forms of technical work that respond to evolving practical requirements while remaining attentive to the broader systems within which such technologies are conceived, developed, and applied.",
    p2: "Our work draws on technical inquiry, design, and interdisciplinary thinking as a means of shaping solutions that are intended not only to address immediate questions of utility, but also to remain adaptable to changing contexts over time.",
    p3: "Current efforts are directed toward establishing long-term areas of work, refining developmental priorities, and building the institutional and technical foundations necessary for sustained contribution."
  },
  careers: {
    title: "Careers",
    intro: "We are interested in working with people who value clarity, adaptability and thoughtful execution.",
    body: "Opportunities and role details will be listed here as they become available.",
    contact_note: "For career-related enquiries, you may write to:",
    contact_email: "anaadishrivastava@aridhaman.org",
    jobs: []
  }
};

function getContent(section) {
  try {
    const stored = localStorage.getItem('aridhaman_content_' + section);
    return stored ? JSON.parse(stored) : DEFAULTS[section];
  } catch(e) {
    return DEFAULTS[section];
  }
}
