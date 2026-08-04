import { action, observable, toJS } from 'mobx';
import { postMessage } from '../../api/crush-friend.api'

export default class HomeStore {
  @observable form: { [x: string]: any, about: string, twitter: string, facebook: string, items: any } = { items: {}, about: '', twitter: '', facebook: '' };

  @action validateForm = () => {
    const { about, facebook, twitter } = this.form;
    if (about === '' || facebook === '' || twitter === '') {
      alert("Preencha todas as informações")
      return false;
    }

    return true;
  }

  @action reset = () => {
    this.form = { items: {}, about: '', twitter: '', facebook: '' };
    alert("Em Análise");
    window.location.reload();
  }

  @action crush = async () => {
    if (!this.validateForm()) {
      return;
    }
    this.form.crush = true;
    const body = toJS(this.form);
    await postMessage(body);
    this.reset();
  }
  
  @action friend = async () => {
    if (!this.validateForm()) {
      return;
    }
    this.form.friend = true;
    const body = toJS(this.form);
    await postMessage(body);
    this.reset();
  }

  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    this.form[name] = value;
  };

  @action handleChecked = (event: any, checked: boolean) => {
    const { name } = event.target;
    this.form.items[name] = checked;
  };
}

const home = new HomeStore();
export { home };