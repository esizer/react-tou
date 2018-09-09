import moment from 'moment'

const getSeason = (date = false) => {
  const momentDate = moment(`${date} 12`, 'YYYY-MM-DD HH')
  date = momentDate.format('YYYY-MM-DD hh:mm:ss')

  if (
    (momentDate.format('e') === '6') ||
    (momentDate.format('e') === '0')
  ) {
    return 'holiday'
  }

  const year = moment(date).format('YYYY')
  const summer = [`${year}-05-01 00:00:00`, `${year}-10-31 23:59:59`]
  const winter = [`${year}-11-01 00:00:00`, `${year}-04-30 23:59:59`]

  if (momentDate.isAfter(winter[0][0]) && momentDate.isBefore(winter[0][1])) {
    return 'winter'
  } else if (momentDate.isAfter(summer[0]) && momentDate.isBefore(summer[1])) {
    return 'summer'
  }

  return 'winter'
}

export default getSeason
