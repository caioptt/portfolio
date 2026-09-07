export interface Project {
  slug: string
  title: string
  image: string,
  shortDescription: string
  description: string
  technologies: string[]
  repository: string
  demo?: string
  featured: boolean
  highlights: string[]
}