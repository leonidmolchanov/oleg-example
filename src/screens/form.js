import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {actions} from '../store/slice'
const schema = yup.object({
    name: yup.string().required('Введите Ваше имя'),
    phone: yup.string()
        .required('Телефон обязателен для заполнения!!!')
    ,
    email: yup.string()
        .email('Емай не корректен')
    ,
}).required();

const FormScreen= ()=> {
    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();

    const onSubmit = data => {

        dispatch(actions.setProfile(data))
        console.log('data',data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Имя
            <input {...register("name")} />
            <p>{errors.name?.message}</p>

            Телефон<input {...register("phone")} />
            <p>{errors.phone?.message}</p>
            <br />
            Email<input {...register("email")} />

            <p>{errors.email?.message}</p>

            <input type="submit" />
            <a  onClick={()=>reset()}>Очистить
            </a>

        </form>
    );
}

export default FormScreen
