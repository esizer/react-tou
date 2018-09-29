import Holidays from 'date-holidays'

const isHoliday = (date) => {
  const hd = new Holidays('CA', 'ON')
  return hd.isHoliday(new Date(date))
}

export default isHoliday
