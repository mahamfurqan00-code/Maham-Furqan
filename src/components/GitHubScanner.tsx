import React, { useState } from 'react';
import { 
  Github, RefreshCw, Check, Eye, EyeOff, Search, Plus, 
  ExternalLink, GitFork, Star, Code2, CheckCircle2, AlertCircle,
  SlidersHorizontal, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GitHubRepo } from '../types';
import { PERSONAL_INFO } from '../data';
import Card3D from './Card3D';

interface GitHubScannerProps {
  repos: GitHubRepo[];
  onToggleRepo: (repoId: number) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onResetDefaults: () => void;
  onAddCustomRepo: (repo: GitHubRepo) => void;
  onRefreshFromGitHub: () => Promise<void>;
  isScanning: boolean;
  lastScannedTime: string;
}

export default function GitHubScanner({
  repos,
  onToggleRepo,
  onSelectAll,
  onDeselectAll,
  onResetDefaults,
  onAddCustomRepo,
  onRefreshFromGitHub,
  isScanning,
  lastScannedTime,
}: GitHubScannerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [filterVisibility, setFilterVisibility] = useState<'all' | 'included' | 'excluded'>('all');
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customRepoName, setCustomRepoName] = useState('');
  const [customRepoDesc, setCustomRepoDesc] = useState('');
  const [customRepoLang, setCustomRepoLang] = useState('Python');
  const [customRepoUrl, setCustomRepoUrl] = useState('');
  const [addError, setAddError] = useState('');
  const [scanMessage, setScanMessage] = useState<string | null>(null);

  // Compute stats
  const totalRepos = repos.length;
  const includedCount = repos.filter(r => r.isIncluded).length;
  const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((acc, r) => acc + (r.forks_count || 0), 0);

  // Extract unique languages
  const languages = ['all', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]))];

  // Filtered repos
  const filteredRepos = repos.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang = selectedLanguage === 'all' || r.language === selectedLanguage;
    const matchesVis = filterVisibility === 'all' || 
      (filterVisibility === 'included' && r.isIncluded) || 
      (filterVisibility === 'excluded' && !r.isIncluded);
    return matchesSearch && matchesLang && matchesVis;
  });

  const handleScanClick = async () => {
    setScanMessage('Scanning live GitHub account @' + PERSONAL_INFO.githubUsername + '...');
    try {
      await onRefreshFromGitHub();
      setScanMessage('Successfully synchronized repositories from GitHub!');
      setTimeout(() => setScanMessage(null), 4000);
    } catch {
      setScanMessage('Scan complete (rate-limit safe fallback active).');
      setTimeout(() => setScanMessage(null), 4000);
    }
  };

  const handleAddCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customRepoName.trim()) {
      setAddError('Repository name is required');
      return;
    }

    const newRepo: GitHubRepo = {
      id: Date.now(),
      name: customRepoName.trim(),
      full_name: `${PERSONAL_INFO.githubUsername}/${customRepoName.trim()}`,
      description: customRepoDesc.trim() || 'Custom repository added via portfolio manager.',
      html_url: customRepoUrl.trim() || `https://github.com/${PERSONAL_INFO.githubUsername}/${customRepoName.trim()}`,
      language: customRepoLang,
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      topics: ['custom', customRepoLang.toLowerCase()],
      default_branch: 'main',
      isIncluded: true,
    };

    onAddCustomRepo(newRepo);
    setCustomRepoName('');
    setCustomRepoDesc('');
    setCustomRepoUrl('');
    setAddError('');
    setShowAddCustom(false);
  };

  return (
    <div id="github-scanner" className="rounded-3xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient with peach tones */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB923C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FDA4AF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar / Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] mb-2 uppercase tracking-widest">
            <Github className="w-4 h-4" />
            <span>GitHub Sync & Repository Manager</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-3">
            <span>Live Account Scanner</span>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-normal text-[#FED7AA] hover:underline transition-colors flex items-center gap-1 bg-[#FB923C]/10 px-3 py-1 rounded-full border border-[#FB923C]/30"
              title="Open GitHub Profile"
            >
              <span>@{PERSONAL_INFO.githubUsername}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </h3>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1.5 max-w-2xl font-sans">
            Automatically scan my GitHub account to synchronize public repositories. Add or remove projects dynamically to customize what is displayed on this portfolio in real time.
          </p>
        </div>

        {/* Scan Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleScanClick}
            disabled={isScanning}
            className="px-5 py-3 rounded-full text-xs font-bold bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 hover:opacity-95 active:scale-95 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer disabled:opacity-50 font-black"
          >
            <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning GitHub...' : 'Scan GitHub Account'}</span>
          </button>

          <button
            onClick={() => setShowAddCustom(!showAddCustom)}
            className="px-4 py-3 rounded-full text-xs font-bold border border-[#FB923C]/30 bg-white/5 text-[#FED7AA] hover:bg-[#FB923C]/10 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </button>
        </div>
      </div>

      {/* Status Feedback Banner */}
      <AnimatePresence>
        {scanMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-10 mt-4 p-3.5 rounded-2xl bg-[#FB923C]/10 border border-[#FB923C]/30 text-white flex items-center justify-between text-xs font-bold"
          >
            <div className="flex items-center gap-2 text-[#FED7AA]">
              <CheckCircle2 className="w-4 h-4 text-[#FB923C]" />
              <span>{scanMessage}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Last scanned: {lastScannedTime}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Metrics Row */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-[11px] font-mono text-[#FED7AA]/70 uppercase block">Total Repositories</span>
          <span className="text-2xl font-black text-white font-mono mt-1 block">{totalRepos}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-[11px] font-mono text-[#FB923C] uppercase block">Active in Portfolio</span>
          <span className="text-2xl font-black text-[#FB923C] font-mono mt-1 block">
            {includedCount} <span className="text-xs font-normal text-slate-400">/ {totalRepos}</span>
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-[11px] font-mono text-[#FED7AA]/70 uppercase block">Languages Detected</span>
          <span className="text-2xl font-black text-white font-mono mt-1 block">{languages.length - 1}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-[11px] font-mono text-[#FED7AA]/70 uppercase block">Sync Mode</span>
          <span className="text-xs font-bold text-emerald-400 mt-2 flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live GitHub API
          </span>
        </div>
      </div>

      {/* Add Custom Repo Modal / Accordion */}
      <AnimatePresence>
        {showAddCustom && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAddCustomSubmit}
            className="relative z-10 mb-6 p-5 rounded-2xl bg-[#192231] border border-white/15 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#FB923C]" />
                <span>Add / Link Custom GitHub Repository</span>
              </h4>
              <button
                type="button"
                onClick={() => setShowAddCustom(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            </div>

            {addError && (
              <p className="text-xs text-rose-400 flex items-center gap-1 font-bold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{addError}</span>
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">Repository Name *</label>
                <input
                  type="text"
                  value={customRepoName}
                  onChange={(e) => setCustomRepoName(e.target.value)}
                  placeholder="e.g. Real-Time-Data-Pipeline"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs outline-none focus:border-[#FB923C]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-300 block mb-1">Primary Language</label>
                <select
                  value={customRepoLang}
                  onChange={(e) => setCustomRepoLang(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs outline-none focus:border-[#FB923C]"
                >
                  <option value="Python">Python</option>
                  <option value="Jupyter Notebook">Jupyter Notebook</option>
                  <option value="HTML">HTML</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="AppSheet">AppSheet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">Description</label>
              <input
                type="text"
                value={customRepoDesc}
                onChange={(e) => setCustomRepoDesc(e.target.value)}
                placeholder="Brief summary of repository functionality..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs outline-none focus:border-[#FB923C]"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 block mb-1">GitHub URL (Optional)</label>
              <input
                type="url"
                value={customRepoUrl}
                onChange={(e) => setCustomRepoUrl(e.target.value)}
                placeholder={`https://github.com/${PERSONAL_INFO.githubUsername}/your-repo`}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs outline-none focus:border-[#FB923C]"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 text-xs font-black transition-all"
            >
              Add to Portfolio Showcase
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Filter and Search Controls */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-grow max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GitHub repositories by name or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs outline-none focus:border-[#FB923C] placeholder-slate-400"
          />
        </div>

        {/* Dropdowns & Visibility filter */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Language filter dropdown */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs font-medium outline-none cursor-pointer focus:border-[#FB923C]"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang === 'all' ? 'All Languages' : lang}
              </option>
            ))}
          </select>

          {/* Visibility toggle dropdown */}
          <select
            value={filterVisibility}
            onChange={(e) => setFilterVisibility(e.target.value as any)}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs font-medium outline-none cursor-pointer focus:border-[#FB923C]"
          >
            <option value="all">All Projects ({repos.length})</option>
            <option value="included">Active ({includedCount})</option>
            <option value="excluded">Hidden ({totalRepos - includedCount})</option>
          </select>

          {/* Bulk actions */}
          <button
            onClick={onSelectAll}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            title="Include all in portfolio"
          >
            Include All
          </button>
          <button
            onClick={onDeselectAll}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            title="Hide all from portfolio"
          >
            Hide All
          </button>
          <button
            onClick={onResetDefaults}
            className="px-3 py-2 rounded-xl bg-white/5 hover:bg-[#FB923C]/10 text-[#FB923C] text-xs font-medium border border-[#FB923C]/30 transition-colors cursor-pointer"
            title="Reset to default selection"
          >
            Reset Defaults
          </button>
        </div>
      </div>

      {/* Repository Cards Grid with 3D Rotation */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[580px] overflow-y-auto pr-1 no-scrollbar">
        {filteredRepos.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400">
            <Github className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-sm font-bold">No repositories matched your filter</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the filters or add a new repository.</p>
          </div>
        ) : (
          filteredRepos.map((repo) => (
            <Card3D
              key={repo.id}
              maxTilt={8}
              className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                repo.isIncluded
                  ? 'bg-[#192231]/80 border-white/10 hover:border-[#FB923C]/50 shadow-md'
                  : 'bg-slate-900/50 border-white/5 opacity-60 hover:opacity-90'
              }`}
            >
              <div>
                {/* Header row: Status toggle + GitHub external icon */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {/* Visibility Toggle Button */}
                  <button
                    onClick={() => onToggleRepo(repo.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                      repo.isIncluded
                        ? 'bg-[#FB923C]/15 text-[#FED7AA] border border-[#FB923C]/30'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white'
                    }`}
                    title={repo.isIncluded ? 'Click to remove from portfolio' : 'Click to add to portfolio'}
                  >
                    {repo.isIncluded ? (
                      <>
                        <Eye className="w-3 h-3 text-[#FB923C]" />
                        <span>Visible in Portfolio</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 text-slate-400" />
                        <span>Hidden</span>
                      </>
                    )}
                  </button>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Open on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Repo Title */}
                <h4 className="font-display font-bold text-sm text-white hover:text-[#FB923C] transition-colors break-words">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h4>

                {/* Description */}
                <p className="text-xs text-[#CBD5E1] mt-2 line-clamp-2 leading-relaxed font-sans">
                  {repo.description || 'Verified repository from @' + PERSONAL_INFO.githubUsername}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#FED7AA] font-mono">
                <span className="flex items-center gap-1.5 text-[#FB923C]">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{repo.language || 'Code'}</span>
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Star className="w-3 h-3" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </Card3D>
          ))
        )}
      </div>

      <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
        <p className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#FB923C]" />
          <span>Toggle visibility above to dynamically customize which projects appear in the Featured Portfolio section.</span>
        </p>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FB923C] hover:underline font-mono text-[11px] flex items-center gap-1 font-bold"
        >
          <span>View all repositories on GitHub</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
