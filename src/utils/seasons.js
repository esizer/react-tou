import moment from 'moment'
import isHoliday from './holidays'

const getSeason = (date = false) => {
  let momentDate = moment()
  if (date) {
    momentDate = moment(`${date} 0`, 'YYYY-MM-DD H')
  }

  date = momentDate.format('YYYY-MM-DD hh:mm:ss')

  if (
    (momentDate.format('e') === '6') ||
    (momentDate.format('e') === '0') ||
    isHoliday(date)
  ) {
    return 'holiday'
  }

  const year = moment(date).format('YYYY')
  const summer = [
    `${year}-05-1 00:00:00.000`,
    `${year}-10-31 23:59:59.000`
  ]
  const winter = [
    `${year}-11-1 00:00:00.000`,
    `${year}-04-30 23:59:59.000`
  ]

  if (momentDate.isAfter(winter[0][0]) && momentDate.isBefore(winter[0][1])) {
    return 'winter'
  } else if (momentDate.isAfter(summer[0]) && momentDate.isBefore(summer[1])) {
    return 'summer'
  }

  return 'winter'
}

export default getSeason
