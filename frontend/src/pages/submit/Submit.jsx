import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Submit = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        edLevel1: "",
        edLevel2: ""
    })
    const [file,setFile] = useState("")
     const navigate = useNavigate()

    const onChangeHandeler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

const onFileChange  = (e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])
}

console.log(file)
    const handleOnClick = () => {

        const formdata = new FormData()
        formdata.append("name", state.name)
        formdata.append("email", state.email)
        formdata.append("mobile", state.mobile)
        formdata.append("edLevel1", state.edLevel1)
        formdata.append("edLevel2", state.edLevel2)
        formdata.append("file", file)

        const configAxios = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post("https://resumeappmern.herokuapp.com/", formdata, configAxios).then((response) => {
            console.log(response.data)
            setState({
                name: "",
                email: "",
                mobile: "",
                edLevel1: "",
                edLevel2: ""
            })
            navigate("/get")
        }).catch(err => {
            console.log(err)
        })
    }

    return (<>
        <h1>Enter your details for your CV</h1>
        <TextField
            id="outlined-number"
            label="Name"
            type="text"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onChangeHandeler}
            name="name"
            value={state.name}
        /><br />
        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onChangeHandeler}
            name="mobile"
            value={state.number}
        /><br />
        <TextField
            id="outlined-number"
            label="email"
            type="text"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onChangeHandeler}
            value={state.email}
            name="email"
        /><br />
        <TextField
            id="outlined-number"
            label="Education Level 1"
            type="text"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onChangeHandeler}
            name="edLevel1"
            value={state.edLevel1}
        /><br />
        <TextField
            id="outlined-number"
            label="Education Level 2"
            type="text"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onChangeHandeler}
            name="edLevel2"
            value={state.edLevel2}
        /><br />
        <input
            type="file"
            style={{ marginTop: "15px", width: "40%" }}
            onChange={onFileChange}
            name="files"
        /><br />
        <Button variant='contained'
            style={{ marginTop: "15px", width: "40%" }}
            onClick={handleOnClick}
        >
            Submit
        </Button>
    </>
    )
}

export default Submit
