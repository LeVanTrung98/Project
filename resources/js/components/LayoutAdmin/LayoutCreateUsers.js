import React, { useState, useEffect, useCallback } from 'react'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';
import axios from 'axios';
import * as common from './../../common';
import * as CommonAlert from './../Common/ShowAlert';
import md5 from 'md5';
export default function LayoutCreateUsers() {
    const [values, setValues] = useState({
        phone: '',
        name: '',
        sex: "1",
        address: '',
        role   : [],
        role_id: '',
        dateOffBirth: moment(new Date()).format('YYYY-MM-DD'),
        errName: '',
        errPhone: '',
        errAddress: '',
        errDate: '',
    });
    const role_id_login = JSON.parse(sessionStorage.getItem('tokens')).Roles_Id;

    const onChangeInput = (event) => {
        event.preventDefault();
        let { value } = event.target;
        if (event.target.name === "phone") {
            let parrtenPhone = /^[0][1-9][0-9]{7,9}$/;
            let errPhone = 'Phone isn\'t correctly!'
            parrtenPhone.test(value) ? setValues({ ...values, [event.target.name]: value, errPhone: '' }) : setValues({ ...values, errPhone, err: '' });
        }
        if (event.target.name === "name") {
            let parrtenText = /^[^!~`@#@\$%^&\*()\+_\-=\\|}{}\]\["';?\/><0-9]*$/;
            let errName = 'Name isn\'t correctly format!';
            parrtenText.test(value) ? setValues({ ...values, [event.target.name]: value, errName: '' }) : setValues({ ...values, errName, err: '' });

        }
        if (event.target.name === "address") {
            let parrtenText = /^[^!~`@#@\$%^&\*()\+_\-=\\|}{}\]\["';?\/><]*$/;
            let errAddress = 'Address isn\'t correct format!';
            parrtenText.test(value) ? setValues({ ...values, [event.target.name]: value, errAddress: '' }) : setValues({ ...values, errAddress, err: '' });
        }
    }

    const handleChange = (event => {
        event.preventDefault();
        let { value } = event.target;
        setValues({...values, [event.target.name] : value})
    })

    const handleDateChange = (date => {
        let date_format = moment(date).format('YYYY-MM-DD');
        setValues({...values, dateOffBirth : date_format});
    })
    async function fetchRole(){ 
        await axios.get(`${common.HOST}admin/get-role`)
                .then( role => {
                    role.data ? setValues({...values, role : role.data}) : ''
                } )
                .catch(e => { throw err;})
    };

    useEffect(()=>{
        fetchRole();
    }, [])

    const onClickButtonSend = useCallback(
        async () => {
            let id = JSON.parse(sessionStorage.getItem('tokens')).Admin_ID;
            let role_id_login = JSON.parse(sessionStorage.getItem('tokens')).Roles_Id;
            let data = {
                name            : values.name,
                phone           : values.phone,
                address         : values.address,
                dateOffBirth    : values.dateOffBirth,
                sex             : values.sex,
                role            : values.role_id,
                id,
                password        : md5(values.phone)
            };
            if(role_id_login == 1){
                data = {
                    ...data,
                    role_id_login
                }
            }
           await axios.post(`${common.HOST}admin/create-user`, data)
                .then( res => {
                    res.data[0].result === 'false' ? CommonAlert.showAlert('error', 'Tạo thất bại!') : CommonAlert.showAlert('success', 'Tạo thành công!')
                })
                .catch(err => { throw err });
        }
    )

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-10 col-md-9 col-lg-5 text-center">
                    {/* form tạo tài khoản */}
                    <div className="card">
                        <div className="card-body">
                    <div className="form-group">
                        <h5 className="my-2 text-center">Tạo Tài Khoản</h5>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <TextField
                            error={values.errName ? true : false}
                            type="text"
                            name="name"
                            label={values.errName ? "Họ tên không đúng định dạng! " : 'Họ Tên'}
                            onChange = {onChangeInput}
                            inputProps={{
                                // maxLength: 2,
                            }}
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <TextField
                            error={values.errAddress ? true : false}
                            type="text"
                            name="address"
                            onChange ={onChangeInput}
                            label={values.errAddress ? "Địa chỉ sai! " : 'Địa Chỉ'}
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                // disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-inline"
                                label="Ngày Sinh"
                                value={ values.dateOffBirth }
                                onChange={handleDateChange}
                            
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <TextField
                            error={values.errPhone ? true : false}
                            type="number"
                            name="phone"
                            onChange={onChangeInput}
                            label={values.errPhone ? "Số điện thoại không đúng định dạng! " : 'Số Điện Thoại'}
                        />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Giới Tính</FormLabel>
                            <RadioGroup 
                                aria-label="gender" 
                                className="d-flex flex-row"                
                                name = "sex"      
                                value = { values.sex } 
                                onChange  = { handleChange }
                            >
                                <FormControlLabel value="1" control={<Radio />} label="Nữ" />
                                <FormControlLabel value="0" control={<Radio />} label="Nam" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name = "role_id"
                            value = { values.role_id }
                            onChange={ handleChange }
                        >
                            {
                                values.role.map((role, key) => {
                                    if(role_id_login == 2 && role.Roles_Id != 1 && role.Roles_Id != 2){
                                        return <MenuItem value={ role.Roles_Id } key = { key } >{ role.Role_Chuc_vu }</MenuItem>
                                    }
                                    if(role_id_login == 1 && role.Roles_Id == 2){
                                        return <MenuItem value={ role.Roles_Id } key = { key } >{ role.Role_Chuc_vu }</MenuItem>
                                    }
                                })
                            }
                        </Select>
                    </div>
                    <Button
                        disabled = { values.role_id && values.sex && values.address && values.dateOffBirth && values.name && values.phone && !values.errName && !values.errPhone && !values.errAddress ? false :true }
                        variant="contained"
                        color="primary"
                        endIcon={<Icon>send</Icon>}
                        onClick = { onClickButtonSend }
                    >
                        Lưu
                    </Button>
                        </div>
                    </div>
                    {/* end form tạo tk */}
                </div>
            </div>
        </div>
    )
}
