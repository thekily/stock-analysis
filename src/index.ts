import app from './App'

const port: number = process.env.PORT || 3000

app.listen(port, (err: Error) => {
  if (err) {
    return console.error(err)
  }

  return console.log(`server is listening on ${port}`)
})
