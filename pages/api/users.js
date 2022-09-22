export default async function handler(req, res) {
  const response = await fetch('https://tinyfac.es/api/data');
  const data = await response.json();
  return res.json(data);
}
