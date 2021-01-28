
export const validateValues = (name, value) => {
  switch (name) {
    case 'name':
      if (value.match(/^[а-яА-Яa-zA-Z\-\s]+$/)) return true
      return false
    case 'email':
      if (value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) return true
      return false
    case 'phone':
      // 89103123167
      // +7-910-221-22-22
      // +7(910)-221-22-22
      if (value.match(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/)) return true
      return false
    case 'isAgree':
      if (value === true) return true
      return false
    default: return
  }
}