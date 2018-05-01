export default () => {
  const startTime = new Date('2015-10-26').getTime()
  const nowTime = new Date().getTime()
  return Math.floor((nowTime - startTime) / 1000 / 60 / 60 / 24 / 7)
}
