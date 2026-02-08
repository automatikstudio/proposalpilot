export interface Template {
  title: string;
  description: string;
  slug: string;
}

export interface IndustryData {
  name: string;
  slug: string;
  description: string;
  metaDescription: string;
  heroDescription: string;
  templates: Template[];
}

export const industries: IndustryData[] = [
  {
    name: "Consulting",
    slug: "consulting",
    description: "Professional proposal templates for management, strategy, and business consultants.",
    metaDescription: "Free consulting proposal templates. Win more clients with AI-powered proposals tailored for strategy, management, and business consulting engagements.",
    heroDescription: "Close more consulting deals with proposals that showcase your expertise and deliver measurable value to clients.",
    templates: [
      {
        title: "Strategy Consulting Proposal",
        description: "Win enterprise clients with comprehensive strategic advisory proposals including market analysis and implementation roadmaps.",
        slug: "strategy-consulting"
      },
      {
        title: "Management Consulting Proposal",
        description: "Professional proposals for operational improvements, organizational changes, and business transformation projects.",
        slug: "management-consulting"
      },
      {
        title: "Business Advisory Proposal",
        description: "Trusted advisor proposals covering financial planning, growth strategy, and business optimization.",
        slug: "business-advisory"
      },
      {
        title: "IT Consulting Proposal",
        description: "Technology advisory proposals for digital transformation, system integration, and IT strategy.",
        slug: "it-consulting"
      }
    ]
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "Winning proposal templates for marketing agencies, freelancers, and consultants.",
    metaDescription: "Free marketing proposal templates. Create professional proposals for SEO, social media, content marketing, and digital campaigns that win clients.",
    heroDescription: "Land more marketing clients with proposals that demonstrate ROI and creative excellence.",
    templates: [
      {
        title: "Digital Marketing Proposal",
        description: "Comprehensive digital marketing proposals covering SEO, PPC, social media, and content strategy.",
        slug: "digital-marketing"
      },
      {
        title: "Social Media Management Proposal",
        description: "Win social media retainers with proposals that outline content calendars, engagement strategies, and growth metrics.",
        slug: "social-media"
      },
      {
        title: "SEO Proposal",
        description: "Search engine optimization proposals with keyword research, technical audits, and ranking projections.",
        slug: "seo"
      },
      {
        title: "Content Marketing Proposal",
        description: "Content strategy proposals covering blog posts, whitepapers, videos, and thought leadership.",
        slug: "content-marketing"
      },
      {
        title: "Brand Strategy Proposal",
        description: "Branding and positioning proposals for startups and established companies seeking a refresh.",
        slug: "brand-strategy"
      }
    ]
  },
  {
    name: "Legal",
    slug: "legal",
    description: "Professional proposal templates for law firms, attorneys, and legal consultants.",
    metaDescription: "Free legal proposal templates. Create professional engagement letters and proposals for law firms covering litigation, corporate law, and legal consulting.",
    heroDescription: "Secure new clients with proposals that establish trust and clearly communicate your legal expertise.",
    templates: [
      {
        title: "Legal Services Proposal",
        description: "Comprehensive legal engagement proposals covering scope, billing structure, and client expectations.",
        slug: "legal-services"
      },
      {
        title: "Corporate Law Proposal",
        description: "Business and corporate legal services proposals for M&A, contracts, and compliance matters.",
        slug: "corporate-law"
      },
      {
        title: "Litigation Proposal",
        description: "Dispute resolution and litigation proposals with clear fee structures and case strategy.",
        slug: "litigation"
      },
      {
        title: "Legal Consulting Proposal",
        description: "Advisory proposals for legal consulting, regulatory compliance, and risk management.",
        slug: "legal-consulting"
      }
    ]
  },
  {
    name: "Accounting",
    slug: "accounting",
    description: "Professional proposal templates for accountants, CPAs, and financial advisors.",
    metaDescription: "Free accounting proposal templates. Win more clients with proposals for bookkeeping, tax services, audits, and financial advisory services.",
    heroDescription: "Grow your accounting practice with proposals that highlight your expertise and build client confidence.",
    templates: [
      {
        title: "Bookkeeping Services Proposal",
        description: "Monthly bookkeeping proposals covering transaction recording, reconciliation, and financial reporting.",
        slug: "bookkeeping"
      },
      {
        title: "Tax Services Proposal",
        description: "Tax preparation and planning proposals for individuals and businesses with clear pricing tiers.",
        slug: "tax-services"
      },
      {
        title: "Audit Proposal",
        description: "Financial audit proposals covering scope, methodology, timeline, and deliverables.",
        slug: "audit"
      },
      {
        title: "CFO Services Proposal",
        description: "Fractional CFO and financial advisory proposals for growing businesses.",
        slug: "cfo-services"
      }
    ]
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Winning proposal templates for real estate agents, brokers, and property managers.",
    metaDescription: "Free real estate proposal templates. Create professional listing presentations and property management proposals that win clients.",
    heroDescription: "Win more listings and management contracts with proposals that showcase your market expertise.",
    templates: [
      {
        title: "Listing Presentation",
        description: "Comprehensive listing proposals with market analysis, pricing strategy, and marketing plans.",
        slug: "listing-presentation"
      },
      {
        title: "Property Management Proposal",
        description: "Property management proposals covering tenant screening, maintenance, and financial reporting.",
        slug: "property-management"
      },
      {
        title: "Commercial Real Estate Proposal",
        description: "Commercial property proposals for leasing, sales, and investment advisory services.",
        slug: "commercial-real-estate"
      },
      {
        title: "Buyer Representation Proposal",
        description: "Buyer agent proposals outlining search strategy, negotiation approach, and transaction support.",
        slug: "buyer-representation"
      }
    ]
  },
  {
    name: "Construction",
    slug: "construction",
    description: "Professional proposal templates for contractors, builders, and construction companies.",
    metaDescription: "Free construction proposal templates. Win more projects with professional bids and proposals for residential and commercial construction.",
    heroDescription: "Land bigger construction projects with proposals that demonstrate expertise and build trust.",
    templates: [
      {
        title: "General Contractor Proposal",
        description: "Comprehensive construction proposals with scope, timeline, cost breakdown, and warranty terms.",
        slug: "general-contractor"
      },
      {
        title: "Renovation Proposal",
        description: "Home and commercial renovation proposals with detailed specifications and project phases.",
        slug: "renovation"
      },
      {
        title: "Commercial Construction Proposal",
        description: "Large-scale commercial project proposals with milestone payments and safety protocols.",
        slug: "commercial-construction"
      },
      {
        title: "Specialty Trade Proposal",
        description: "Proposals for electrical, plumbing, HVAC, and other specialty contractors.",
        slug: "specialty-trade"
      }
    ]
  },
  {
    name: "IT Services",
    slug: "it-services",
    description: "Professional proposal templates for IT companies, MSPs, and technology consultants.",
    metaDescription: "Free IT services proposal templates. Create professional proposals for managed services, software development, cybersecurity, and IT support.",
    heroDescription: "Win more technology contracts with proposals that speak to business outcomes and technical excellence.",
    templates: [
      {
        title: "Managed Services Proposal",
        description: "MSP proposals covering 24/7 support, monitoring, maintenance, and SLA guarantees.",
        slug: "managed-services"
      },
      {
        title: "Software Development Proposal",
        description: "Custom software development proposals with technical approach, timeline, and agile methodology.",
        slug: "software-development"
      },
      {
        title: "Cybersecurity Proposal",
        description: "Security assessment and implementation proposals covering audits, penetration testing, and compliance.",
        slug: "cybersecurity"
      },
      {
        title: "Cloud Migration Proposal",
        description: "Cloud transformation proposals for AWS, Azure, or GCP migrations with risk mitigation strategies.",
        slug: "cloud-migration"
      },
      {
        title: "IT Support Proposal",
        description: "Help desk and technical support proposals with response times and coverage options.",
        slug: "it-support"
      }
    ]
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Professional proposal templates for healthcare providers, consultants, and medical practices.",
    metaDescription: "Free healthcare proposal templates. Create compliant proposals for medical consulting, healthcare IT, and practice management services.",
    heroDescription: "Grow your healthcare business with proposals that prioritize patient outcomes and regulatory compliance.",
    templates: [
      {
        title: "Healthcare Consulting Proposal",
        description: "Healthcare advisory proposals covering operations, compliance, and revenue cycle management.",
        slug: "healthcare-consulting"
      },
      {
        title: "Medical Practice Management Proposal",
        description: "Practice management proposals covering billing, scheduling, and administrative services.",
        slug: "practice-management"
      },
      {
        title: "Healthcare IT Proposal",
        description: "Health technology proposals for EHR implementation, telemedicine, and HIPAA compliance.",
        slug: "healthcare-it"
      },
      {
        title: "Clinical Services Proposal",
        description: "Clinical staffing and services proposals for hospitals and healthcare facilities.",
        slug: "clinical-services"
      }
    ]
  },
  {
    name: "Education",
    slug: "education",
    description: "Professional proposal templates for educational institutions, tutors, and edtech companies.",
    metaDescription: "Free education proposal templates. Create winning proposals for training services, curriculum development, and educational consulting.",
    heroDescription: "Expand your educational impact with proposals that demonstrate learning outcomes and engagement.",
    templates: [
      {
        title: "Corporate Training Proposal",
        description: "Professional development proposals covering workshops, seminars, and ongoing training programs.",
        slug: "corporate-training"
      },
      {
        title: "Curriculum Development Proposal",
        description: "Educational content proposals for course design, lesson planning, and assessment creation.",
        slug: "curriculum-development"
      },
      {
        title: "Tutoring Services Proposal",
        description: "Private and group tutoring proposals with learning objectives and progress tracking.",
        slug: "tutoring-services"
      },
      {
        title: "EdTech Implementation Proposal",
        description: "Educational technology proposals for LMS deployment, digital tools, and online learning.",
        slug: "edtech"
      }
    ]
  },
  {
    name: "Nonprofit",
    slug: "nonprofit",
    description: "Professional proposal templates for nonprofit organizations, NGOs, and social enterprises.",
    metaDescription: "Free nonprofit proposal templates. Create compelling grant proposals, partnership requests, and program proposals for charitable organizations.",
    heroDescription: "Secure more funding and partnerships with proposals that communicate your mission and impact.",
    templates: [
      {
        title: "Grant Proposal",
        description: "Comprehensive grant applications covering program description, budget, and impact metrics.",
        slug: "grant-proposal"
      },
      {
        title: "Corporate Partnership Proposal",
        description: "Sponsorship and partnership proposals highlighting mutual benefits and brand alignment.",
        slug: "corporate-partnership"
      },
      {
        title: "Program Proposal",
        description: "New initiative proposals with goals, activities, timeline, and evaluation methods.",
        slug: "program-proposal"
      },
      {
        title: "Fundraising Campaign Proposal",
        description: "Capital campaign and fundraising proposals with donor benefits and recognition levels.",
        slug: "fundraising"
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find(i => i.slug === slug);
}
