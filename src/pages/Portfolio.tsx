import "./Portfolio.css"

import { About } from "./About"
import { Projects } from "./Projects"
import { Contact } from "./Contact"

export function Portfolio() {
  return (
    <div className="portfolio-page">

      <About />

      <Projects />

      <Contact />

    </div>
  )
}