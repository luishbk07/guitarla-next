import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <div className={`contenedor ${style.barra}`}>
            <Image src='/img/logo.svg' width={300} height={40} alt={'Logo'} />
            <nav className={style.navegacion}>
              <Link href={'/'}>Inicio</Link>
              <Link href={'/nosotros'}>Nosotros</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/tienda'}>Tienda</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header