function unix(dt, type) {

    const seconds = dt * 1000
    const data = new Date(seconds)

    const result = type == 'day' ? data.toLocaleString('ru-RU', {day: 'numeric'}) : 
                   type == 'weekDay' ? data.toLocaleString('ru-RU', {weekday: 'short'}) :
                   type == 'month' ? data.toLocaleString('ru-RU', {month: 'short'}).replace(/\.$/, '') : ''
    
    return result
}

export default unix