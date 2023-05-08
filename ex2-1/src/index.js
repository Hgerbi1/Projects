import React, {useState, useEffect} from "react"
import {createRoot} from "react-dom/client"
import Axios from "axios"
import CreateNewForm from "./components/CreateNewForm"
import PatientCard from "./components/PatientCard"

function App(){

    const [patient, setPatient] = useState([])

    useEffect(() =>{
        async function go(){
            const response = await Axios.get("/api/patient")
            setPatient(response.data)
        }
        go()
    }, [])

    return(
        <div className="container">
            <CreateNewForm setPatient={setPatient} />
            <p>מאגר לקוחות:</p>
            <div className="animal-grid">
                {patient.map(function (p){
                    return <PatientCard key={p._id}
                                        name= {p.name}
                                        pid={p.pid}
                                        address={p.address}
                                        bDate={p.bDate}
                                        tel={p.tel}
                                        phone={p.phone}
                                        vDate1={p.vDate1} producer1={p.producer1} 
                                        vDate2={p.vDate2} producer2={p.producer2}
                                        vDate3={p.vDate3} producer3={p.producer3}
                                        vDate4={p.vDate4} producer4={p.producer4}
                                        positiveDate={p.positiveDate}
                                        negativeDate={p.negativeDate}  
                                        photo={p.photo}
                                        id={p._id}
                                        />
                })}
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)