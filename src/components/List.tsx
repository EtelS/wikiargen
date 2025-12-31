import { Documentos } from "../data/documents"

export function List () {
  console.log(Documentos)
  return (
    <>
    <h2>Preguntas frecuentes</h2>
    <div>
      {Documentos.map(doc=>(
        <div key={doc.id}>
          <a href={doc.url} target='_blank'>{doc.title}</a>
        </div>
      ))
    }
    </div>
    </>
  )
}
