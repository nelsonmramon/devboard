import { motion } from 'framer-motion'

function GithubCard({ profile, isDark }) {
  if (!profile) return null

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg w-full max-w-sm mx-auto ${
              isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
      >
        {/* Avatar */}
        <img
            src={profile.avatar_url}
            alt={profile.login}
            className="w-24 h-24 rounded-full border-4 border-blue-400"
        />

        {/* Name & Username */}
        <div className="text-center">
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-blue-400 text-sm">@{profile.login}</p>
        </div>

        {/* Bio */}
        {profile.bio && (
            <p className={`text-center text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {profile.bio}
            </p>
        )}

        {/* Stats */}
        <div className="flex gap-6 w-full justify-center">
          <div className="text-center">
            <p className="text-xl font-bold text-blue-400">{profile.public_repos}</p>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Repos</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-400">{profile.followers}</p>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-blue-400">{profile.following}</p>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Following</p>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
        >
        View GitHub Profile
      </a>
</motion.div>
)
}

export default GithubCard