import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import { mockAchievements } from "../data/mockData";

export default function Achievements(){
    return (
        <div className="container-px max-w-6xl mx-auto">
            <div className="text-center mb-10 mt-8"><h1 className="text-2xl sm:text-3xl font-bold">Achievements</h1><p className="text-zinc-600 mt-1">Milestones & highlights</p></div>
            <div className="grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {mockAchievements.map(a => (
                    <Card key={a.id} className="hover:scale-[1.01] transition-transform">
                        <div className="text-3xl">{a.icon}</div>
                        <p className="font-semibold mt-2">{a.title}</p>
                        <p className="text-sm text-zinc-600">{a.desc}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
