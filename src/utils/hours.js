const getHours = (season) => {
  const seasons = {
    'summer': ['off', 'mid', 'on'],
    'winter': ['off', 'on', 'mid']
  }

  if (season === 'holiday') {
    return Array(24).fill('off')
  }

  let hours = Array(24).fill()
  Array(24).fill().map((_, hour) => {
    if (hour < 6 || (hour >= 18 && hour <= 23)) {
      hours[hour] = seasons[season][0]
    } else if ((hour >= 6 && hour < 10) || (hour >= 16 && hour < 18)) {
      hours[hour] = seasons[season][1]
    } else {
      hours[hour] = seasons[season][2]
    }
  })
  return hours
}

export default getHours
