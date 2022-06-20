const users = require("../modals/dataSchema")
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'dbdtk77uc',
    api_key: "863992813938763",
    api_secret: 'CN6B_iWE_BXmRbeAX7tAXMJVFYc',
    secure: true
});

const postData = (req, res, next) => {
    const { name, email, mobile, edLevel1, edLevel2 } = req.body

    if (!name || !email || !mobile || !edLevel1 || !edLevel2) {
        console.log("You are not providing all fields")
    }
    // console.log(req)
    // const splitString = req.files.image.path.split('\\')
    // console.log(splitString[splitString.length - 1])

    const imageFile = req.files.file.path
    
    cloudinary.uploader.upload(imageFile, async function (error, result) {
        if (error) {
            console.log(error)
        }
        else {
            console.log(result)
            const data = new users({
                name, email, mobile, edLevel1, edLevel2,
                // image: splitString[splitString.length - 1]
                image: result.url
            })
            await data.save()
            res.status(201).json(data)
        }
    });
    try {

    } catch (error) {
        res.status(404).json({ message: error.message })
        // next(error)
    }
}


const getallData = async (req, res, next) => {
    try {
        const getUser = await users.find({})
        res.status(200).json(getUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const fileUpload = async (req, res, next) => {
    res.send("File uploaded successFully")
}
module.exports = { getallData, postData, fileUpload }