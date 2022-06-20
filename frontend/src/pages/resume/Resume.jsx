import './Resume.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Resume = () => {
    const [apidata, setApiData] = useState([])
    const [flag, setFlag] = useState(false)

    const data = () => {
        axios.get("https://resumeappmern.herokuapp.com/get").then((response) => {
            setApiData(response.data)
            console.log(response.data)
            setFlag(!flag)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        data()
    }, [flag])
    return (<>
       
            {apidata.map((ele, i) => {
                return (<>
                 <div className="full" style={{ marginTop: "20px" }}>
                    <div className="left">
                        <div className="image">
                            <img src=
                                {ele.image}
                                alt="gfg-logo"
                                style={{ width: "100px", height: "100px" }} />
                        </div>
                        <div className="Contact">
                            <h2>Contact</h2>


                            <p><b>Email id:</b>{ele.email}</p>

                            <p><b>Mobile no :</b>{ele.mobile}</p>

                        </div>
                        <div className="Language">
                            <h2>Language</h2>
                            <ul style={{marginTop:"10px"}}>
                                <li>English</li>
                                <li style={{marginTop:"10px"}}>Hindi</li>
                            </ul>
                        </div>
                        <div className="Hobbies">
                            <h2>Hobbies</h2>
                            <ul style={{marginTop:"10px"}}>
                                <li>Exploring new Languages</li>
                                <li style={{marginTop:"10px"}}>Coding</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="name">
                            <h1>Resume</h1>
                        </div>
                       
                    <div className="name">
                    <h4 style={{float:'left', marginTop:"20px"}}>Description:</h4>
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor obcaecati dolores voluptate harum quisquam excepturi nisi, facere eius repudiandae minus quia fuga! Ratione nam quam mollitia sint ut aspernatur obcaecati!</p>
                </div>
                <div className="name">
                            <h4 style={{float:'left', marginTop:"20px"}}>Description:</h4>
                          <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor obcaecati dolores voluptate harum quisquam excepturi nisi, facere eius repudiandae minus quia fuga! Ratione nam quam mollitia sint ut aspernatur obcaecati!</p>
                        </div>
                    </div>
        </div> 
                </>)
            })}                                                                                                </>

    )
}

export default Resume
