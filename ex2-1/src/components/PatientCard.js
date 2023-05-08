
import React from "react"

function PatientCard(props) {

  return (
    <div className="card">
      <div className="our-card-top">
        <img src={props.photo ? `/uploaded-photos/${props.photo}` : "/fallback.png"} className="card-img-top" alt={`${props.pid} `} />
      </div>

      <div className="card-body">
        <h4>{props.name}</h4>
        <p className="text-muted small"> ת''ז: {props.pid} </p>   
        <p className="text-muted small"> כתובת: {props.address} </p>   
        <p className="text-muted small">תאריך לידה: {props.bDate}</p>   
        <p className="text-muted small">טלפון: {props.tel}</p>   
        <p className="text-muted small">פלאפון: {props.phone}</p>   
        <p className="text-muted small"> חיסון ראשון: {props.vDate1},  יצרן:  {props.producer1} </p>   
        <p className="text-muted small"> חיסון שני: {props.vDate2},  יצרן:  {props.producer2} </p>   
        <p className="text-muted small"> חיסון שלישי: {props.vDate3},  יצרן:  {props.producer3} </p>   
        <p className="text-muted small"> חיסון רביעי: {props.vDate4},  יצרן:  {props.producer4} </p>    
        <p className="text-muted small">חיובי:  {props.positiveDate}</p>  
        <p className="text-muted small"> שלילי: {props.negativeDate}</p>  

      </div>
    </div>
  )
}

export default PatientCard

