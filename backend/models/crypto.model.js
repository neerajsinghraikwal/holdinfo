const {Schema, model} = require("mongoose")

const CryptoSchema = new Schema({
    base_unit:{
        type: 'string',
    },
    buy:{
        type: 'string',    
    },
    sell:{
        type: 'string',    
    },
    last:{
        type: 'string',
    },
    volume:{
        type:"string"
    },
    name:{
        type:"string"
    }
})

const CryptoModel = model("crypto", CryptoSchema)

module.exports = CryptoModel
