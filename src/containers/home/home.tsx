import React, { Fragment } from 'react';
import './home.css';
import { Container, Button, FormControl, ButtonGroup, TextField } from '@material-ui/core';
import PaperComponent from '../../components/paper-component';
import ProfileComponent from '../../components/profile-component';
import LogoComponent from '../../components/logo-component';
import PanelComponent from '../../components/panel-component';
import CheckBoxComponent from '../../components/checkbox-component';
import { items } from '../../const/items-const'
import { inject, observer } from 'mobx-react';
import HomeStore from './store';

interface Props {
  home: HomeStore;
}

@inject('home')
@observer
export default class Home extends React.Component<Props> {
  render() {
    const { form, crush, friend, handleForm, handleChecked } = this.props.home;
    return (
      <Container fixed>
        <Fragment>
          <PaperComponent>
            <LogoComponent />

            <ProfileComponent />

            <div>
              <TextField
                multiline={true}
                error={form.about === ""}
                id="standard-error-helper-text"
                label="Fale sobre você!"
                fullWidth={true}
                rowsMax={3}
                inputProps={{ maxLength: 300 }}
                helperText="300 Caracteres"
                value={form.about}
                name="about"
                onChange={handleForm}
              />
              <br /> <br />
            </div>

            <div>
              <TextField
                multiline={true}
                error={form.twitter === ""}
                id="standard-error-helper-text"
                label="User do seu Twitter"
                rowsMax={1}
                inputProps={{ maxLength: 300 }}
                helperText="@nome-do-usuario"
                value={form.twitter}
                name="twitter"
                onChange={handleForm}
              />
              <TextField
                multiline={true}
                error={form.facebook === ""}
                id="standard-error-helper-text"
                label="User do seu Facebook"
                rowsMax={1}
                inputProps={{ maxLength: 300 }}
                helperText="Link"
                value={form.facebook}
                name="facebook"
                onChange={handleForm}
              />
              <br /> <br />
            </div>

            <div>
              <FormControl fullWidth={true}>
                <label>Selecione os itens que te agradam:</label>
              </FormControl>
              <CheckBoxComponent checkboxes={items} onChange={handleChecked} />
            </div>
            <br /> <br />

            <div style={{
              textAlign: "center"
            }}>
              <FormControl
              >
                <ButtonGroup>
                  <Button onClick={() => crush()} variant="contained" color="primary">Crush</Button>
                  <Button onClick={() => friend()} variant="contained" color="secondary">Friend</Button>
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
}
