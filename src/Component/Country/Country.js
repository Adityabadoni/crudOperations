import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Country, State ,City} from "country-state-city";

 const CountryDemo=()=>{
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null)
    const [countries, setCountries] = useState(Country.getAllCountries());
    const [states, setStates] = useState([]);
    const [city , setCity] = useState([])

   const handleChangeCountry = (event) =>{
    const coun = event.target.value
    setSelectedCountry (coun)

    const allaStates = State.getStatesOfCountry(selectedCountry?.isoCode)
    setStates(allaStates)
    console.log(allaStates)
    setSelectedState(null)
   }

   const handleChangeState =(e)=>{
    setSelectedState(e.value)
   }
   useEffect(() => {
    if (selectedState && selectedCountry) {
        const allCities = City.getCitiesOfCountry(selectedState?.countryCode);
        console.log(allCities);
        setCity(allCities);
    }
}, [selectedState, selectedCountry]);

    // setState(states)
    
    // useEffect(() => { 
        
     
    // }, [country]);
  
  
    return(
        <>
        <div className="d-flex justify-content-center ">

        <div className="row mt-5 border p-4">
            <div className="col-md-4">
                <div className="flex justify-content-center">
                    <Dropdown
                        value={selectedCountry}
                        onChange={handleChangeCountry}
                        options={countries}
                        optionLabel="name"
                        placeholder="Select a country"
                        className="w-full md:w-14rem"
                    />
                </div>
            </div>
            <div className="col-md-4">
                <div className="flex justify-content-center">
                    <Dropdown
                        value={selectedState}
                        onChange={handleChangeState}
                        options={states}
                        optionLabel="name"
                        placeholder="Select a state"
                        className="w-full md:w-14rem"
                        disabled={!selectedCountry} // Disable if no country selected
                    />
                </div>
            </div>
         
                <div className="col-md-4">
                <div className=" flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e)=>setSelectedCity(e.value)} options={city} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>

                </div>
            
            </div>
         
    </div>
    </>
    )

 }
 export default CountryDemo