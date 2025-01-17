export default function OrganizingCommittee() {
  const members = [
    "Dr. Niranjan C M, Asso Prof, Maths, SNPSU",
    "Dr. Jyothi Prasad Gorantla, Asso Prof, Maths, SNPSU",
    "Dr. Shazia Banu W, Asst Prof, Maths, SNPSU",
    "Dr. Surekha Desai, Asst Prof, Maths, SNPSU",
    "Dr. Shilpa G, Asst Prof, Physics, SNPSU",
    "Mr. Jagadish Angadi, Asst Prof, Maths, SNPSU",
    "Mrs. Sumitra Devi M R, Asst Prof, Maths, SNPSU",
    "Mrs. Kayalvizhi P, Asst Prof, Maths, SNPSU",
    "Mr. Santhosh HC, Asst Prof, Maths, SNPSU",
    "Mrs. Shwetha B S, Asst Prof, Maths, SNPSU",
    "Ms. Anitha M, Asst Prof, Maths, SNPSU",
    "Ms. Harshitha MV, Asst Prof, Maths, SNPSU",
    "Mrs. Mamatha C S, Asst Prof, Maths, SNPSU",
    "Mrs. Sushma P M, Asst Prof, Maths, SNPSU",
    "Mrs. Pushpa S, Asst Prof, Maths, SNPSU",
    "Mrs. Rachana R, Asst Prof, Maths, SNPSU",
    "Mrs. KVRR Gari Neeraja, Asst Prof, Maths, SNPSU",
    "Ms. Srivalli MR, Asst Prof, Maths, SNPSU",
    "Mrs. Chaitra C N, Asst Prof, Maths, SNPSU",
    "Ms. Supreetha C M, Asst Prof, Maths SNPSU",
    "Mr. Jayarama HR, Asst Prof, Maths, SNPSU",
    "Ms. Shravani V, Asst Prof, Maths, SNPSU",
    "Ms. Bhavitha B G, Asst Prof, Maths, SNPSU",
    "Mrs. Deepika R, Asst Prof, Maths, SNPSU"
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">
          ORGANIZING COMMITTEE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div key={index} className="bg-blue-800 rounded-lg p-4 text-center hover:bg-blue-700 transition-colors">
              {member}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

