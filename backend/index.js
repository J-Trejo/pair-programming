const express = require('express'),
        app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {

    //res.render('index', {movies: getMovies()}); Prints the  hardcoded object we had
    request('https://api.tipsgo.com:8243/tipsgo/v2.0/calculators/investment/inputs?member={member}&tipCode={tipCode}&numYears={numYears}&targetAmount={targetAmount}', function (err, resp, body) {
        if (!err) {
            let parsed = JSON.parse(body);
            //We then feed the object that we just parsed into our `index` ejs template.
            console.log(parsed);
            res.render('index', { data: parsed });
        }
    });

});



app.listen(8080, () => {
    console.log('listneing on port 8080');
});