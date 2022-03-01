import '../styles/main.scss';
import { ReactComponent as Background } from '../assets/bg-pattern-2.svg';
import { ReactComponent as AppleIcon } from '../assets/icon-apple.svg';
import { ReactComponent as AndroidIcon } from '../assets/icon-android.svg';

export default function Main() {
  return (
    <article className='m-wrapper'>
      <img
        src='assets/illustration-app.png'
        alt='An illustration of our app in action'
        className='m-demo'
      />
      <section className='m-background-card'>
        <Background className='m-background'/>
      </section>
      <section className='m-price-card'>
        <h2 className='m-title'>Premium EQ</h2>
        <p className='m-body'>
          Get expert-level control with a robust equalizer, volume mixer, and spatial
          audio. Take your listening experience to a whole new level and access all our
          incredible features!
        </p>
        <h2 className='m-subtitle'>
          <span className='m-span'>$4</span>/ month
        </h2>
        <button className='m-ios-button'>
          <AppleIcon className='m-button-icon' />
          iOS Download
        </button>
        <button className='m-android-button'>
          <AndroidIcon className='m-button-icon' /> Android Download
        </button>
      </section>
    </article>
  );
}
