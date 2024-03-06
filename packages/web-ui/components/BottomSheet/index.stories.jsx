import React, { useState } from 'react'

import { BottomSheet } from './'

export default {
  title: 'BottomSheet',
}

const LIPSUM = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
      eleifend eros. Donec dolor velit, dapibus sed semper non, vehicula vel
      metus. Donec et egestas purus. Sed placerat pellentesque sapien, ut
      porttitor justo. Aenean eget dui efficitur, iaculis ante at, rhoncus elit.
      Nullam lacus felis, sodales sed ullamcorper vel, pharetra eget massa.
      Nulla semper vel quam sed congue. Suspendisse pulvinar varius nunc, tempor
      convallis mi mollis vel. Pellentesque lobortis dictum sollicitudin. Duis
      egestas dolor elit. Proin non tellus velit. Mauris auctor, risus sed
      porttitor vestibulum, ligula erat accumsan ante, nec interdum magna eros
      vehicula libero. Nullam lorem tortor, ultrices eget interdum ut, convallis
      eget nisl. Fusce vehicula mauris et tempus rhoncus. In congue augue ac
      volutpat accumsan. Nullam faucibus vel arcu et sollicitudin.
    </p>
    <p>
      Donec ullamcorper vulputate turpis, vitae mattis urna sodales ac. Maecenas
      laoreet enim quis nunc commodo, eget ullamcorper metus condimentum.
      Phasellus bibendum neque eget dictum fermentum. Donec eu metus in lacus
      commodo cursus. Morbi eu nunc dolor. Suspendisse a purus erat. Vivamus
      maximus risus non ultrices pulvinar. Fusce posuere tellus vel auctor
      convallis. Ut cursus finibus sagittis.
    </p>
    <p>
      Maecenas feugiat efficitur augue, eu auctor leo efficitur in. Aenean
      malesuada vehicula lectus sed semper. Mauris quis vulputate velit.
      Vestibulum nec purus in arcu posuere faucibus. Etiam volutpat ut neque non
      facilisis. Duis ante diam, bibendum eu pulvinar quis, suscipit et felis.
      Curabitur et pellentesque nunc, eget rhoncus orci. Nulla in ante
      imperdiet, dapibus diam vel, hendrerit nisl. Aenean lectus felis, aliquet
      ac erat vitae, varius elementum mauris. Donec lacus tortor, sollicitudin
      nec urna vitae, fringilla pellentesque tellus.
    </p>
    <p>
      Sed ac felis nec nisi blandit feugiat quis nec dolor. Aenean interdum nunc
      eu tellus faucibus, eu maximus nulla tincidunt. Aliquam fringilla
      elementum ipsum, vitae venenatis neque venenatis non. Sed efficitur nec
      nulla nec ullamcorper. Pellentesque ultrices nisi id diam varius ultrices.
      Mauris blandit risus enim, eget faucibus nisi volutpat sed. Morbi
      pellentesque diam et lorem tristique, vitae accumsan dolor blandit. Donec
      tincidunt luctus enim a eleifend. Curabitur nec dapibus arcu, tincidunt
      interdum ex. Suspendisse id orci velit. Aenean ac justo eget purus dictum
      feugiat vel et turpis.
    </p>
    <p>
      Ut et aliquet sapien. In porta enim eu ex consequat elementum. Nullam sit
      amet viverra sapien, eu feugiat erat. Sed volutpat justo nec orci
      ullamcorper, vitae suscipit tortor bibendum. Vivamus vehicula erat id
      libero luctus, at fermentum nibh porttitor. Ut convallis tempus odio at
      posuere. Morbi mattis pellentesque fringilla. Curabitur non sollicitudin
      lorem. Aliquam volutpat egestas erat eget dapibus. Donec pulvinar mi ac
      justo congue hendrerit. Donec mollis rutrum nisi consequat hendrerit.
      Integer dictum dolor ipsum, faucibus tincidunt arcu consequat sit amet.
      Integer mi ligula, viverra et sem nec, sollicitudin sollicitudin diam.
      Donec sit amet leo a nibh vehicula fringilla vel sed ex. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas.
    </p>
  </>
)

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>open</button>
      <BottomSheet isOpen={isOpen} onSetIsOpen={setIsOpen}>
        {LIPSUM}
      </BottomSheet>
    </>
  )
}
