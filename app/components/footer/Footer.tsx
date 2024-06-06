import Container from '../Container'
import React from 'react'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdOutlineFacebook } from 'react-icons/md'
import { TfiInstagram } from 'react-icons/tfi'
import { FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Servies</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              At our electronics stroe, we are dedi ated to providing the latest
              and greatest devices and accsessories to our customers. With a
              wide selection of phones, Tvs, laptops, watches, and accessories.
            </p>
            <p>&copy; {new Date().getFullYear()} E-shop. All righst reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdOutlineFacebook size={24} />
              </Link>
              <Link href="#">
                <TfiInstagram size={20} />
              </Link>

              <Link href="#">
                <FaYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
