import React from "react";
import { Avatar, Typography, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface Props {
  children?: any;
}

export default class ProfileComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div>
                <Avatar
                  src="https://pbs.twimg.com/profile_images/1252750083394875395/VDX_w4aG_400x400.jpg"
                  variant="rounded"
                  style={{ minHeight: '200px', minWidth: '200px', boxShadow: "rgb(78, 84, 200) 3px 2px" }} />
                <br />
                <div>
                  <Typography variant="h5" color="secondary">Antonio Carlos</Typography>
                  <Typography
                    variant="h6"
                    style={{ paddingLeft: '6px', paddingRight: '6px' }}>
                    24 Anos, Franca - SP
                    </Typography>
                </div>
                <br />
              </div>

            </div>
          </Grid>
          <Grid item xs={8}>
            <Alert severity="info">
              Aqui é a área da biografia, onde devemos escrever coisas bonitas e divertidas paras as pessoas lerem.
              Mas como esse site é só uma brincadeira, vou encher aqui de mensagens aleatórias...
              <br />
              Não tenho físico de atelta +
                            <br />
                            Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o dia da mãe, dos pais,
                            das professoras, mas também é o dia dos animais, sempre que você olha uma criança,
                            há sempre uma figura oculta, que é um cachorro atrás. O que é algo muito importante!
                            <br />
              <br />
              <img alt="." height="100" src="https://i.pinimg.com/originals/ae/c0/44/aec0445c6b1673136db065b176d1e888.gif" />
              <img alt="." height="100" src="https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif" />
              <img alt="." height="100" src="https://media1.giphy.com/media/d3YIHmXJUZ2Wvz3i/source.gif" />
              <img alt="." height="100" src="https://media.giphy.com/media/PSKAppO2LH56w/giphy.gif" />
            </Alert>
          </Grid>
        </Grid>


      </div>

    );
  }
}
