import {Poiret_One, Didact_Gothic, Raleway} from 'next/font/google'
import localFont from 'next/font/local'


 const cocomat = localFont({ src: './Cocomat-Light.ttf' });
 
 const PoiretOne = Poiret_One({
  weight: '400',
  subsets: ['latin'],
})

 const DidactGotic = Didact_Gothic({
  weight: '400',
  subsets: ['latin'],
  
})

 const raleway = Raleway({
  weight: '200',
  subsets: ['latin'],
})


export  { PoiretOne, DidactGotic, raleway, cocomat }