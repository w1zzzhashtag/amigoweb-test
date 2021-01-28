import React from 'react'
import styles from './TextField.module.scss'


const TextField = ({value, isValid, name, label, placeholder, onChange}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        {isValid === false && 'Введено не корректное значение'}
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange} />
      <label htmlFor={name} className={styles.label}>{label}</label>
    </div>
  )
}

export default TextField
