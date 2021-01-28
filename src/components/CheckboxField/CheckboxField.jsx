import React from 'react'
import cn from 'classnames'
import styles from './CheckboxField.module.scss'

const CheckboxField = ({checked, isValid, name, onChange, children}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className={styles.input} />
      <label htmlFor={name} className={cn(styles.label, {
        [styles.error]:isValid === false
      })}>
       {children}
      </label>
    </div>
  )
}

export default CheckboxField
