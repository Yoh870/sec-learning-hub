"use client";

import { useState, useMemo } from "react";
import {
  Shield,
  Terminal,
  Search,
  ExternalLink,
  BookOpen,
  Cpu,
  Radio,
  Eye,
  Server,
  Layers,
  Star,
  Bookmark,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
  Filter
} from "lucide-react";

interface RepoItem {
  id: string;
  name: string;
  owner: string;
  url: string;
  category: "defensive" | "redteam" | "wireless" | "container" | "ai_reversing" | "osint" | "pentest";
  categoryLabel: string;
  description: string;
  tags: string[];
  starsEstimate: string;
  useCase: string;
}

export default function SecLearningHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(["1", "5", "9"]);

  const repos: RepoItem[] = [
    {
      id: "1",
      name: "securityonion",
      owner: "Security-Onion-Solutions",
      url: "https://github.com/Security-Onion-Solutions/securityonion/blob/3/main/README.md",
      category: "defensive",
      categoryLabel: "Defensive & SIEM",
      description: "Free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management.",
      tags: ["SIEM", "IDS/IPS", "Threat Hunting", "Log Management"],
      starsEstimate: "6.2k",
      useCase: "Enterprise network monitoring and incident response in lab environments."
    },
    {
      id: "2",
      name: "WifiForge",
      owner: "blackhillsinfosec",
      url: "https://github.com/blackhillsinfosec/WifiForge",
      category: "wireless",
      categoryLabel: "Wireless & Mobile",
      description: "Wireless network testing tool designed by Black Hills Information Security for authorized Wi-Fi security assessments.",
      tags: ["Wi-Fi", "Wireless", "BHIS", "Pentesting"],
      starsEstimate: "1.4k",
      useCase: "Authorized wireless penetration testing and rogue AP detection training."
    },
    {
      id: "3",
      name: "dockerscan",
      owner: "cr0hn",
      url: "https://github.com/cr0hn/dockerscan",
      category: "container",
      categoryLabel: "Container Security",
      description: "Docker security analysis and vulnerability scanner to audit Docker images and running daemon security.",
      tags: ["Docker", "Containers", "Vulnerabilities", "DevSecOps"],
      starsEstimate: "2.1k",
      useCase: "Container hardening and security auditing during CI/CD pipeline reviews."
    },
    {
      id: "4",
      name: "strix",
      owner: "usestrix",
      url: "https://github.com/usestrix/strix",
      category: "redteam",
      categoryLabel: "Red Teaming",
      description: "Advanced security testing and offensive security automation toolkit for authorized red team engagements.",
      tags: ["RedTeam", "Security Testing", "Automation"],
      starsEstimate: "1.8k",
      useCase: "Simulated adversary emulation and defensive control validation."
    },
    {
      id: "5",
      name: "Awesome-Cellular-Hacking",
      owner: "W00t3k",
      url: "https://github.com/W00t3k/Awesome-Cellular-Hacking",
      category: "wireless",
      categoryLabel: "Wireless & Mobile",
      description: "Curated collection of cellular hacking resources, IMSI catchers, 4G/5G security research, and telecom tools.",
      tags: ["Cellular", "5G", "Telecom", "IMSI Catcher"],
      starsEstimate: "4.5k",
      useCase: "Telecommunication security research and mobile network protocol analysis."
    },
    {
      id: "6",
      name: "T3MP3ST",
      owner: "elder-plinius",
      url: "https://github.com/elder-plinius/T3MP3ST",
      category: "ai_reversing",
      categoryLabel: "AI & Security Research",
      description: "Specialized AI and security research toolkit created by Elder Plinius for vulnerability analysis.",
      tags: ["AI", "Research", "Security", "Automation"],
      starsEstimate: "3.2k",
      useCase: "Exploring LLM-assisted vulnerability discovery and red teaming research."
    },
    {
      id: "7",
      name: "Awesome-Blackhat-Tools",
      owner: "UCYBERS",
      url: "https://github.com/UCYBERS/Awesome-Blackhat-Tools",
      category: "redteam",
      categoryLabel: "Red Teaming",
      description: "Comprehensive compilation of offensive security, exploitation frameworks, and blackhat testing utilities.",
      tags: ["Offensive", "Exploits", "Frameworks", "RedTeam"],
      starsEstimate: "5.8k",
      useCase: "Educational analysis of exploit mechanics and defense evasion testing."
    },
    {
      id: "8",
      name: "osint_toolkit",
      owner: "dev-lu",
      url: "https://github.com/dev-lu/osint_toolkit",
      category: "osint",
      categoryLabel: "OSINT & Intelligence",
      description: "Open-source intelligence gathering toolkit designed to automate reconnaissance and footprinting tasks.",
      tags: ["OSINT", "Reconnaissance", "Footprinting", "Intelligence"],
      starsEstimate: "2.9k",
      useCase: "Gathering publicly available threat intelligence for authorized reconnaissance."
    },
    {
      id: "9",
      name: "GhidraGPT",
      owner: "weirdmachine64",
      url: "https://github.com/weirdmachine64/GhidraGPT",
      category: "ai_reversing",
      categoryLabel: "AI & Security Research",
      description: "AI-assisted reverse engineering plugin for Ghidra combining LLMs to explain decompiled binary code.",
      tags: ["Ghidra", "Reverse Engineering", "AI", "LLM", "Binaries"],
      starsEstimate: "4.1k",
      useCase: "Accelerating binary analysis, malware research, and CTF reverse engineering challenges."
    },
    {
      id: "10",
      name: "sharetrace",
      owner: "hondling",
      url: "https://github.com/hondling/sharetrace",
      category: "osint",
      categoryLabel: "OSINT & Intelligence",
      description: "OSINT link analysis and metadata tracking tool for investigation and footprint verification.",
      tags: ["OSINT", "Metadata", "Tracking", "Analysis"],
      starsEstimate: "1.2k",
      useCase: "Analyzing social media and link metadata during open-source investigations."
    },
    {
      id: "11",
      name: "RedTeam-Tools",
      owner: "A-poc",
      url: "https://github.com/A-poc/RedTeam-Tools",
      category: "redteam",
      categoryLabel: "Red Teaming",
      description: "Curated collection of red teaming scripts, loaders, and utility tools for security assessments.",
      tags: ["RedTeam", "Scripts", "Loaders", "Assessments"],
      starsEstimate: "7.4k",
      useCase: "Studying payload delivery mechanisms and endpoint detection testing."
    },
    {
      id: "12",
      name: "Kali-Linux",
      owner: "aw-junaid",
      url: "https://github.com/aw-junaid/Kali-Linux",
      category: "pentest",
      categoryLabel: "Pentest Distributions",
      description: "Kali Linux resource repository, setup scripts, and penetration testing learning documentation.",
      tags: ["Kali Linux", "Pentest", "Guides", "Tools"],
      starsEstimate: "3.7k",
      useCase: "Setting up penetration testing lab environments and learning standard pentesting tools."
    }
  ];

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesCategory = selectedCategory === "all" || repo.category === selectedCategory;
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        repo.owner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, repos]);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      {/* Standalone Tech Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0f172a]/95 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 shadow-[0_0_20px_rgba(13,148,136,0.4)] text-white">
            <Shield size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-base md:text-lg tracking-tight text-white">SEC-REPO CENTRAL</h1>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                SECURITY LEARNING HUB
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">OFFENSIVE & DEFENSIVE REPOSITORY DASHBOARD</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
            <Bookmark size={14} className="text-teal-400" />
            <span>Saved Tools: {bookmarkedIds.length} / {repos.length}</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-8 space-y-8">
        {/* Hero Section */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-[#0f172a]/90 to-teal-950/40 p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-mono text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              BROWSER TAB ORGANIZER & KNOWLEDGE BASE
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Security Research & Learning Repositories
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              All your saved GitHub learning tools, red teaming toolkits, AI reverse engineering plugins, and defensive SIEM resources unified in one lightning-fast dashboard. No more messy browser tabs.
            </p>
          </div>
        </div>

        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, tags, or authors..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-500 transition-colors shadow-inner"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {[
              { id: "all", label: "All Repos" },
              { id: "defensive", label: "Defensive & SIEM" },
              { id: "redteam", label: "Red Teaming" },
              { id: "wireless", label: "Wireless & Mobile" },
              { id: "ai_reversing", label: "AI & Reversing" },
              { id: "osint", label: "OSINT" },
              { id: "container", label: "Container Security" },
              { id: "pentest", label: "Pentest Guides" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-teal-600 text-white shadow-[0_0_15px_rgba(13,148,136,0.4)] border border-teal-500"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => {
            const isBookmarked = bookmarkedIds.includes(repo.id);
            return (
              <div
                key={repo.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-teal-500/50 p-6 shadow-xl transition-all flex flex-col justify-between space-y-5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-all pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      {repo.categoryLabel}
                    </span>
                    <button
                      onClick={(e) => toggleBookmark(repo.id, e)}
                      className={`p-2 rounded-xl transition-colors ${
                        isBookmarked
                          ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                          : "bg-slate-800 text-slate-500 hover:text-slate-300"
                      }`}
                      title={isBookmarked ? "Bookmarked" : "Bookmark Tool"}
                    >
                      <Bookmark size={14} className={isBookmarked ? "fill-teal-400" : ""} />
                    </button>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-500">{repo.owner} /</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-teal-400 uppercase">Lab Use Case:</span>
                    <p className="text-[11px] text-slate-400">{repo.useCase}</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {repo.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">⭐ {repo.starsEstimate}</span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(13,148,136,0.3)]"
                    >
                      <span>Open GitHub</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <div className="inline-flex p-4 rounded-full bg-slate-900 text-slate-500 border border-slate-800">
              <Search size={32} />
            </div>
            <p className="text-sm text-slate-400">No repositories found matching your search.</p>
          </div>
        )}
      </div>

      {/* Standalone Footer */}
      <footer className="border-t border-slate-800 bg-[#0f172a] py-6 px-6 text-center text-xs text-slate-500 space-y-2 mt-auto">
        <p className="font-bold text-slate-300">SEC-REPO CENTRAL — SECURITY RESEARCH HUB</p>
        <p className="text-[11px] text-slate-600">Centralized GitHub Tools & Learning Dashboard v1.0</p>
      </footer>
    </div>
  );
}
