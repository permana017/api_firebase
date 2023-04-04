

const express = require("express");
const userRouter = express();
const { FieldValue } = require('firebase-admin/firestore')
const {db} = require('../../config')
const userController = require("../controller/user.controller")



userRouter.get("/", userController.get)
userRouter.get("/:id", userController.getById)
userRouter.post("/", userController.add)
userRouter.patch("/:id", userController.edit)
userRouter.delete("/:id", userController.delete)


// userRouter.get('/', async (req, res) => {
//     const userRef = db.collection('users');
//     const snapshot = await userRef.get()
//     .then((result)=>(
//             res.status(200).send(result.docs.map((doc)=>{
//                 return ({id:doc.id, doc:doc.data()})
//             }))
//         ))
//     .catch((err)=>(
//         res.send(err)
//     ))
// })



// userRouter.get('/:id', async (req, res) => {
//     const id = req.params.id
//     console.log("id", id);
//     const userRef = db.collection('users').doc(id)
//     const doc = await userRef.get()
//     if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         return res.send({id:doc.id ,doc:doc.data()});
//       }
// })

// userRouter.post('/', async (req, res) => {
//     const { nama, email, address, phone } = req.body
//     const usereRef = db.collection('users').doc()
//     const res2 = await usereRef.set({
//         nama :  nama,
//         email : email,
//         address : address,
//         phone : phone
//     }, { merge: true })
//     res.status(200).send({message : "add data sucess"})
// })

// userRouter.patch('/:id', async (req, res) => {
//     const { nama, email, address, phone } = req.body
//     const id = req.params.id
//     const usereRef = db.collection('users').doc(id)
//     const res2 = await usereRef.set({
//         nama :  nama,
//         email : email,
//         address : address,
//         phone : phone
//     }, { merge: true })
//     res.status(200).send(req.body)
// })


// userRouter.delete('/:id', async (req, res) => {
//     const id = req.params.id
//     const usereRef = await db.collection('users').doc(id).delete()
//     res.status(200).send({message : "success deleted"})
// })


module.exports = userRouter