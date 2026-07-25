export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
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
