// You'll use this file to keep the fonts that will be used throughout your application.
import { Inter, Lusitana } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700'],
 });
// The fonts are imported from the next/font/google module, which provides a simple way to import Google Fonts into your Next.js application. The fonts are then exported as inter and lusitana. The subsets property is used to specify the character sets that the font should support. In this case, the latin character set is specified.