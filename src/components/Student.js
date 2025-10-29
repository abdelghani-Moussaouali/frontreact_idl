import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '50px auto' };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nom = data.get('nom');
    const prenom = data.get('prenom');
    console.log(`Nom: ${nom}, Prénom: ${prenom}`);
    alert(`Étudiant ajouté : ${nom} ${prenom}`);
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: 10 }}>
            <TextField name="nom" label="Nom" variant="outlined" fullWidth />
          </div>
          <div style={{ margin: 10 }}>
            <TextField name="prenom" label="Prénom" variant="outlined" fullWidth />
          </div>
          <Button type="submit" variant="contained">
            Ajouter
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
