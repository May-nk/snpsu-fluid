import Image from 'next/image'

export default function FullPaperSubmission() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
          FULL PAPER SUBMISSION
        </h2>
        <p className="text-lg mb-8 text-center">
          Interested Authors are requested to submit their full-length manuscript of the Accepted abstracts to be published in
        </p>
        <div className="flex justify-center mb-8">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            PHYSICS OF FLUIDS
          </button>
        </div>
        <p className="text-lg mb-8 text-center">
          <span className="text-yellow-400 font-semibold">Use the following link: </span>
          <a href="https://pubs.aip.org/aip/pof" className="text-blue-300 hover:text-blue-200 underline">
            https://pubs.aip.org/aip/pof
          </a>
        </p>
      </div>
    </section>
  )
}

