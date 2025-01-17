import Image from 'next/image'

interface MemberProps {
  name: string
  title: string
  imageSrc: string
}

const Member = ({ name, title, imageSrc }: MemberProps) => (
  <div className="flex flex-col items-center p-4">
    <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full mb-4" />
    <h3 className="text-lg font-semibold text-center">{name}</h3>
    <p className="text-sm text-center">{title}</p>
  </div>
)

const members = [
  {
    name: "Dr. Saravanan V",
    title: "Asst Prof, Maths. SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(14)%20(1).png"
  },
  {
    name: "Dr. Vinod K S",
    title: "Asst Prof, Maths. SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(13)%20(1).png"
  },
  {
    name: "Mr. Yogesh V",
    title: "Asst Prof, Maths. SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(15)%20(1).png"
  }
]

export default function TechnicalCommittee() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          TECHNICAL COMMITTEE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

