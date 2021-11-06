// jest.setup.js
// Fix next img in test env
// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086

//It fixes domain image test problems


import * as NextImage from 'next/image'
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})
