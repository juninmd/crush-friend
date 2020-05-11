import React, { Fragment } from 'react';
import './App.css';
import { Container, Button, FormControl, ButtonGroup, TextField } from '@material-ui/core';
import PaperComponent from '../components/paper-component';
import ProfileComponent from '../components/profile-component';
import LogoComponent from '../components/logo-component';
import PanelComponent from '../components/panel-component';
import CheckBoxComponent from '../components/checkbox-component';
import { items } from '../const/items-const'

function App() {
  return (
    <Container fixed>
      <Fragment>
        <PaperComponent>
          <LogoComponent />

          <ProfileComponent />

          <div>
            <TextField
              multiline={true}
              error={false}
              id="standard-error-helper-text"
              label="Fale sobre você!"
              fullWidth={true}
              rowsMax={3}
              inputProps={{ maxLength: 300 }}
              helperText="300 Caracteres"
            />
            <br /> <br />
          </div>

          <div>
            <TextField
              multiline={true}
              error={false}
              id="standard-error-helper-text"
              label="User do seu Twitter"
              rowsMax={1}
              inputProps={{ maxLength: 300 }}
              helperText="@nome-do-usuario"
            />
            <TextField
              multiline={true}
              error={false}
              id="standard-error-helper-text"
              label="User do seu Facebook"
              rowsMax={1}
              inputProps={{ maxLength: 300 }}
              helperText="Link"
            />
            <br /> <br />
          </div>

          <div>
            <FormControl fullWidth={true}>
              <label>Selecione os itens que te agradam:</label>
            </FormControl>
            <CheckBoxComponent checkboxes={items} />
          </div>
          <br /> <br />

          <div style={{
            textAlign: "center"
          }}>
            <FormControl
            >
              <ButtonGroup>
                <Button variant="contained" color="primary">Crush</Button>
                <Button variant="contained" color="secondary">Friend</Button>
              </ButtonGroup>
            </FormControl>
          </div>
          <br />

        </PaperComponent>

        <div>
          <PanelComponent title="Sobre esse site" description="É um facilitador para possíveis namoros, sendo mais direto e objetivo que redes sociais como Tinder." />
        </div>

      </Fragment>

    </Container>
  );
}


export default App;
