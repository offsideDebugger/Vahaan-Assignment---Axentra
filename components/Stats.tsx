import StatCard from "./StatsCard"
export default function Stats(){
  return <div id="stats" className="py-12 sm:py-16 md:py-20 px-6 md:p-20 scroll-mt-auto">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <StatCard
      end={250}
      label="Global Clients"
      description="Trusted by businesses worldwide."
    />
  
    <StatCard
      end={40}
      label="Countries Served"
      description="Strong international presence."
    />
  
    <StatCard
      end={15}
      label="Years Experience"
      description="Delivering excellence since inception."
    />
  
    <StatCard
      end={500}
      label="Projects Completed"
      description="Successful projects across industries."
    />
  </div>
    </div>
}