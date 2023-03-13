const { createCanvas } = require('canvas')

app.get('/', (req, res) => {
  const canvas = createCanvas(200, 200)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 100, 200)
// Get the image data for the pixel at (x, y) = (50, 50)
const imgData = ctx.getImageData(50, 50, 1, 1)

// Change the color of the pixel to blue
imgData.data[0] = 0 // blue
imgData.data[1] = 255 // green
imgData.data[2] = 0 // red
imgData.data[3] = 255 // alpha

ctx.putImageData(imgData, 50, 50)
  // set the content type and send the image as a response
  res.setHeader('Content-Type', 'image/png')
  res.statusCode = 200;
  canvas.createPNGStream().pipe(res) //The pipe() method is a way to connect two streams together, so that data written to one stream is automatically passed through to the other stream. In this case, the canvas's createPNGStream() method returns a readable stream that emits the PNG data for the image, and the pipe() method is used to connect that stream to the response object, res, which is a writable stream.
})