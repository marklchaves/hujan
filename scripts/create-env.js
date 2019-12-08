const fs = require('fs')
fs.writeFileSync('./.env', `DARKSKY_API_KEY=${process.env.DARKSKY_API_KEY}\n`)
