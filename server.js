const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'SafeFishing-API'});
});

app.listen(port, () => {
  console.log(`SafeFishing-API Listening to requests on port ${port}`);
});

app.get('/fish', async (req, res) => {
    const allfish =  await prisma.fish.findMany({});
    res.json(allfish);
  });