import express, { json } from 'express';
import cors from 'cors'; //api reqs to happen from any origin
import axios from 'axios';

const app = express();
app.use(json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.post(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { 'private-key': '85d3f70f-6e34-488f-9353-ebd8cee53cbb' } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log(`Chat App Backend Server is listening on port 3001`);
});
