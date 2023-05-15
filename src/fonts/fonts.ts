import {Poiret_One} from '@next/font/google'


import localFont from '@next/font/local';
 
// define your variable fonts
const poiretOne = Poiret_One({
  display: 'swap',
  weight: '400',
  subsets: ['latin']
});
// define 2 weights of a non-variable font

const cocomat = localFont({ src: './Cocomat-Light.ttf' });
 
export { poiretOne, cocomat };