import { h, Component, Fragment } from 'preact';
import style from './style';

import Logo from './assets/background_desktop.png';

class Widget extends Component {
  render() {
    const Background = 'https://bit.ly/362ZwAw';
    const style = {
      imageDiv: {
        backgroundImage: `url(${Logo})`,
        backgroundPosition: 'center center',
        backgroundColor: 'grey',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '430px',
        width: '320px',
        borderRadius: '10px',
        margin: '30px auto 30px auto'
      },
      logo: {
        height: '80px',
        width: '80px'
      }
    };
    return (
      <Fragment>
        <div style={style.imageDiv}>
          {/* <image style={style.logo} src={Logo} alt={Logo} /> */}
        </div>
      </Fragment>
    );
  }
}

export default Widget;
