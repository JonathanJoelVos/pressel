import Image from 'next/image'
import Logo from 'src/assets/product_logo.png'
import Capsula from 'src/assets/introducting_kerassentials-new.png'
import Capsula2 from 'src/assets/2bottles-tsl-new.png'
import Certificate from 'src/assets/certifications.png'
import Doctor from 'src/assets/doctor.png'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import BgImage from 'src/assets/pattern-bg.png'
import { motion } from 'framer-motion'
import {
  CaretRight,
  Coffee,
  Leaf,
  PottedPlant,
  PuzzlePiece,
  ShoppingCart,
  TestTube,
  X,
} from '@phosphor-icons/react'
import ProductBenefit from '@/components/ProductBenefit'
import MintBg from 'src/assets/mint-bg.jpg'
import Clients from 'src/assets/clients.png'

import Ingredient1 from 'src/assets/ingredient1.png'
import Ingredient2 from 'src/assets/ingredient2.png'
import Ingredient3 from 'src/assets/ingredient3.png'
import Ingredient4 from 'src/assets/ingredient4.png'
import Ingredient5 from 'src/assets/ingredient5.png'
import Ingredient6 from 'src/assets/ingredient6.png'
import Ingredient7 from 'src/assets/ingredient7.png'
import Ingredient9 from 'src/assets/ingredient9.png'
import Comment from '@/components/Comment'
import Testemunha1 from 'src/assets/testimonial-face1.png'
import Testemunha2 from 'src/assets/testimonial-face2.png'
import Testemunha3 from 'src/assets/testimonial-face3.png'

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen w-full">
      <header className="w-full flex items-center justify-between px-32 py-4 bg-blue-950 fixed z-50">
        <Image
          src={Logo}
          alt="Product Logo"
          width={180}
          priority
          quality={100}
        />
        <nav className="flex items-center gap-5 list-none">
          <li className=" text-gray-100">
            <a
              href="#about"
              className="border-b-2 border-transparent hover:border-red-500 pb-8 hover:text-red-500"
            >
              About Kerassentials
            </a>
          </li>
          <li className=" text-gray-100">
            <a
              href="#ingredients"
              className="border-b-2 pb-8 border-transparent hover:border-red-500 hover:text-red-500"
            >
              Ingredients
            </a>
          </li>
          <li className=" text-gray-100">
            <a
              href="#faq"
              className="border-b-2 border-transparent hover:border-red-500 pb-8 hover:text-red-500"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-red-500 uppercase font-bold px-5 py-3 rounded-full hover:bg-red-600 flex items-center gap-2 text-gray-100"
            >
              Order Now
              <ShoppingCart size={15} weight="light" />
            </a>
          </li>
        </nav>
      </header>
      <section>
        <section className="pt-40 w-full flex gap-3 p-16 px-32 h-screen items-center bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-teal-400 to-teal-500">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl font-bold text-white mb-3">
              These Special Oils{' '}
              <strong className="text-blue-950">Fight Fungus Resistance</strong>{' '}
              And{' '}
              <strong className="text-blue-950">Support Healthy Nails</strong>{' '}
              And <strong className="text-blue-950">Skin</strong>
            </h1>
            <p className="mb-5">
              Maintain the <strong>health of your nails</strong> and skin with
              this <strong>revolutionary treatment</strong>
            </p>
            <Link
              href="#contact"
              className="bg-red-500 uppercase font-bold px-5 py-3 rounded-full hover:bg-red-600 flex justify-center items-center gap-2 md:w-1/2 group mt-5 text-gray-100"
            >
              <span>Order Now</span>
              <CaretRight
                size={20}
                weight="light"
                className="transition-all duration-200 group-hover:translate-x-10"
              />
            </Link>
            <Image
              src={Certificate}
              alt="Product Certificate"
              width={350}
              className="mt-10"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image src={Capsula} alt="Product Logo" width={1000} />
          </motion.div>
        </section>
        <section className="px-44 py-16 bg-gray-100 flex items-center gap-16 justify-start">
          <Image src={Doctor} alt="Doctor" width={200} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            className="flex flex-col self-start"
          >
            <p className="text-xl font-bold text-red-600 mb-3">
              June 2022 - New Scientific Discovery
            </p>
            <Balancer>
              <h2 className="text-gray-900 font-bold text-xl">
                If you have been struggling for months or years with toenail
                itching and foul smell… Trying diets and exercise but with no
                real results… <br />
                You should know that it’s not your fault.
              </h2>
            </Balancer>
            <Balancer>
              <p className="text-gray-900 font-light leading-relaxed mt-5">
                According to scientists from the the U.S. Centers for Disease
                Control and Prevention, decades of people using treatments but
                stopping short of completely killing the fungus meant the
                remaining fungus learnt how to survive. <br /> That made the
                treatment useless the next time around as the fungus mutated
                into a stronger kind of fungus.
                <br />
                The meds you took by now, just like antibiotics, ended up
                creating stronger, mutated fungi. This led to antifungal
                resistance, which makes it almost impossible to get rid of
                fungus.
              </p>
            </Balancer>
          </motion.div>
        </section>
        <section className="relative p-10 flex items-center justify-center">
          <Image src={BgImage} alt="Background Image" layout="fill" />
          <div className="z-10 bg-gray-100 flex justify-center flex-col items-center rounded-md p-5 max-w-2xl">
            <p className="text-gray-800 text-sm font-light mb-2">
              That’s why we created
            </p>
            <Image
              src={Logo}
              alt="Product Logo"
              width={180}
              className="invert"
            />
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-1/2">
                <Balancer>
                  <p className="text-gray-800 font-light leading-relaxed">
                    This formula is{' '}
                    <strong className="text-blue-950 font-bold">
                      unlike anything {`you've`} ever tried
                    </strong>{' '}
                    or experienced in your life before. You will be able to
                    support a fungus-free life, without worrying about itching
                    or foul smell. All that while enjoying flawless nails and
                    skin.
                  </p>
                </Balancer>
              </div>
              <Image src={Capsula2} alt="Product" width={200} />
            </div>
          </div>
        </section>
        <section className="px-32 py-16 bg-white">
          <h3 className="text-gray-800 text-center font-extrabold text-4xl">
            Inside every drop of Kerassentials you’ll find:
          </h3>
          <p className="text-gray-800 text-center mt-2 text-lg mb-10">
            A bespoke <strong className="text-red-500">powerful formula</strong>
            {` `}that brings together{' '}
            <strong className="text-red-500">
              special high-quality oils and minerals
            </strong>
            .
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <ProductBenefit
              image={Ingredient1}
              title="Lavender Oil"
              benefits={[
                'Protects nail keratin',
                'Supports the nails and skin',
                'Fights against strong fungus',
              ]}
            />
            <ProductBenefit
              image={Ingredient2}
              title="Organic Flaxseed Oil"
              benefits={[
                'Boosts skin’s natural immunity',
                'Helps with inflammation',
                'Superfood for your skin',
              ]}
            />
            <ProductBenefit
              image={Ingredient3}
              title="Almond Oil"
              benefits={[
                'Helps prevent fungus',
                'Protects against infections',
                'Supports healthy nails',
              ]}
            />
            <ProductBenefit
              image={Ingredient4}
              title="Tea Tree Oil"
              benefits={[
                'Strong antifungal properties',
                'Helps curb fungus growth',
                'Safe and effective',
              ]}
            />
            <ProductBenefit
              image={Ingredient5}
              title="Lemongrass Oil"
              benefits={[
                'Efficient antifungal',
                'Prevents future infection',
                'Helps with inflammation',
              ]}
            />
            <ProductBenefit
              image={Ingredient6}
              title="Aloe Vera"
              benefits={[
                'Soothes the skin',
                'Strong antifungal',
                'Moisturizes the skin',
              ]}
            />
            <ProductBenefit
              image={Ingredient7}
              title="Tocopheryl Acetate"
              benefits={[
                'Stable form of Vit. E',
                'Protects the skin',
                'Prevents skin aging',
              ]}
            />
            <ProductBenefit
              image={Ingredient9}
              title="Undecylenic Acid"
              benefits={[
                'Beneficial fatty acid',
                'Helps prevent fungus',
                'Helps protect the nails',
              ]}
            />
          </div>
        </section>
        <section className="relative flex justify-center items-center p-5">
          <div className="z-10 bg-white flex justify-center flex-col items-center rounded-md p-10 px-28 max-w-4xl h-96 shadow-md">
            <Image
              src={Logo}
              alt="Product Logo"
              width={400}
              className="invert"
            />
            <ul className="flex gap-5 flex-col flex-wrap justify-center mt-5">
              <div className="flex flex-wrap gap-5 justify-center">
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <Leaf size={25} weight="fill" className="text-green-500" />
                  Natural Formula
                </li>
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <PottedPlant
                    size={25}
                    weight="fill"
                    className="text-green-500"
                  />
                  Plant Ingredients
                </li>
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <PuzzlePiece
                    size={20}
                    weight="fill"
                    className="text-green-500"
                  />
                  Easy To Use
                </li>
              </div>
              <div className="flex flex-wrap gap-5 justify-center">
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <X size={25} weight="fill" className="text-red-500" />
                  Non-GMO
                </li>
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <TestTube size={24} weight="fill" className="text-red-500" />
                  No Chemicals
                </li>
                <li className="text-gray-800 text-center font-light leading-relaxed mt-5 flex items-center gap-2 text-lg">
                  <Coffee size={24} weight="fill" className="text-red-500" />
                  No Stimulants
                </li>
              </div>
            </ul>
          </div>
          <Image src={MintBg} alt="Mint Background" layout="fill" />
        </section>
        <section className="flex flex-col items-center p-10 gap-5 bg-white">
          <h3 className="text-5xl text-center font-extrabold">
            Real Kerassentials Users.
          </h3>
          <h3 className="text-5xl text-center font-extrabold text-green-500 mb-10">
            Real Life-Changing Results.
          </h3>
          <Image src={Clients} alt="Clients" width={1000} />
          <Comment
            avatarUser={Testemunha1}
            nameUser="Ella Simpson"
            countryUser="New York, USA"
            comment="“This literally saved my feet! I can’t recommend Kerassentials enough!”"
            title="Ella Simpson enjoys her healthy nails and skin…"
          />
          <Comment
            title="Riley Harrison has shared the product with her entire family…"
            avatarUser={Testemunha2}
            nameUser="Riley Harrison"
            countryUser="Wyoming, USA"
            comment="“I’ve been struggling with foot fungus since high school and this is the only thing that helped. I still can’t believe how great it worked!”"
          />
          <Comment
            avatarUser={Testemunha3}
            nameUser="Ella Simpson"
            countryUser="New York, USA"
            comment="“This literally saved my feet! I can’t recommend Kerassentials enough!”"
            title="Ella Simpson enjoys her healthy nails and skin…"
          />
        </section>
      </section>
    </main>
  )
}
