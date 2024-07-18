const express = require('express');
const joi = require('joi');
const fs = require('fs');
const path = require('path');
const { error } = require('console');
const pathJSON = path.join(__dirname, 'users.json');

const app = express();
let uniqueID = 0;
const userSchema = joi.object({
    firstname: joi.string().min(2).required(),
    secondname: joi.string().min(2).required(),
    age: joi.number().min(0).max(100).required(),
    city: joi.string().min(3)
})
app.use(express.json())


fs.readFile(pathJSON, 'utf-8', (error, data) => {
    if (error) return res.status(404).send({user: null})
    let userData = JSON.parse(data, 'utf-8');

/**
 * Получение всех пользователей
 */
    app.get('/users', (req, res) => {
    res.send({userData});

    })

/**
 * Создание пользователя
 */

    app.post('/users',(req, res) => {
        const result = userSchema.validate(req.body);
        if(result.error){
            return res.status(400).send({error: result.error.details})
        }
            uniqueID = userData.length + 1;
            userData.push({
                id: uniqueID,
                ...req.body
            })
            fs.writeFileSync(pathJSON, JSON.stringify(userData, null, 2))
            res.send({id: uniqueID})
    })


/**
 * Получение одного пользователя
 */
    app.get('/users/:id', (req, res) => {
        const userId = +req.params.id;
        const user = userData.find(user => user.id === userId)
        if(user){
            res.send({user})
        } else{
            res.status(404).send({user: null})
        }
        res.send({user})
    })


/**
 * Обновить данные пользователя
 */

    app.put('/users/:id', (req, res) => {
        const result = userSchema.validate(req.body);
        if(result.error){
            return res.status(400).send({error: result.error.details})
        }
        const userId = +req.params.id;
        const user = userData.find(user => user.id === userId)
        if(user){
            const {firstname, secondname, age, city} = req.body;
            user.firstname = firstname;
            user.secondname = secondname;
            user.age = age;
            user.city = city;
            res.send({user})
            
        } else{
            res.status(404);
            res.send({user: null})
        }
        fs.writeFileSync(pathJSON, JSON.stringify(userData, null, 2))
            res.send({user})
        res.send({user})
    })

/**
 * Удаление пользователя
 */

    app.delete('/users/:id',(req, res) => {
        const userId = +req.params.id;
        const user = userData.find(user => user.id === userId)
        if(user){
            const userIndex = userData.indexOf(user);
            userData.splice(userIndex, 1);
            res.send({user})
        } else{
            res.status(404);
            res.send({user: null})
        }
        fs.writeFileSync(pathJSON, JSON.stringify(userData, null, 2))
                res.send({user})
        
    })
})
app.listen(3000);