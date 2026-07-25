export interface Project {
  slug: string;
  name: string;
  caption: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "hotel-ops",
    name: "DevSecOps for Hotel Operations SaaS",
    caption:
      "CI/CD pipelines, cloud infrastructure, and 24/7 security operations for a multi-property hospitality platform",
    image: "/projects/project-hotel-ops.png",
  },
  {
    slug: "healthcare",
    name: "Hospital Information System",
    caption:
      "Full-cycle development and secure delivery of a hospital management platform, built as the client's software development partner",
    image: "/projects/project-healthcare.png",
  },
  {
    slug: "erp",
    name: "Enterprise ERP Suite",
    caption:
      "End-to-end development, deployment, and managed operations of a manufacturing ERP delivered for an international client",
    image: "/projects/project-erp.png",
  },
  {
    slug: "lims",
    name: "Laboratory Information System",
    caption:
      "Designed, built, and securely delivered a medical lab platform for a healthcare software client",
    image: "/projects/project-lims.png",
  },
];
