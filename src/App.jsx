import './App.css';
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";




export const App = () => {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } =useCatImage({fact})

    
    const handleClick = async () => {
        refreshFact();
    }

  return (
    <main>
        <h1>App De Gatitos</h1>
        <button onClick={handleClick}>Get new fact</button>
        <section>
            {fact ? <p>{fact}</p> : <p>Cargando...</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        </section>
    </main>
  )
}
