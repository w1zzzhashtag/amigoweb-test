import React from 'react'
import styles from './CustomSelectField.module.scss'

const OPTIONS = [
  { id: 1, value: 'Русский' },
  { id: 2, value: 'Английский' },
  { id: 3, value: 'Китайский' },
  { id: 4, value: 'Испанский' },
]

const CustomSelectField = ({ name, value, onChange }) => {
  const [optionsIsOpen, setOptionsIsOpen] = React.useState(false)

  const handleOpenOptions = () => setOptionsIsOpen(!optionsIsOpen)

  const handleClickOptions = (value) => {
    onChange(prev => ({ ...prev, [name]: value }))
    setOptionsIsOpen(!optionsIsOpen)
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="button"
        className={styles.input}
        value={value ? value : 'Язык'}
        onClick={handleOpenOptions} />
      <label htmlFor="" className={styles.label}>Язык</label>

      {optionsIsOpen && (
        <div className={styles.options}>
          {OPTIONS.map(item => (
            <div key={item.id}
              className={styles.options__item}
              onClick={() => handleClickOptions(item.value)}
            >{item.value}</div>
          ))}
        </div>
      )}

    </div>
  )
}

export default CustomSelectField
