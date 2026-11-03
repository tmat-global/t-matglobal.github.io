export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  logo?: string;
  logoAlt?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Prof. Bhikane",
    role: "Principal, Saksham English School",
    quote:
      "T-Mat Global has done an excellent job developing and maintaining our school's website. Their team is responsive, professional, and quick to address our requirements. Whenever we request updates, they ensure the changes are implemented within approximately 9 hours. We truly appreciate their consistent support, timely delivery, and the positive working relationship we have built with their team.",
    logo: "/clients/client-saksham-english-school.jpg",
    logoAlt: "Saksham English School logo",
  },
  {
    name: "Michael Chen",
    role: "VP of Engineering",
    quote:
      "T-Mat Global embedded security into our pipeline without slowing down a single release. Our audit prep time dropped from weeks to days.",
  },
  {
    name: "Sarah Al-Mansoori",
    role: "Chief Technology Officer",
    quote:
      "Their 24/7 managed DevSecOps team feels like an extension of our own. Incidents get caught and resolved before our team even wakes up.",
  },
  {
    name: "James Whitfield",
    role: "Head of Platform Engineering",
    quote:
      "We went from quarterly vulnerability scans to continuous, risk-prioritized remediation. The difference in our security posture has been night and day.",
  },
];
