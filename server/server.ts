import * as bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/ping",(req, res, next) => {
    res.send("pong");
})
// user
// app.get('/api/users/:id', getUser);
// messages
// app.post('/api/messages', postMessages);
// app.put('/api/messages/:id', putMessage);
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));