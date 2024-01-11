import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(201).send({ msg: 'Hello' });
});

app.get('/api/users', (req: Request, res: Response) => {
  res.send([
    { id: 1, username: 'first', displayName: 'FIRST' },
    { id: 2, username: 'second', displayName: 'SECOND' },
    { id: 3, username: 'third', displayName: 'THIRD' }
  ]);
});

app.get('/api/test', (req: Request, res: Response) => {
  res.send('https://naver.com');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!!!`);
});
