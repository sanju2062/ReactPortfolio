import { useState } from "react";
import styled from 'styled-components';
import "./Contact.css";
import SocialMediaIcons from "../SocialMediaIcons";
import db from "../../firebase/config"
import Loading from "../loading";

const StyledContact = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media(max-width:700px){
        .social-media-links-container{
            margin-top:40px;
        }
    }
    .social-media-links-container{
        margin-top:40px;
    }
    h1{
        color:#4c4ca9;
    }
    .input-fields{
        display:flex;
        flex-direction:column;
        .btn-div{
            display:flex;
            justify-content:center;
            align-items:center;
            .btn{
                height:45px;
                width:105px;
                margin:20px;
                font-size:18px;
                font-weight:bold;
                color:#aaa;
                background:#4c4ca9;
                border:none;
                :hover{
                    background:#4c6caf;
                }
                :active{
                    background:#2c4ca9;
                }
            }
        }
    }
`;

const Contact = () => {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const submit = async (e) => {
        setisLoading(true)
        const data = {
            "Name": name,
            "MobileNumber": mobileNumber,
            "Email": email,
            "Description": about,
        }
        try {
            await db.collection("UserData").add(data);
            setName("")
            setMobileNumber("")
            setEmail("")
            setAbout("")
            setisLoading(false)
        } catch (e) {
            console.log(e)
            setName("")
            setMobileNumber("")
            setEmail("")
            setAbout("")
            setisLoading(false)
        }
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ data: data })
        // };
        // await fetch("http://127.0.0.1/api", requestOptions)
        //     .then(response => response.text())
        //     .then(data => console.log(data));
    }
    return (
        <StyledContact>
            <title>Sanju | Contact</title>
            {isLoading?<Loading />:null}
            <h1> Contact </h1>
            <div className="input-fields">
                <label class="custom-field one">
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    <span class="placeholder">Name</span>
                </label>
                <label class="custom-field one">
                    <input type="text" required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    <span class="placeholder">Mobile Number</span>
                </label>
                <label class="custom-field one">
                    <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span class="placeholder">Email</span>
                </label>
                <label class="custom-field one">
                    <input type="text" required value={about} onChange={(e) => setAbout(e.target.value)} />
                    <span class="placeholder">About</span>
                </label>
                <div className="btn-div">
                    <button className="btn" onClick={submit}>Submit</button>
                </div>
            </div>
            <div className="social-media-links-container">
                <SocialMediaIcons />
            </div>
        </StyledContact>
    )
}

export default Contact;