import { useEffect, useState } from "react";

  const FACT_URL = "https://catfact.ninja/fact";

  interface Fact{
    fact: string;
    length: number;
  }
  
  export default function FactChange(){
    const [facts, setFact] = useState<Fact | null>(null);

    useEffect(() => {
      const fetchFact = async() => {
        const response = await fetch(FACT_URL);
        const facts = (await response.json()) as Fact;
        setFact(facts);
      }
      fetchFact();
    }, []);

     return (
      <>  
        <h1>Cat Facts</h1>
        <div className="fact-div">
          <p>{facts?.fact}</p>
        </div>
        <p className="tip">Reload the page for a new fact :3</p>
      </>
    )
  }
