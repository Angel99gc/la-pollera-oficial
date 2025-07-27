
import { useState } from 'react'

import SidebarCartUI from './SidebarCartUI'
import SidebarUI from './SidebarUI'
import HeaderUI from './HeaderUI'


export default function MainMenuUI() {

  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div>
      <SidebarCartUI openCart={openCart} setOpenCart={setOpenCart} />
      <SidebarUI openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <HeaderUI setOpenMenu={setOpenMenu} setOpenCart={setOpenCart} />
    </div>
  )
}
