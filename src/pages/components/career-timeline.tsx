import { careerData } from "./career-data";
import { Building2, Calendar, MapPin } from "lucide-react";

export function CareerTimeline() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Career Timeline</h2>
        <div className="space-y-8">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-gray-200"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
