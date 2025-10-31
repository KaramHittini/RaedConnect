import { useParams, Link } from "react-router-dom";
import { mockUsers } from "../data/mockData";
import { motion } from "framer-motion";

export default function VolunteerDetail() {
  const { id } = useParams();
  const user = mockUsers.find(u => String(u.id) === String(id));
  if (!user)
    return (
      <div className="flex justify-center items-center min-h-dvh px-6 py-10">
        Volunteer not found.
      </div>
    );

  return (
    <div className="min-h-dvh flex justify-center px-6 py-10">
      {/* Remove container-px and use direct responsive control */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">

        {/* Back Button */}
        <Link
          to="/volunteers"
          className="inline-block mb-4 ml-4 text-sm font-medium text-white hover:underline"
        >
          &larr; Back to Volunteers
        </Link>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-zinc-300 dark:border-white/20 bg-white dark:bg-zinc-900 p-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <img
              src={user.avatar || "/assets/ImageForTeamMembersAndForVolunteers.webp"}
              alt={user.name}
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {user.university} • {user.major}
              </p>
            </div>
          </div>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300">{user.bio}</p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map(s => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
