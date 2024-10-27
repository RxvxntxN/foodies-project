import './globals.css';
import MainHeader from './main-header';

export const metadata = {
  title: 'Games&Foods',
  description: 'Delicious meals, gamings by a exotic community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-h-screen'>
      <body className='h-full'>

        <div className="header-background h-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FF5733", stopOpacity: '1' }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#C70039", stopOpacity: '1' }}
                />

              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,0 L1440,0 L1440,90.4 L0,90.4 Z"
            ></path>
          </svg>
        </div>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
