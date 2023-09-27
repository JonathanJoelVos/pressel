import { SealCheck } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import Start from 'src/assets/tsl-testimonial-stars.png'
import Balancer from 'react-wrap-balancer'

interface CommentProps {
  avatarUser: StaticImageData
  nameUser: string
  countryUser: string
  title: string
  comment: string
}
export default function Comment({
  avatarUser,
  nameUser,
  countryUser,
  title,
  comment,
}: CommentProps) {
  return (
    <article className="flex gap-5 justify-start shadow-md rounded-lg p-10 w-full max-w-3xl">
      <div className="w-32">
        <Image
          src={avatarUser}
          alt={`${nameUser} avatar`}
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>
      <div>
        <h4 className="font-bold text-2xl mb-2">{title}</h4>
        <div className="flex items-center gap-2">
          <div>
            <Image src={Start} alt="Starts" width={100} height={20} />
          </div>
          <span className="font-bold text-sm flex gap-1 items-center">
            Verified Purchase
            <SealCheck size={20} weight="fill" className="text-blue-500" />
          </span>
        </div>
        <Balancer>
          <p className="font-light mt-4">{comment}</p>
        </Balancer>
        <p className="text-xs mt-4">
          <b>{nameUser}</b> - {countryUser}
        </p>
      </div>
    </article>
  )
}
