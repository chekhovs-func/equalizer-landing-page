import '../styles/header.scss';
import { ReactComponent as Background } from '../assets/bg-pattern-1.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Header() {
  return (
    <section className='h-wrapper'>
      <article className='h-text'>
        <Logo className='h-logo' />
        <h2 className='h-title'>We make your music sound extraordinary.</h2>
        <p className='h-body'>
          A system audio equalizer specifically designed for Android and iOS. Freely tune
          the way your music sounds with a professional grade parametric EQ & volume
          mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </article>
      <Background className='h-background' />
    </section>
  );
}
