import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";



export default function AdminDashboard() {
    const navigate = useNavigate();
  return (
    <div className="container-px max-w-5xl mx-auto mt-6">
      {/* Centered Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">
          Manage users, ads, feedback
        </p>
      </div>

      {/* Cards with reduced spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
  <Card className="cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform">
    <p className="font-semibold">Users</p>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">Add / remove / reset passwords</p>
  </Card>
  <Card className="cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform">
    <p className="font-semibold">Ads Moderation</p>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">Approve or remove posts</p>
  </Card>
  <Card
  onClick={() => navigate("/admin/feedback")}
  className="cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform"
>
  <p className="font-semibold">Feedback Inbox</p>
  <p className="text-sm text-zinc-600 dark:text-zinc-400">View & respond to reports</p>
</Card>
</div>

    </div>
  );
}
