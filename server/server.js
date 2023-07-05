const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let accounts = [];

function isAdmin(role, username, password) {

  return role === 'Admin' && username === 'admin' && password === 'admin123';
}

app.get('/accounts', (req, res) => {
  res.json(accounts);
});

app.post('/accounts', (req, res) => {
  const { username, role, password } = req.body;
  accounts.push({ username, role, password });
  res.status(201).json({ message: 'Account created successfully' });
});


app.put('/accounts/:username', (req, res) => {
  const { username } = req.params;
  const { role, password } = req.body;

  const account = accounts.find(acc => acc.username === username);
  if (!account) {
    return res.status(404).json({ error: 'Account not found' });
  }

  
  if (!isAdmin(account.role, req.query.adminUsername, req.query.adminPassword)) {
    return res.status(403).json({ error: 'Only admins can update accounts' });
  }

  account.role = role;
  account.password = password;

  res.json({ message: 'Account updated successfully' });
});

app.delete('/accounts/:username', (req, res) => {
  const { username } = req.params;

  const accountIndex = accounts.findIndex(acc => acc.username === username);
  if (accountIndex === -1) {
    return res.status(404).json({ error: 'Account not found' });
  }

 
  if (!isAdmin(accounts[accountIndex].role, req.query.adminUsername, req.query.adminPassword)) {
    return res.status(403).json({ error: 'Only admins can delete accounts' });
  }

  accounts.splice(accountIndex, 1);

  res.json({ message: 'Account deleted successfully' });
});


app.get('/accounts/:username/tokens', (req, res) => {
  const { username } = req.params;

  const account = accounts.find(acc => acc.username === username);
  if (!account) {
    return res.status(404).json({ error: 'Account not found' });
  }



  res.json({ tokens: [] });
});

app.get('/tokens', (req, res) => {


  res.json({ tokens: [] });
});


app.post('/tokens', (req, res) => {
  

  const token = 'example-token';

  res.status(201).json({ token });
});


app.put('/tokens/:token', (req, res) => {
  const { token } = req.params;


  res.json({ message: 'Token updated successfully' });
});

app.delete('/tokens/:token', (req, res) => {
  const { token } = req.params;


  res.json({ message: 'Token deleted successfully' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});