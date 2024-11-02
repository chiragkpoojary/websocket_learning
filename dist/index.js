import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (_req, res) => {
    res.json('Hello World');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
