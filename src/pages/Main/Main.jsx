import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { TextField, CustomSelectField, CheckboxField } from './../../components'
import { validateValues } from './validateValues'

import styles from './Main.module.scss'

const Main = () => {
  const [formIsValid, setFormIsValid] = React.useState(false)

  const [field, setField] = React.useState({
    name: '',
    email: '',
    phone: '',
    isAgree: false,
    language: null
  })

  const [fieldIsValid, setFieldIsValid] = React.useState({
    name: null,
    email: null,
    phone: null,
    isAgree: null,
  })


  const handleChangeValues = (e) => {
    const { name, value } = e.target
    setField(prev => ({ ...prev, [name]: value }))
    setFieldIsValid(prev => ({ ...prev, [name]: validateValues(name, value) }))
  }
  const handleChecked = (e) => {
    const { name, checked } = e.target
    setField(prev => ({ ...prev, [name]: checked }))
    setFieldIsValid(prev => ({ ...prev, [name]: validateValues(name, checked) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formIsValid) alert('Success')
    else alert('Denied')
  }

  const handeOpenAgree = (e) => {
    e.preventDefault()
    alert('Условия использования')
  }
  React.useEffect(() => {
    if (fieldIsValid.name &&
      fieldIsValid.email &&
      fieldIsValid.phone &&
      fieldIsValid.isAgree &&
      field.language
    ) setFormIsValid(true)
    else setFormIsValid(false)
  }, [fieldIsValid, field])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Регистрация</h1>
        <p className={styles.header__subtitle}>
          Уже есть аккаунт?
          <Link to="/signin"
            className={styles.link}
          > Войти</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          name="name"
          label="Имя"
          placeholder="Введите Ваше имя"
          value={field.name}
          isValid={fieldIsValid.name}
          onChange={handleChangeValues}
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Введите ваш email"
          value={field.email}
          isValid={fieldIsValid.email}
          onChange={handleChangeValues} />
        <TextField
          name="phone"
          label="Номер телефона"
          placeholder="Введите номер телефона"
          value={field.phone}
          isValid={fieldIsValid.phone}
          onChange={handleChangeValues} />

        <CustomSelectField
          name="language"
          value={field.language}
          onChange={setField} />

        <CheckboxField
          name="isAgree"
          checked={field.isAgree}
          isValid={fieldIsValid.isAgree}
          onChange={handleChecked}
        >
          Принимаю <span 
            className={styles.link}
            onClick={handeOpenAgree}>условия</span> использования  
        </CheckboxField>

        <button
          type="submit"
          className={cn(styles.button, {
            [styles.disabled]: !formIsValid
          })}
        >Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Main
