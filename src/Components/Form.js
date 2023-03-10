import React,{useState} from "react";
import '../assets/css/Form.css'

const Form =({newLocation})=>{
    const [city,setCity]=useState("")

    const onSubmit =(e)=>{
        e.preventDefault();
        console.log({city});

        if (city===""|| !city)return;
        newLocation(city)
    }
    return(
        <div className="conttainer">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">

                    <input type="text" className="form-control" placeholder= "Ciudad" onChange= {(e)=>setCity(e.target.value)}/>
                    <button type="submit" className="btn btn-primary input-group-text">Submit</button>

                </div>

            </form>
        </div>
    );
}

export default Form ;