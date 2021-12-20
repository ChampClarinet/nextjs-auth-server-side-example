// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  const randomNum = Math.random();
  res.json({ isOk: randomNum >= 0.5 });
}
