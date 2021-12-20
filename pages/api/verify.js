// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CORRECT_TOKEN = 'test-token';

export default (req, res) => {
  res.statusCode = 200
  const tokenHeader = req.headers['authorization'];
  const isOk = CORRECT_TOKEN === tokenHeader.split(' ')[1];
  res.json({ isOk });
}
