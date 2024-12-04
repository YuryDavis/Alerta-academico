const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://root:root@localhost:27017/cybersafe?authSource=admin') 
    console.log('connectado ao mongodb com mongoose')
}

main().catch((err) => console.log(err))

module.exports = mongoose