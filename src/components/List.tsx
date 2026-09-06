import { useState } from "react"
import { Documentos } from "../data/documents"
import { LinksUtiles} from "../data/documents"

function PreguntasFrecuentes ({ busqueda }: { busqueda: string }) {
  const documentosFiltrados = Documentos.filter(doc =>
    doc.title.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="column">
      <h2>Preguntas frecuentes</h2>
      <div>
        {documentosFiltrados.map(doc=>(
          <div className="text-box" key={doc.id}>
            <a href={doc.url} target='_blank'>{doc.title}</a>
          </div>
        ))
      }
      </div>
    </div>
  )
}

function LinksUtilesComponente ({ busqueda }: { busqueda: string }) {
  const linksFiltrados = LinksUtiles.filter(link =>
    link.title.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="column">
      <h2>Links útiles</h2>
      <div>
        {linksFiltrados.map(link=>(
          <div className="text-box" key={link.id}>
            <a href={link.url} target='_blank'>{link.title}</a>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export function List () {
  const [busqueda, setBusqueda] = useState('')

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      {busqueda && (
        <button type="button" onClick={() => setBusqueda('')}>Limpiar</button>
      )}
    </div>
    <div className="columns-container">
      <PreguntasFrecuentes busqueda={busqueda} />
      <LinksUtilesComponente busqueda={busqueda} />
    </div>
    </>
  )
}
