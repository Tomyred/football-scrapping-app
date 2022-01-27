import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const url = "https://football-web-scraping.herokuapp.com/fbpositions"

  const getData = async() => {
    const res = await fetch(url);
    const jsonRes = await res.json();
    console.log(jsonRes.data)
    setData(jsonRes.data)
  }

  useEffect(() => {

    getData()

  }, []);
  
  return (
    <div className="container">
     <h1 className="d-flex justify-content-center bg-info">
        <span>Tabla de Posiciones de la Primera División de Argentina</span>
    </h1>
    <div className="w-100 p-3 ">
            <h2 className="text-center" >Liga Profesional</h2>
            <table className="w-100 p-3 m-300">
                <thead>
                    <tr className="bg-secondary">
                        <th>Pos</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>G</th>
                        <th>E</th>
                        <th>P</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DG</th>
                        <th>Pts</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map(element => {
                    const className = element.position <= 4 ? "bg-success" : element.position >= data.length -3 ? "bg-danger" : ""
                    return(
                      <tr className={className} >
                        <td>
                          {element.position}
                        </td>
                        <td>
                          <img src={element.teamImg} alt={element.team} />
                          {element.team}
                        </td>
                        <td>
                          {element.gamesPlayed}
                        </td>
                        <td>
                          {element.wins}
                        </td>
                        <td>
                          {element.ties}
                        </td>
                        <td>
                          {element.loses}
                        </td>
                        <td>
                          {element.gf}
                        </td>
                        <td>
                          {element.gc}
                        </td>
                        <td>
                          {element.dg}
                        </td>
                        <td>
                          {element.score}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
            </table>
        </div>

    </div>
   
  );
}

export default App;
