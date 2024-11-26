const mongoose = require('mongoose')
//'mongodb://localhost:27017/mongoNode'
//'mongodb://username:password@host:port/database?authSource=admin'
async function main(){
    await mongoose.connect('mongodb://root:root@localhost:27017/cybersafe?authSource=admin') 
    console.log('connectado ao mongodb com mongoose')
}

//promissed based podemos encadear catch()
main().catch((err) => console.log(err))

module.exports = mongoose