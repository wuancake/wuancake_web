export default () => {
  const nowTime = new Date()
  const day = nowTime.getDay() // 现在是周几
  const hour = nowTime.getHours() // 现在是几点
  const minute = nowTime.getMinutes() // 现在是多少分钟
  const second = nowTime.getSeconds() // 现在是多少秒

  const time = {
    lave_days: day > 0 ? 7 - day : day,
    lave_hours: hour > 0 ? 23 - hour : hour,
    lave_minutes: minute > 0 ? 59 - minute : minute,
    lave_seconds: second > 0 ? 59 - second : second
  }
  return time
}
