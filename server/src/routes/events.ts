import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all events!');
});

router.post('/', (_req, res) => {
  res.send('Saving an event!');
});

export default router;