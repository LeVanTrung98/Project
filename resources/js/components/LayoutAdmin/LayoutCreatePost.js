import React, { useState, useEffect, useCallback } from 'react'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import * as common from './../../common';
import axios from 'axios';
import * as commonAlert from './../Common/ShowAlert';

export default function LayoutCreatePost() {
    const [car, setCar] = useState([]);
    const [isSubmit, setIsSubmit] = useState(0);
    const [values, setValues] = useState({
        title: '',
        content: '',
        note: '',
        car: ''
    });
    const [image, setImage] = useState('');

    const onChangeInput = (event) => {
        event.preventDefault();
        let { value } = event.target;
        setValues({ ...values, [event.target.name]: value });
    }

    const onClickButtonSend = async (event) => {
        event.preventDefault();
        let data = {
            title: values.title,
            content: values.content,
            note: values.note,
            car: values.car,
            img : image
        };
        await axios.post(`${common.HOST}admin/create-post`, data)
            .then(res => { setIsSubmit(isSubmit + 1), res.data[0].result == 'true' ? commonAlert.showAlert('success', 'thêm mới thành công!') : commonAlert.showAlert('error', ' thêm mới thất bại!') }
            )
            .catch(err => { throw err; })
    }

    // const setFile = ((e) => {
    //     let file = e.target.files;
    //     let reader = new FileReader();
    // 	reader.readAsDataURL(file[0]);

    // 	reader.onload = (e) => {
    //         console.log(e.target.result)
    // 		// this.setState({
    //     	// 	avarta:e.target.result
    //     	// });
    // 	}

    // });

    const fetchListCar = (async () => {
        let parent_id = JSON.parse(sessionStorage.getItem('tokens')).Parent_id ? JSON.parse(sessionStorage.getItem('tokens')).Parent_id : JSON.parse(sessionStorage.getItem('tokens')).Admin_ID;
        await axios.get(`${common.HOST}admin/get-list-car-post/${parent_id}`)
            .then(res => { res.data ? setCar(res.data) : null })
            .catch(err => { throw err; })
    });

    const onChangeImage = (async (event) => {
        event.preventDefault();
        let files = event.target.files;
        let reader = new FileReader();


        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setImage(e.target.result)
        }

    });

    useEffect(() => {
        fetchListCar();
    }, [isSubmit]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-10 col-md-9 col-lg-5 text-center">
                    {/* form tạo post */}
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <h5 className="my-2 text-center">Thêm Bài Viết</h5>
                            </div>
                            <div className="form-group d-flex flex-column">
                                <TextField
                                    // error       = { values.errName ? true : false }
                                    type="search"
                                    variant="outlined"
                                    name="title"
                                    label={values.errName ? "Tiêu đề không đúng định dạng!" : "Tiêu Đề *"}
                                    onChange={onChangeInput}
                                />
                            </div>
                            <div className="form-group d-flex flex-column">
                                <TextField
                                    label="Nội Dung * "
                                    type="text"
                                    step={1}
                                    variant="outlined"
                                    name="content"
                                    onChange={onChangeInput}
                                />
                            </div>

                            <div className="form-group d-flex flex-column">
                                <TextField
                                    label="Ghi Chú"
                                    type="text"
                                    variant="outlined"
                                    name="note"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <div className="form-group d-flex flex-column">
                                <FormControl variant="outlined" >
                                    <InputLabel htmlFor="outlined-age-native-simple">Loại Xe</InputLabel>
                                    <Select
                                        native
                                        // value       = { values.category_car   }
                                        onChange={onChangeInput}
                                        name="car"
                                        label="Loại Xe"
                                    >
                                        <option aria-label="None" value="" />
                                        {
                                            car.map((value, key) => {
                                                return <option value={value.Passenger_Car_Id} key={key}>{`${value.Car_Number} - ${value.Passenger_Car_Name}`}</option>
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="form-group d-flex flex-column">
                                <TextField
                                    type="file"
                                    variant="outlined"
                                    name="files"
                                    onChange={onChangeImage}
                                />
                            </div>
                            {
                                image && (
                                    <div className="form-group d-flex flex-column">
                                        <img src={image} alt="image" className="card-img" />
                                    </div>
                                )
                            }

                            {/* <div className="form-group d-flex flex-column">
                        <input type="file" onChange = { setFile } name="file-image" placeholder="select image" />
                    </div> */}
                            <Button
                                disabled={values.title && values.content && values.car ? false : true}
                                variant="contained"
                                color="primary"
                                endIcon={<Icon>send</Icon>}
                                onClick={onClickButtonSend}
                            >
                                Lưu
                            </Button>

                        </div>
                    </div>
                    {/* end form */}
                </div>
            </div>
        </div>
    )
}
