import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as FbIcon } from '../assets/icon-facebook.svg';
import { ReactComponent as InIcon } from '../assets/icon-instagram.svg';
import { ReactComponent as TwIcon } from '../assets/icon-twitter.svg';

export default function Info() {
  return (
    <section>
      <Logo />
      <p>
        All rights reserved © Equalizer 2021 Have any problems? Contact us via social
        media or email us at{' '}
      </p>
      <p>equalizer@example.com</p>
      <section>
        <FbIcon />
        <InIcon />
        <TwIcon />
      </section>
    </section>
  );
}
