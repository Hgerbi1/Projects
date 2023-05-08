import Axios from "axios"
import React, { useState, useRef } from "react"

function CreateNewForm(props) {
  const [name, setName] = useState("")
  const [pid, setPid] = useState("")
  const [address, setAddress] = useState("")
  const [bDate, setBdate] = useState("")
  const [tel, setTel] = useState("")
  const [phone, setPhone] = useState("")
  const [vDate1, setVdate1] = useState("")
  const [producer1, setProducer1] = useState("")
  const [vDate2, setVdate2] = useState("")
  const [producer2, setProducer2] = useState("")
  const [vDate3, setVdate3] = useState("")
  const [producer3, setProducer3] = useState("")
  const [vDate4, setVdate4] = useState("")
  const [producer4, setProducer4] = useState("")
  const [positiveDate, setPositiveDate] = useState("")
  const [negativeDate, setNegativeDate] = useState("")

  const [file, setFile] = useState("")
  const CreatePhotoField = useRef()

  async function submitHandler(e) {
    e.preventDefault()
    const data = new FormData()
    data.append("photo", file)

    data.append("name", name)
    data.append("pid", pid)
    data.append("address", address)
    data.append("bDate", bDate)
    data.append("tel", tel)
    data.append("phone", phone)

    data.append("vDate1", vDate1)
    data.append("producer1",producer1)
    data.append("vDate2", vDate2)
    data.append("producer2",producer2)
    data.append("vDate3", vDate3)
    data.append("producer3",producer3)
    data.append("vDate4", vDate4)
    data.append("producer4",producer4)

    data.append("positiveDate", positiveDate)
    data.append("negativeDate",negativeDate)

    setFile("")
    setName("")
    setPid("")
    setAddress("")
    setBdate("")
    setTel("")
    setPhone("")
    setVdate1("")
    setProducer1("")
    setVdate2("")
    setProducer2("")
    setVdate3("")
    setProducer3("")
    setVdate4("")
    setProducer4("")
    setPositiveDate("")
    setNegativeDate("")  

    CreatePhotoField.current.value = ""
    const newPhoto = await Axios.post("/create-patient", data, { headers: { "Content-Type": "multipart/form-data" } })
    props.setPatient(prev => prev.concat([newPhoto.data]))
  }

  return (
    <form className="p-3 bg-success bg-opacity-25 mb-5 w-40" onSubmit={submitHandler}>
      <div className="mb-2">
        <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
      </div>

      <div className="mb-2 row">
        <label>פרטים אישיים:</label>
        <div className="col">
          <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="שם לקוח" />
          <input onChange={e => setPid(e.target.value)} value={pid} type="number" className="form-control" placeholder="תעודת זהות" />
        </div>
        <div className="col">
          <input onChange={e => setAddress(e.target.value)} value={address} type="text" className="form-control" placeholder="כתובת " />
          <input onChange={e => setBdate(e.target.value)} value={bDate} type="date" className="form-control" placeholder=" תאריך לידה" />
        </div>
        
        <div className="col">
          <input onChange={e => setTel(e.target.value)} value={tel} type="text" className="form-control" placeholder="טלפון " />
          <input onChange={e => setPhone(e.target.value)} value={phone} type="text" className="form-control" placeholder=" פלאפון" />
        </div>
      </div>
        
      <div className="mb-2 row">
      <label>חיסון ראשון:</label>
        <div className="col">
          <input onChange={e => setVdate1(e.target.value)} value={vDate1} type="date" className="form-control" placeholder=" חיסון ראשון" />
        </div> 
        <div className="col">
          <input onChange={e => setProducer1(e.target.value)} value={producer1} type="text" className="form-control" placeholder=" יצרן" />
        </div>
      </div>

      <div className="mb-2 row">
        <label>חיסון שני:</label>
        <div className="col">
          <input onChange={e => setVdate2(e.target.value)} value={vDate2} type="date" className="form-control" placeholder=" חיסון שני" />
        </div>
        <div className="col">
          <input onChange={e => setProducer2(e.target.value)} value={producer2} type="text" className="form-control" placeholder=" יצרן" />
        </div>
      </div>

      <div className="mb-2 row">
        <label>חיסון שלישי:</label>
        <div className="col">
          <input onChange={e => setVdate3(e.target.value)} value={vDate3} type="date" className="form-control" placeholder="חיסון שלישי " />
        </div> 
        <div className="col">
          <input onChange={e => setProducer3(e.target.value)} value={producer3} type="text" className="form-control" placeholder=" יצרן" />
        </div>
      </div>

      <div className="mb-2 row">
        <label>חיסון רביעי:</label>
        <div className="col">
          <input onChange={e => setVdate4(e.target.value)} value={vDate4} type="date" className="form-control" placeholder="חיסון רביעי " />
        </div>
        <div className="col">
          <input onChange={e => setProducer4(e.target.value)} value={producer4} type="text" className="form-control" placeholder="יצרן" />
        </div>
      </div>

      <div className="mb-2 row">
        <div className="col">
          <label>תוצאה חיובית: </label>
          <input onChange={e => setPositiveDate(e.target.value)} value={positiveDate} type="date" className="form-control" placeholder="חיובי " />
        </div>
        <div className="col">
          <label>תוצאה שלילית:</label>  
          <input onChange={e => setNegativeDate(e.target.value)} value={negativeDate} type="date" className="form-control" placeholder="שלילי " />
        </div>
      </div>

      <button className="btn btn-success">צור לקוח חדש</button>
    </form>
  )
}

export default CreateNewForm
