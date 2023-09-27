import { SealCheck } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'

interface ProductBenefitProps {
  image: StaticImageData
  title: string
  benefits: string[]
}
export default function ProductBenefit({
  image,
  benefits,
  title,
}: ProductBenefitProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full max-w-xs border rounded-lg shadow-md p-4">
      <Image src={image} alt="Ingredient 1" width={200} />
      <div className="bg-zinc-800 p-2 w-full rounded-md">
        <p className="text-gray-100 font-extrabold text-center text-xl">
          {title}
        </p>
      </div>
      <ul className="self-start p-2">
        {benefits.map((benefits) => (
          <li key={benefits} className="flex items-center gap-2 mb-2">
            <SealCheck size={20} weight="fill" className="text-green-500" />
            {benefits}
          </li>
        ))}
      </ul>
    </div>
  )
}
