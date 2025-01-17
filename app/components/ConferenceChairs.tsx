import Image from 'next/image'

interface ChairProps {
  name: string
  title: string
  imageSrc: string
  role: string
}

const Chair = ({ name, title, imageSrc, role }: ChairProps) => (
  <div className="flex flex-col items-center p-4">
    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{role}</h3>
    <Image src={imageSrc} alt={name} width={250} height={150} className="mb-4" />
    <h4 className="text-xl font-semibold text-center">{name}</h4>
    <p className="text-lg text-center">{title}</p>
  </div>
)

const chairs = [
  {
    name: "Dr. Ramesh C S",
    title: "Dean Research & Innovation SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(18).png",
    role: "CONFERENCE CHAIR"
  },
  {
    name: "Dr. Kalaiarasan",
    title: "Dean School Of Engineering, SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(11).png",
    role: "CONFERENCE CO-CHAIR"
  }
]

export default function ConferenceChairs() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {chairs.map((chair, index) => (
            <Chair key={index} {...chair} />
          ))}
        </div>
      </div>
    </section>
  )
}

