
import type { Metadata } from 'next'
import './globals.css'
import logo from '../../public/imagens'
import { GeistSans } from 'geist/font'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/navbar/footer'

export const metadata: Metadata = {
  title: "Eteco - Geolocalização de Ecopontos",
  description: 'Nosso site tem o intuito de promover os ecopontos da cidade de Leme e conscientizar os cidadãos sobre a importância do meio ambiente.',
  applicationName: 'Eteco',
  creator: "Alunos do 2MTEC DS - ETEC Deputado Salim Sedeh - Professor Orientador: Isac Batista"

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar></Navbar>

        {children}
        <Footer></Footer>
        
        </body>
    </html>
  )
}
