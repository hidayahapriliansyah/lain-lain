//server.js
const app = require("./app");

const port = 8088; 
app.listen(port, () => {
  console.log(`Server runnning on http://localhost:${port}`)
});