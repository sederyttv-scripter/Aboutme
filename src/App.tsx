/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function AboutMe() {
  const discordId = "1128896141048684545";
  // The official Discord default avatar calculation for new IDs: (ID >> 22) % 6
  // They do not allow fetching *custom* images by ID alone without a bot token.
  const defaultDiscordAvatarIndex = Number(BigInt(discordId) >> 22n) % 6;
  const fallbackAvatarUrl = `https://cdn.discordapp.com/embed/avatars/${defaultDiscordAvatarIndex}.png`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <img
            src="/profile.png"
            onError={(e) => {
              // Fallback to discord default if the user hasn't uploaded 'profile.png' yet
              (e.target as HTMLImageElement).src = fallbackAvatarUrl;
            }}
            alt="Profile Avatar"
            className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-white/10 shadow-lg"
          />
          <h1 className="text-4xl font-bold">ZscriptX</h1>
          <p className="text-zinc-300">he/him</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10">
            Roblox Developer • Coder
          </span>
        </div>

        {/* About */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-zinc-300 leading-relaxed">
            Hello, this is ZscriptX. I like playing games, especially Roblox. I enjoy making Roblox games and coding systems that feel fun and interactive.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Skills</h2>

          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">
              Luau
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">
              Roblox Studio
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">
              UI Design
            </div>

            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">
              Game Development
            </div>
          </div>
        </div>

        {/* Footer / Socials */}
        <div className="pt-4 border-t border-white/10 flex justify-between text-sm text-zinc-400">
          <span>© {new Date().getFullYear()} ZscriptX</span>
          <span>Roblox Developer Portfolio</span>
        </div>
      </div>
    </div>
  );
}
