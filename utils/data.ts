import slider1 from '@/images/image01.jpg'
import slider2 from '@/images/image02.jpg'
import slider3 from '@/images/image03.jpg'
import slider4 from '@/images/image04.jpg'
import slider5 from '@/images/image05.jpg'

export const data = [
  {
    id: 0,
    currentImage: slider1.src,
    headline: 'everyday flowers',
    date: 'JUN 2019',
    author: 'Johanna Hobel for vouge',
    prevImage: slider5.src,
    nextImage: slider2.src
  },
  {
    id: 1,
    currentImage: slider2.src,
    headline: 'the wilder night',
    date: 'DEC 2019',
    author: 'Johanna Hobel for WILD',
    prevImage: slider1.src,
    nextImage: slider3.src
  },
  {
    id: 2,
    currentImage: slider3.src,
    headline: 'smooth memories',
    date: 'FEB 2020',
    author: 'Johanna Hobel for CHanel',
    prevImage: slider2.src,
    nextImage: slider4.src
  },
  {
    id: 3,
    currentImage: slider4.src,
    headline: 'the future uinverse',
    date: 'APR 2020',
    author: 'Johanna Hobel for ON',
    prevImage: slider3.src,
    nextImage: slider5.src
  },
  {
    id: 4,
    currentImage: slider5.src,
    headline: 'she was born urban',
    date: 'DEC 2021',
    author: 'Johanna Hobel for SI',
    prevImage: slider4.src,
    nextImage: slider1.src,
  },
]
