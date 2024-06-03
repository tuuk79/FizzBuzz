import express from 'express';
import path from 'path';
import { fizzBuzz } from './fizzbuzz/fizzbuzz-service';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/fizzbuzz', (req, res) => {
    try {
        const inputs = JSON.parse(req.body.input);

        if (inputs.length === 0) {
            res.send({
                error: 'You sent an empty array.'
            });
        }

        const result = fizzBuzz(inputs);
        const response = {
            data: result
        };
        res.send(response);
    } catch (error) {
        res.send({
            error: 'Bad input. Something was wrong with your array inputs.'
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
