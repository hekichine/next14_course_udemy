import Link from 'next/link';

import classes from './page.module.css'
import ImageSlideshow from '@/components/images/image-slideshow';
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow timing={3000} />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLvel Food fo NextLevel Foodies</h1>
            <p>Taste & share food fomr all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href={'/community'}>Join the Community</Link>
            <Link href={'/meals'}>Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>

      </main>
    </>
  );
}
