import '@/styles/globals.scss';
import '@/styles/reset.scss';
import '@/styles/variables.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Andreeva Daria Frontend Developer',
  description: 'This is a portfolio of Andreeva Daria',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='page-container'>
          <Header></Header>
          <main className='page'>{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
