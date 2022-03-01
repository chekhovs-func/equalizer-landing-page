import '../styles/footer.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as FbIcon } from '../assets/icon-facebook.svg';
import { ReactComponent as InIcon } from '../assets/icon-instagram.svg';
import { ReactComponent as TwIcon } from '../assets/icon-twitter.svg';

export default function Footer() {
  return (
    <section className='f-wrapper'>
      <Logo className='f-logo' />
      <section className='f-text-wrapper'>
        <p className='f-title'>All rights reserved © Equalizer 2021</p>
        <p className='f-body'>
          Have any problems? Contact us via social media or email us at{' '}
        </p>
        <p className='f-email'>equalizer@example.com</p>
      </section>
      <section className='f-icon-wrapper'>
        <FbIcon className='f-icon' />
        <InIcon className='f-icon' />
        <TwIcon className='f-icon' />
      </section>
    </section>
  );
}
