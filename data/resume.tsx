import { EDUCATION } from "@/data/education"
import { PERSON } from "@/data/person"
import { SE_PORTFOLIO } from "@/data/portfolios/se"
import { seProjectsFromShared, seWorkFromShared } from "@/lib/portfolio-data"

/** SE-facing aggregator — preserves the previous `DATA` shape for apex imports. */
export const DATA = {
  name: PERSON.name,
  initials: PERSON.initials,
  url: SE_PORTFOLIO.url,
  location: PERSON.location,
  locationLink: PERSON.locationLink,
  description: SE_PORTFOLIO.description,
  summary: SE_PORTFOLIO.summary,
  avatarUrl: PERSON.avatarUrl,
  skills: SE_PORTFOLIO.skills,
  contact: PERSON.contact,
  work: seWorkFromShared(),
  education: EDUCATION,
  projects: seProjectsFromShared(),
  hackathons: [] as const,
}
