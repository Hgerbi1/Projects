const express = require("express")
const {MongoClient, ObjectId} = require("mongodb")
const multer = require("multer")
const upload = multer()
const sanitizeHTML = require('sanitize-html')

const fse = require('fs-extra')
const sharp = require('sharp')
const path = require('path')

fse.ensureDirSync(path.join("public", "uploaded-photos"))

const app = express()
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


let db;

app.get("/", async (req, res) =>{
    const allPatients = await db.collection("patient").find().toArray()
    res.render("home", {allPatients})
})

app.get("/api/patient", async (req, res) =>{
    const allPatients = await db.collection("patient").find().toArray()
    res.json(allPatients);
})

app.post("/create-patient", upload.single("photo"), ourCleanUp, async (req, res) =>{
    if(req.file){
        const photofilename = `${Date.now()}.jpg`
        await sharp(req.file.buffer).resize(844, 456).jpeg({quality: 60}).toFile(path.join("public", "uploaded-photos", photofilename))
        req.cleanData.photo = photofilename
    }
    const info = await db.collection("patient").insertOne(req.cleanData)
    const newPatient = await db.collection("patient").findOne({_id: new ObjectId(info.insertOne)})
    res.send(newPatient)
})

function ourCleanUp(req, res, next){
    if(typeof req.body.name != "string") req.body.name =""
    if(typeof req.body.photo != "string") req.body.photo =""
    if(typeof req.body._id != "string") req.body._id =""
    if(typeof req.body.pid != "string") req.body.pid =""
    if(typeof req.body.address != "string") req.body.address =""
    if(typeof req.body.bDate != "string") req.body.bDate =""
    if(typeof req.body.tel != "string") req.body.tel =""
    if(typeof req.body.phone != "string") req.body.phone =""
    if(typeof req.body.vDate1 != "string") req.body.vDate1 =""
    if(typeof req.body.producer1 != "string") req.body.producer1 =""
    if(typeof req.body.vDate2 != "string") req.body.vDate2 =""
    if(typeof req.body.producer2 != "string") req.body.producer2 =""
    if(typeof req.body.vDate3 != "string") req.body.vDate3 =""
    if(typeof req.body.producer3 != "string") req.body.producer3 =""
    if(typeof req.body.vDate4 != "string") req.body.vDate4 =""
    if(typeof req.body.producer4 != "string") req.body.producer4 =""
    if(typeof req.body.positiveDate != "string") req.body.positiveDate =""
    if(typeof req.body.negativeDate != "string") req.body.negativeDate =""

    req.cleanData ={
        name: sanitizeHTML(req.body.name.trim(), {allowedTags: [], allowedAttributes: {}}),
        pid: sanitizeHTML(req.body.pid.trim(), {allowedTags: [], allowedAttributes: {}}),
        address: sanitizeHTML(req.body.address.trim(), {allowedTags: [], allowedAttributes: {}}),
        bDate: sanitizeHTML(req.body.bDate.trim(), {allowedTags: [], allowedAttributes: {}}),
        tel: sanitizeHTML(req.body.tel.trim(), {allowedTags: [], allowedAttributes: {}}),
        phone: sanitizeHTML(req.body.phone.trim(), {allowedTags: [], allowedAttributes: {}}),
        vDate1: sanitizeHTML(req.body.vDate1.trim(), {allowedTags: [], allowedAttributes: {}}),
        producer1: sanitizeHTML(req.body.producer1.trim(), {allowedTags: [], allowedAttributes: {}}),
        vDate2: sanitizeHTML(req.body.vDate2.trim(), {allowedTags: [], allowedAttributes: {}}),
        producer2: sanitizeHTML(req.body.producer2.trim(), {allowedTags: [], allowedAttributes: {}}),
        vDate3: sanitizeHTML(req.body.vDate3.trim(), {allowedTags: [], allowedAttributes: {}}),
        producer3: sanitizeHTML(req.body.producer3.trim(), {allowedTags: [], allowedAttributes: {}}),
        vDate4: sanitizeHTML(req.body.vDate4.trim(), {allowedTags: [], allowedAttributes: {}}),
        producer4: sanitizeHTML(req.body.producer4.trim(), {allowedTags: [], allowedAttributes: {}}),
        positiveDate: sanitizeHTML(req.body.positiveDate.trim(), {allowedTags: [], allowedAttributes: {}}),
        negativeDate: sanitizeHTML(req.body.negativeDate.trim(), {allowedTags: [], allowedAttributes: {}})    
    }
    next()
}

async function start(){
    const client = new MongoClient("mongodb://127.0.0.1:27017/corona")
    await client.connect();
    db = client.db();
    app.listen(3000)
}

start()
