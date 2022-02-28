import { ReactComponent as Background } from '../assets/bg-pattern-2.svg';
import { ReactComponent as AppleIcon } from '../assets/icon-apple.svg';
import { ReactComponent as AndroidIcon } from '../assets/icon-android.svg';

export default function Demo() {
  return (
    <article>
      <section>
        <img
          src='assets/illustration-app.png'
          alt='An illustration of our app in action'
          className='illustration'
        />
        <Background />
      </section>

      <section>
        <h2>Premium EQ</h2>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, and spatial
          audio. Take your listening experience to a whole new level and access all our
          incredible features!
        </p>
        <h2>
          <span>$4</span> / month
        </h2>
        <button>
          <AppleIcon />
          iOS Download
        </button>
        <button>
          <AndroidIcon /> Android Download
        </button>
      </section>
    </article>
  );
}
