import Image from 'next/image'

export default function ContactUs() {
  return (
    <>
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          REGISTER NOW
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="bg-blue-800 rounded-lg p-6 flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">REGISTRATION FEES</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Students (Indian):</span>
                <span className="text-yellow-400">₹1000</span>
              </li>
              <li className="flex justify-between">
                <span>Other Indian Delegates:</span>
                <span className="text-yellow-400">₹1500</span>
              </li>
              <li className="flex justify-between">
                <span>International Delegates:</span>
                <span className="text-yellow-400">USD 50</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div>
              <Image
                src="https://i.ibb.co/tQZtRhQ/qr-flud.png"
                alt="QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          <a href="https://maps.app.goo.gl/wfB3S4jMoJ8Lotg5A" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Get In Touch
          </a>
          <a href="/IAFD%202025%20SAPTHAGIRI%20NPS%20UNIVERSITY.pdf" className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Download Brochure
          </a>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
        CONTACT US
      </h2>
      <div className="flex justify-center items-start gap-8">
        <div className="">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p>Email: <a href="mailto:iafd2025@snpsu.edu.in" className="text-blue-300 hover:text-blue-200">iafd2025@snpsu.edu.in</a></p>
            <p>Mobile: +91 9886279543</p>
            <p>Mobile: +91 8105974983</p>
            <p>Mobile: +91 9008460807</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

