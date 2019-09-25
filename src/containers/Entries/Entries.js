import React, { useState, useEffect } from "react";
import axios from "axios";
import EntriesCard from "./EntriesCard";

function Entries(){
    const [ability, setAbility] = useState();
    const [characteristic, setCharacteristic] = useState();

    useEffect(() =>{
        axios
        .get(`https://api.kanye.rest`)
        .then(res =>{
            console.log('Got pokes', res)
            setAbility(res.data.quote);
            // setCharacteristic(res.characteristic);
        })
        
        .catch(err =>{
            console.log("welp...", err)
        })
    },[])

    return(
        <div>
            <EntriesCard 
            ability = {ability}
            characteristic = {characteristic}
            />
        </div>
    );
}

export default Entries; 