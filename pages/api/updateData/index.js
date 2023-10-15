const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret =
  "fnacapi_omd2ZXJzaW9uAWdwYXlsb2FkWFiiYmlkcjM3ODYwNDAzODc5NjYwODA4MWZzZWNyZXR4ODFPVXhqNm9hKzNCTmRzeklsNnpXdDBjaGZQbEQ0NXFJK0lZT3I2V0psR084T1FPVGxSdzBqdz09 ";
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
  const id = req.body.id;
  const inputData = req.body.data;
  try {
    const dbs = await client.query(
      q.Update(q.Ref(q.Collection("todos"), id), {
        data: { done: inputData.done },
      })
    );
    res.status(200).json(dbs.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
