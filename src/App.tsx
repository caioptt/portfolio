import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom"

import { Sidebar } from "./components/Sidebar"

import { Portfolio } from "./pages/Portfolio"
import { ProjectDetails } from "./pages/ProjectDetails"
import { NotFound } from "./pages/NotFound"

function App() {

  return (
    <HashRouter>

      <div className="app-layout">

        <Sidebar />

        <main className="app-content">

          <Routes>

            <Route
              path="/"
              element={<Portfolio />}
            />

            <Route
              path="/projetos/:slug"
              element={<ProjectDetails />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

      </div>

    </HashRouter>
  )
}

export default App