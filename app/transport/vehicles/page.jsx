import menuData from "@/data/menu.json";

export default function VehiclesPage() {
  return (
    <div className="container mx-auto p-4">
      {menuData.Vehicle.map((information, index) => (
        <section key={index} className="mb-8">
          <div className="content">
            {/* Section Heading */}
            <h3 className="m-3 text-2xl font-bold">{information.heading}</h3>

            {information.detailservices.map((content, i) => (
              <div key={i} className="mb-6">
                {/* Sub Header + Description */}
                <h5 className="text-xl font-semibold">{content.header}</h5>
                <p className="mb-3">{content.p}</p>

                {/* Table */}
                <table className="w-full border-collapse border border-gray-400">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">{content.Serial}</th>
                      <th className="border border-gray-400 px-4 py-2">{content.VehicleType}</th>
                      <th className="border border-gray-400 px-4 py-2">{content.Capacity}</th>
                      <th className="border border-gray-400 px-4 py-2">{content.VechicleNo}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.paragraph.map((details, j) => (
                      <tr key={j}>
                        <td className="border border-gray-400 px-4 py-2">{details.Serial}</td>
                        <td className="border border-gray-400 px-4 py-2">{details.VehicleType}</td>
                        <td className="border border-gray-400 px-4 py-2">{details.Capacity}</td>
                        <td className="border border-gray-400 px-4 py-2">{details.VechicleNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
