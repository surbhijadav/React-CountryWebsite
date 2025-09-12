import countryData from "../api/countryData.json";

export const About = () => {

    return (
        <section className="section-about container">
            <h2 className="container-title">Here are the Intersting Facts
                <br/>
                we're proud of
            </h2>
            <div className="gradient-cards">

                {
                    countryData.map((data) =>{
                        const {id,name,capital,population,region,special,facts} = data;
                        return(
                            <div className="card" key={data.id}>
                            <div className="container-card bg-blue-box">
                                <p className="card-title">{data.name}</p>
                                <p>
                                    <span className="card-description">Capital:</span>
                                    {data.capital}
                                </p>
                                <p>
                                    <span className="card-description">Population:</span>
                                    {data.population}
                                </p>
                                <p>
                                    <span className="card-description">Region:</span>
                                    {data.region}
                                </p>
                                {/* <p>
                                    <span className="card-description">Special:</span>
                                    {data.special}
                                </p> */}
                                <p>
                                    <span className="card-description">Interesting Facts:</span>
                                    {data.facts}
                                </p>
                            </div>
                        </div>
                    
                        )
                    })
                }
             </div>
         </section>
              
    )
}