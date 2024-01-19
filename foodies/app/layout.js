import HeaderBg from '@/components/header/header-background';
import './globals.css';

import Header from '@/components/header/header';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderBg />
        <Header />
        {children}
      </body>
    </html>
  );
}
