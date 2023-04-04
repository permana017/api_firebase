const {FieldValue} = require('firebase-admin/firestore')
const {db} = require('../../config')

const userController = {
    get: async (req, res) => {
        const userRef = db.collection('users');
        const snapshot = await userRef
            .get()
            .then((result) => (res.status(200).send(result.docs.map((doc) => {
                return ({id: doc.id, doc: doc.data()})
            }))))
            .catch((err) => (res.send(err)))
        },
    getById: async (req, res) => {
        const id = req.params.id
        const userRef = db
            .collection('users')
            .doc(id)
        const doc = await userRef.get()
        if (!doc.exists) {
            return res.status(500).send({message: 'No such document!'});
        } else {
            return res.status(200).send({id: doc.id, doc: doc.data()});
        }
    },

    add: async (req, res) => {
        const {nama, email, address, phone} = req.body
        const usereRef = db
            .collection('users')
            .doc()
        const res2 = await usereRef
            .set({
                nama: nama,
                email: email,
                address: address,
                phone: phone
            }, {merge: true})
            .then((result) => {
                return res
                    .status(200)
                    .send({message: "add data sucess"})
            })
            .catch((err) => {
                return res
                    .status(500)
                    .send({message: err})
            })
        },

    edit: async (req, res) => {
        const {nama, email, address, phone} = req.body
        const id = req.params.id
        const usereRef = db
            .collection('users')
            .doc(id)
        const res2 = await usereRef
            .set({
                nama: nama,
                email: email,
                address: address,
                phone: phone
            }, {merge: true})
            .then((result) => {
                return res
                    .status(200)
                    .send(req.body)
            })
            .catch((err) => {
                return res
                    .status(500)
                    .send({message: err})
            })
        },

    delete: async (req, res) => {
        const id = req.params.id
        const usereRef = await db
            .collection('users')
            .doc(id)
            .delete()
            .then((result) => {
                return res
                    .status(200)
                    .send({message: "success deleted"})
            })
            .catch((err) => {
                return res
                    .status(500)
                    .send({message: err})
            })
        }
}

module.exports = userController