const Signup = require('../models/Signup')
const { mongooseToObject } = require('../../util/mongoose');
class SignupController {

  

    login(req, res, next) {
        res.render('signups/login');
        // res.send('s');
    }

    signup(req, res, next) {
        res.render('signups/signup');
    }

   
    store(req, res, next) {
    
        const formData = req.body;
        const signups = new Signup(formData);
        signups.save();
        res.send('saved-signup');
    }

   async storeLogin(req,res,next) {
        try {
            const check = await Signup.findOne({ name: req.body.name })
            if (check.password === req.body.password) {
                res.redirect('/me/stored/' + req.body.name) ;
                // res.redirect('/me/stored/product_lines');
                // res.status(201).res.redirect('/me/stored/product_lines', { naming: `${req.body.password}+${req.body.name}` })
                // res.status(201).render("me/stored-product_lines", { naming: `${req.body.password}+${req.body.name}` })
                // res.redirect('/me/stored/product_lines');
            }
    
            else {
                res.send("incorrect password")
            }
        } 
        
        catch (e) {
    
            res.send("wrong details")
        }
    
    }
}
module.exports = new SignupController;