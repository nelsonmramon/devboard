import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import GithubCard from './components/GithubCard.jsx'
import { getGithubProfile } from './services/githubService'

function App() {
    const [isDark, setIsDark] = useState(true)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const toggleTheme = () => setIsDark(!isDark)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getGithubProfile('nelsonmramon')
                setProfile(data)
            } catch (err) {
                setError('Failed to fetch GitHub profile')
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [])

    return (
        <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="max-w-6xl mx-auto px-6 py-12">
                {loading && (
                    <p className="text-center text-gray-400">Loading profile...</p>
                )}
                {error && (
                    <p className="text-center text-red-400">{error}</p>
                )}
                {!loading && !error && (
                    <GithubCard profile={profile} isDark={isDark} />
                )}
            </main>
        </div>
    )
}

export default App