interface DateItemProps {
  event: string
  date: string
}

const DateItem = ({ event, date }: DateItemProps) => (
  <div className="flex justify-between items-center bg-blue-800 rounded-lg p-4 hover:bg-blue-700 transition-colors">
    <span className="text-lg">{event}</span>
    <span className="text-yellow-400 font-semibold">{date}</span>
  </div>
)

export default function ImportantDates() {
  const dates = [
    { event: "Abstract Submission Deadline", date: "03-02-2025" },
    { event: "Notification of Acceptance (Abstract)", date: "10-02-2025" },
    { event: "Notification of Acceptance (Full Paper)", date: "10-03-2025" },
    { event: "Submission of Final Manuscripts", date: "15-03-2025" },
    { event: "Registration Opens", date: "20-12-2024" },
    { event: "Registration Deadline", date: "15-03-2025" },
    { event: "Conference Dates", date: "21st & 22nd, March 2025" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          IMPORTANT DATES
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {dates.map((item, index) => (
            <DateItem key={index} {...item} />
          ))}
        </div>
        <p className="text-center mt-8 text-lg">
          International participants are allowed to register for online presentations.
        </p>
      </div>
    </section>
  )
}

