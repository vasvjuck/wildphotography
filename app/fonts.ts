import localFont from 'next/font/local'

const tungsten = localFont({
  src: [
    {
      path: './typography/Tungsten-Semibold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './typography/Tungsten-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const fonts = `${tungsten.className}`;
