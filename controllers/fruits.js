const fruits = require('../models/fruits');  //imported fruit array

const test = (req, res) => {
    res.send("testing");
}
//handle index request
const index = (req, res) => {
    res.render('index.ejs', {
        fruitsList: fruits 
});
}

const show = (req, res) => {
    let f = fruits[req.params.index];
    // res.send(fruit);
    res.render('show.ejs', {
        fruit: f
    });
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const postFruit = (req, res) => {
    if(req.body.readyToEAt === 'on') {
        req.body.readyToEAt = true;
    } else{
        req.body.readyToEAt = false;
    }
    fruits.push(req.body);

    console.log(fruits);
    res.redirect('/fruits')

}

const removeFruit = (req, res) => {
    fruits.splice(req.params.index, 1);
    res.redirect('/fruits');
}

const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        fruit:fruits[req.params.index],
        index: req.params.index
    })
}

const editFruit = (req, res) => {
    if(req.body.readyToEAt === 'on') {
        req.body.readyToEAt = true;
    } else{
        req.body.readyToEAt = false;
}

module.exports = {
    index,
    show,
    renderNew,
    postFruit,
    removeFruit,
    renderEdit,
    editFruit,
    test

};

}