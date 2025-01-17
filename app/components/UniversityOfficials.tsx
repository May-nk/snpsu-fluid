import Image from 'next/image'

interface OfficialProps {
  name: string
  title: string
  imageSrc: string
}

const Official = ({ name, title, imageSrc }: OfficialProps) => (
  <div className="flex flex-col items-center p-4">
    <Image src={imageSrc} alt={name} width={250} height={150} className="mb-4" />
    <h3 className="text-xl font-semibold text-center">{name}</h3>
    <p className="text-lg text-center">{title}</p>
  </div>
)

const officials = [
  {
    name: "Dr. Jayanthi V",
    title: "Honorable Vice-Chancellor, SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(9)_enhanced.png"
  },
  {
    name: "Dr. K S Venkateshappa",
    title: "Chief Administrative Officer, SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(17).png"
  },
  {
    name: "Dr. H Rama Krishna",
    title: "Registrar, SNPSU",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(10).png"
  }
]

export default function UniversityOfficials() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          UNIVERSITY KEY OFFICIALS
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {officials.map((official, index) => (
            <Official key={index} {...official} />
          ))}
        </div>
      </div>
    </section>
  )
}

