import Image from 'next/image'

interface SpeakerProps {
  name: string
  title: string
  imageSrc: string
}

const Speaker = ({ name, title, imageSrc }: SpeakerProps) => (
  <div className="flex flex-col items-center p-4">
    <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full mb-4" />
    <h3 className="text-lg font-semibold text-center">{name}</h3>
    <p className="text-sm text-center">{title}</p>
  </div>
)

const speakers = [
  {
    name: "Dr. Alan Jeffrey Giacomin",
    title: "Canada Research Chair, Editor-in-Chief, Physics of Fluids, USA",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434xkrw8g/my-image%20(9).png"
  },
  {
    name: "Dr. Mona Kanso",
    title: "Postdoctoral Associate, Chemical Engineering Dept, Massachusetts Institute of Technology, USA",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434xkrw8g/my-image%20(1)%20(5).png"
  },
  {
    name: "Dr. Monica Naccache",
    title: "Associate Professor, Associate Editor, Physics of Fluids, Brazil",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434xkrw8g/my-image%20(2)%20(1).png"
  },
  {
    name: "Dr. Natalie Germann",
    title: "Professor, Deputy Editor, Physics Of Fluids, Germany",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434xkrw8g/my-image%20(3)%20(2).png"
  },
  {
    name: "Dr. O D Makinde",
    title: "Faculty of Military Science, Stellenbosch University, South Africa",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/435mq8pyq/my-image%20(19).png"
  },
  {
    name: "Dr. Ram Balachandar",
    title: "Professor, Faculty of Engineering Distinguished University, Canada",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/435mq8pyq/my-image%20(21).png"
  }
]

export default function KeynoteSpeakers() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          KEYNOTE SPEAKERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Speaker key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  )
}

