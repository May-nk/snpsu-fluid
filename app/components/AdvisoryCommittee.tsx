import Image from 'next/image'

interface AdvisorProps {
  name: string
  title: string
  imageSrc: string
}

const Advisor = ({ name, title, imageSrc }: AdvisorProps) => (
  <div className="flex flex-col items-center p-4">
    <Image src={imageSrc} alt={name} width={100} height={100} className="rounded-full mb-4" />
    <h3 className="text-lg font-semibold text-center">{name}</h3>
    <p className="text-sm text-center">{title}</p>
  </div>
)

const advisors = [
  {
    name: "Dr. Mallikarjunaiah",
    title: "Associate Professor, A&M, Texas, USA.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(16).png"
  },
  {
    name: "Dr. Zulfiqar Khan",
    title: "Director Nano Corr, Energy & Modeling, Bournemouth, U K.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/zulfiqar.png"
  },
  {
    name: "Dr. Kanchana C",
    title: "DEPT of Mathematics, Universidal de Tarapa, Chile.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(4).png"
  },
  {
    name: "Dr. M Sankar",
    title: "Head, R&C, University of Technology & Applied Sciences, Ibri, Sultanate of Oman.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(1)%20(3).png"
  },
  {
    name: "Dr. Sivasankaran Sivanandam",
    title: "Professor, DEPT of Maths, King Abdulaziz University, Saudi Arabia.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(3).png"
  },
  {
    name: "Dr. Rushi Kumar B",
    title: "Professor, VIT, Vellore, India.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(3)%20(1).png"
  },
  {
    name: "Dr. R Sumitra",
    title: "Professor, Director, School of Computational Sciences, Nrupathunga University, Bangalore, India.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(7).png"
  },
  {
    name: "Dr. S R Sudheendra",
    title: "Professor and Head, DEPT of Maths, Presidency University, Bangalore, India.",
    imageSrc: "https://assets.onecompiler.app/4349mfz4s/434jx7vm9/my-image%20(1)%20(2).png"
  }
]

export default function AdvisoryCommittee() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          ADVISORY COMMITTEE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <Advisor key={index} {...advisor} />
          ))}
        </div>
      </div>
    </section>
  )
}

