import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useRef } from 'react';
////////////////////////////////////////////////////////
// import { StyleSheet, FlatList, ScrollView } from "react-native";
// import { View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";
// import Pin from "../components/Pin";
// import pins from "../assets/data/pins";

import "./normalize.css";
import "./modal.css";

const AddPin = ({handleCancle}) => {
    const [title, setTitle] = useState('')
    const [pin_image_blob, setImage] = useState('')
    // const [new_image, setUpload] = useState('')
    let new_image=new Image()
    // let pin_image_blob = null;  

// document.querySelector('#upload_img').addEventListener('change',
 const handleUpload=(event)=> {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = ()=> {
                // const new_image = new Image();
                // setUpload(new Image())
                new_image.src = reader.result;
                // pin_image_blob = reader.result;
                setImage(reader.result)

                new_image.onload =  ()=> {
                    const modals_pin = document.querySelector('.add_pin_modal .modals_pin');

                    new_image.classList.add('pin_max_width');

                    document.querySelector('.add_pin_modal .pin_image').appendChild(new_image);
                    document.querySelector('#upload_img_label').style.display = 'none';

                    modals_pin.style.display = 'block';

                    if (
                        new_image.getBoundingClientRect().width < new_image.parentElement.getBoundingClientRect().width ||
                        new_image.getBoundingClientRect().height < new_image.parentElement.getBoundingClientRect().height
                    ) {
                        new_image.classList.remove('pin_max_width');
                        new_image.classList.add('pin_max_height');
                    }

                   

                    modals_pin.style.opacity = 1;
                }
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    document.querySelector('#upload_img').value = '';
}
const exitUpload=()=>{
    const modals_pin = document.querySelector('.add_pin_modal .modals_pin');
    // if (
    //     new_image.getBoundingClientRect().width < new_image.parentElement.getBoundingClientRect().width ||
    //     new_image.getBoundingClientRect().height < new_image.parentElement.getBoundingClientRect().height
    // ) {
    //     new_image.classList.remove('pin_max_height');
    // }
    // else{
    //     new_image.classList.remove('pin_max_width');
    // }
    try {     
      new_image.classList.remove('pin_max_height');  
    } catch (error) {
        new_image.classList.remove('pin_max_width');
    }
    modals_pin.style.display='none'
    document.querySelector('#upload_img_label').style.display = 'block';
    // document.querySelector('.add_pin_modal .pin_image').removeChild(new_image);
    console.log(document.querySelector('.add_pin_modal .pin_image').innerHTML);
    document.querySelector('.add_pin_modal .pin_image').innerHTML=""
    document.querySelector('#upload_img').value = null;
    setImage(null)
    handleCancle()
}
// document.querySelector('.save_pin').addEventListener('click', 
const savePin=async () => {
    const pinData = {
        userName: 'Michal',
        // board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        link: document.querySelector('#pin_destination').value,
        base64: pin_image_blob,
        size: document.querySelector('#pin_size').value,
        uploadDate: new Date()
    }
    const url ='http://127.0.0.1:8000/api/users/uploadPin'
    const imagesFromApi = await axios.post(url,pinData)
    console.log(pinData);
}
    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container" onClick={exitUpload}>
                            <img src="https://www.citypng.com/public/uploads/preview/png-red-round-close-x-icon-31631915146jpppmdzihs.png" alt="cancel" className="pint_mock_icon" />
                        </div>
                    </div>

                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label">
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                        <img src="https://cdn-icons-png.flaticon.com/512/892/892692.png" alt="upload_img" className="pint_mock_icon" />
                                    </div>
                                    <div>Click to upload</div>
                                    <div>Recommendation: Use high-quality .jpg files less than 20MB</div>
                                </div>
                            </div>
                            <input type="file" name="upload_img" id="upload_img" onChange={handleUpload} />
                        </label>

                        <div className="modals_pin">
                            <div className="pin_image">
                                {/* <!-- <img src="" alt="pin_image"> --> */}
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                        <div className="save_from_site">Save From Site</div>
                    </div>
                </div>

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select name="pin_size" id="pin_size">
                                <option value="" disabled defaultValue>Select</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                            <div className="save_pin" onClick={savePin}>Save</div>
                        </div>
                    </div>

                    <div className="section2">
                        <input className="new_pin_input" type="text" placeholder='Add your title' id="pin_title" />
                        {/* <input placeholder="Add your title" type="text" className="new_pin_input" id="pin_title"> */}
                        <input placeholder="Tell everyone what your Pin is about" type="text" className="new_pin_input" id="pin_description" />
                        <input placeholder="Add a destination link" type="text" className="new_pin_input" id="pin_destination" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddPin

