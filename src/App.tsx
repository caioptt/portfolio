import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom"

import { Layout } from "./components/Layout"

import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ProjectDetails } from "./pages/ProjectDetails"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <HashRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route
            index
            element={<Home />}
          />

          <Route
            path="/projetos"
            element={<Projects />}
          />

          <Route
            path="/projetos/:slug"
            element={<ProjectDetails />}
          />

          <Route
            path="/sobre"
            element={<About />}
          />

          <Route
            path="/contato"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>

      </Routes>

    </HashRouter>
  )
}

export default App