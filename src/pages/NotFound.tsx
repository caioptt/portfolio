import {
  ArrowLeft
} from "lucide-react"

import { Link } from "react-router-dom"

export function NotFound() {

  return (
    <section className="not-found">

      <div>

        <span>
          404
        </span>

        <h1>
          Página não encontrada
        </h1>

        <p>
          Parece que essa rota não existe.
        </p>

        <Link
          to="/"
          className="button button-primary"
        >
          <ArrowLeft size={18} />
          Voltar para Home
        </Link>

      </div>

    </section>
  )
}