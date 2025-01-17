import Image from 'next/image'

interface PatronProps {
  name: string
  title: string
  imageSrc: string
}

const Patron = ({ name, title, imageSrc }: PatronProps) => (
  <div className="flex flex-col items-center p-4">
    <Image src={imageSrc} alt={name} width={250} height={150} className="mb-4" />
    <h3 className="text-xl font-semibold text-center">{name}</h3>
    <p className="text-lg text-center">{title}</p>
  </div>
)

const patrons = [
  {
    name: "Dr. G.Dayanand",
    title: "Honorable Chancellor, Sapthagiri NPS University",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(7)%20(1).png"
  },
  {
    name: "Mr. G.D.Manoj",
    title: "Honorable Pro-Chancellor, Sapthagiri NPS University",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(8).png"
  }
]

export default function ChiefPatrons() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          CHIEF PATRONS
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {patrons.map((patron, index) => (
            <Patron key={index} {...patron} />
          ))}
        </div>
      </div>
    </section>
  )
}

