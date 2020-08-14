const express = require('express');

const router = express.Router();
const User = require('../model/usermodel')

router.get('/', (req,res) =>{
    res.render('index')
});


router.post('/', async (req, res) => {
    
    try{
        console.log('rawRequest>', req.body)
        const user = new User(req.body)

        user.save(function (err, saveduser) {
            if (err)throw err;
            
            else{
                console.log( 'savedRequest>',user)
                res.status(200).send('Successful')
            }
           
          });
        

        }catch(error){
            console.log(error)
            res.status(500).send('Server error')
        }
}
)

module.exports = router;