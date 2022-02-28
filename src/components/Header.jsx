import '../styles/header.scss';
import { ReactComponent as Background } from '../assets/bg-pattern-1.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Brand() {
  return (
    <section>
      <article>
        <Logo />
        {/* <Background /> */}
      </article>
      <article>
        <h2>We make your music sound extraordinary.</h2>
        <p>
          A system audio equalizer specifically designed for Android and iOS. Freely tune
          the way your music sounds with a professional grade parametric EQ & volume
          mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </article>
    </section>
  );
}
