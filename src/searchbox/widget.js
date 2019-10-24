import { h, Component, Fragment } from 'preact';
import style from './style';

import BackGround from './assets/background_desktop.png';
import KohIcon from './assets/icr_logo_yellow.png';
import VehicleIcon from './assets/homepage-icon.png';

class Widget extends Component {
  render() {
    const Background = 'https://bit.ly/362ZwAw';
    const style = {
      imageDiv: {
        backgroundImage: `url(${BackGround})`,
        backgroundPosition: 'center center',
        backgroundColor: 'grey',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '430px',
        width: '320px',
        borderRadius: '10px',
        margin: '30px auto 30px auto',
        padding: '10px 0 0 18px'
      },
      logo: {
        height: '58px'
      },
      webText: {
        fontFamily: 'Ubuntu',
        fontSize: '22px',
        color: '#ffc800',
        fontWeight: 700,
        margin: '0 0 10px'
      },
      descText: {
        fontFamily: 'Ubuntu',
        fontSize: '22px',
        color: '#ffffff',
        fontWeight: 700,
        margin: '0 0 5px',
        width: `${320 - 36}px`,
        wordWrap: 'break-word'
      },
      vehicleIcon: {
        height: '26px'
      }
    };
    return (
      <Fragment>
        <div style={style.imageDiv}>
          <img style={style.logo} src={KohIcon} alt={KohIcon} />
          <p style={style.webText}>KOHLIFE.COM</p>
          <p style={style.descText}>Get cheap tickets across Southeast Asia</p>
          <img style={style.vehicleIcon} src={VehicleIcon} alt="VehicleIcon" />
        </div>
      </Fragment>
    );
  }
}

export default Widget;
