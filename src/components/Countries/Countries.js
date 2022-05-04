import React from "react";
import { useState, useEffect } from "react";
import "./Countries.css";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);
    const [load, setLoad] = useState(false);
    const url = "https://restcountries.com/v3.1/all";

    const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setLoad(false)
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const countryData = (g) => {
        countries.forEach(con =>{
            if(g === con.name.official){
                setCountry(con);
                setLoad(true); 
            }
        })
    }
   
    window.addEventListener('DOMContentLoaded',() => {
        const searchUI = document.getElementById("searchUI");

        searchUI.addEventListener("keyup", (e) => {
            let value = e.target.value;
            let countryName = document.querySelectorAll(".country_name");
            countryName.forEach(name => {
                if(name.innerText.toLowerCase().includes(value.toLowerCase())){
                    name.parentElement.parentElement.style.display = 'flex';
                }else{
                    name.parentElement.parentElement.style.display = 'none';
                }
            })
        })
    })

    window.addEventListener('DOMContentLoaded', () => {
        const region = document.querySelectorAll(".region-list");
        region.forEach((element) => {
            element.addEventListener('click', async(t) => {
                if(document.querySelector(".chosen") && document.querySelector(".chosen").id === t.target.id){
                    fetchApi()
                    document.querySelector(".chosen").classList.remove('chosen');
                }else{
                    const regionFetch = await fetch(`https://restcountries.com/v3.1/region/${t.target.id}`);
                    const regionData = await regionFetch.json();
                    setCountries(regionData);
                    if(!document.querySelector(".chosen")){
                        document.getElementById(`${t.target.id}`).classList.toggle('chosen');
                    }else{
                        document.querySelector(".chosen").classList.remove('chosen');
                        document.getElementById(`${t.target.id}`).classList.toggle('chosen');
                    }
                }
            })
        })
    })

    const currenciesc = (f) => {
        let currenciesList;
        for(let key in f){
            currenciesList = f[key].name;
        }
        return currenciesList;
    }

    const languages = (l) => {
        let languagesList = '';
        for(let key in l){
            languagesList = l[key] + ",";
        }
        return languagesList.slice(0, languagesList.length-2);
    }

    const comm =  (n) =>{
        let d = String(n);
        let g = "";
        let j = d.length%3;
        let o = d.slice(j, d.length);
        if(j === 0){
            for(let i = 0; i < d.length; i++){
                if(i !== 0 && i % 3 === 0){
                    g+= "," + d[i];
                } else{
                    g+= d[i];
                }
            }
        }else{
            g += d.slice(0, j);
            for(let x = 0; x < o.length; x++){
                if(x % 3 ===0){
                    g+= "," + o[x]
                }else{
                    g+=o[x]
                }
                
            }
        }
        return g;
    }


    return (
            <>
                {load ? (
                    <div className="wrap">
                        <div className="btn-back" onClick={() => {setLoad(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width="16px" height="16px" viewBox="0 0 512 512">
                                <title>Arrow Back</title>
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
                            </svg>
                            <p>Back</p>
                        </div>
                        <div className="country">
                            <div className="country__flag">
                                <img src={country.flags.png} alt={`${country.name.official} flag`} />
                            </div>
                            <div className="country__text">
                                <div className="country__text__main-inf">
                                    <div className="country__text__main-inf__left-column">
                                        <div className="country__text__main-inf__name">
                                            <h2>{country.name.official}</h2>
                                        </div>
                                        <div className="country__text__main-inf__main">
                                            <p><span className="bold-text">Native Name:</span> {country.name.common}</p>
                                            <p><span className="bold-text">Population:</span> {comm(country.population)}</p>
                                            <p><span className="bold-text">Region:</span> {country.region}</p>
                                            <p><span className="bold-text">Sub Region:</span> {country.subregion}</p>
                                            <p><span className="bold-text">Capital:</span> {country.capital}</p>
                                        </div>
                                    </div>
                                    <div className="country__text__main-inf__right-column">
                                        <p><span className="bold-text">Top Level Domain:</span> {country.tld}</p>
                                        <p><span className="bold-text">Currencies:</span> {currenciesc(country.currencies)}</p>
                                        <p><span className="bold-text">Languages:</span> {languages(country.languages)}</p>
                                    </div>
                                </div>
                                <div className="country__text__border">
                                    <p>Border Countries:</p>
                                    <ul className="border-list">
                                        {country.borders ? (
                                            country.borders.map(border => {
                                                return <li>{border}</li>
                                                    })
                                                ):(
                                                    <p>No borders</p>
                                                )}
                                    </ul>
                                </div>
                            </div>
                         </div>
                    </div>
                ): (
                    <div className="content__main">
                        {countries.map(
                            ({ name, population, region, capital, flags }) => (
                                <div className="content__main__block" onClick={() => {countryData(name.official)}}>
                                    <div className="content__main__block__image">
                                        <img src={flags.png} />
                                    </div>
                                    <div className="content__main__block__text">
                                        <h2 className="country_name">{name.official}</h2>
                                        <div className="content__main__block__text__about">
                                            <p className="population"><span className="bold-text">Population:</span> {comm(population)}</p>
                                            <p className="region"><span className="bold-text">Region:</span> {region}</p>
                                            <p className="capital"><span className="bold-text">Capital:</span><span className="countryCapital">{capital}</span></p>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                    </div>
                )}
            </>
    )
}

export default Countries;
