import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Obrigatório';
    }

    if (!values.email) {
        errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail Invalido';
    }

    return errors;
};

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert("Informações recebida, entrarei em contato o mais rápido possível pelo email: ", values.email);
        },
    });
    return (
        <form className="c-form" onSubmit={formik.handleSubmit}>
            <div className="c-form__group">
                <label htmlFor="firstName" >Nome</label>
                <input
                    className="c-form__control"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='error'>{formik.errors.firstName}</div>
                ) : null}
            </div>

            <div className="c-form__group">
                <label htmlFor="email">Email</label>
                <input
                    className="c-form__control"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'>{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="c-form__group">
                <label htmlFor="subject" className="c-form__label">Assunto</label>
                <select id="subject" className="c-form__control" defaultValue={"Qual o assunto?"}>
                    <option value={"Qual o assunto?"} disabled>Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                </select>
            </div>

            <div className="c-form__group">
                <label htmlFor="messager" className="c-form__label">Mensagem</label>
                <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
            </div>
            <div className="c-form__group">
            <button className="c-btn" type="submit">Enviar</button>
            </div>
        </form>
    );
};

export default SignupForm;