import React, { useState, useMemo } from 'react';
import { PAN_INDIA_GOV_JOBS, ALL_INDIAN_STATES_PORTALS, type GovernmentJob, type StateRecruitmentPortal } from '../data/governmentJobsData';

export default function GovernmentJobsDirectory() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'portals' | 'qualifications'>('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [selectedQualification, setSelectedQualification] = useState<string>('ALL');
  const [selectedJob, setSelectedJob] = useState<GovernmentJob | null>(null);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return PAN_INDIA_GOV_JOBS.filter((job) => {
      // Category filter
      if (selectedCategory !== 'ALL' && job.category !== selectedCategory) {
        return false;
      }
      // Region/State filter
      if (selectedRegion !== 'ALL') {
        if (selectedRegion === 'Pan-India' && job.region !== 'Pan-India') return false;
        if (selectedRegion !== 'Pan-India' && job.state !== selectedRegion && job.region !== selectedRegion) {
          return false;
        }
      }
      // Qualification filter
      if (selectedQualification !== 'ALL') {
        if (job.qualification !== selectedQualification) return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesOrg = job.organization.toLowerCase().includes(q);
        const matchesShort = job.shortCode.toLowerCase().includes(q);
        const matchesState = job.state.toLowerCase().includes(q);
        const matchesQual = job.qualificationDetail.toLowerCase().includes(q);
        const matchesPosts = job.keyPosts.some((p) => p.toLowerCase().includes(q));
        if (!matchesTitle && !matchesOrg && !matchesShort && !matchesState && !matchesQual && !matchesPosts) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedRegion, selectedQualification]);

  // Portals filtered by region or state query
  const [portalSearch, setPortalSearch] = useState('');
  const [portalRegion, setPortalRegion] = useState('ALL');

  const filteredPortals = useMemo(() => {
    return ALL_INDIAN_STATES_PORTALS.filter((p) => {
      if (portalRegion !== 'ALL' && p.region !== portalRegion) return false;
      if (portalSearch.trim() !== '') {
        const q = portalSearch.toLowerCase();
        const matchesState = p.state.toLowerCase().includes(q);
        const matchesPsc = p.pscName.toLowerCase().includes(q);
        const matchesExams = p.popularExams.some((e) => e.toLowerCase().includes(q));
        if (!matchesState && !matchesPsc && !matchesExams) return false;
      }
      return true;
    });
  }, [portalSearch, portalRegion]);

  // Unique States list for dropdown
  const allStatesList = useMemo(() => {
    const list = Array.from(new Set(PAN_INDIA_GOV_JOBS.map((j) => j.state)));
    return ['ALL', 'Pan-India', ...list.filter((s) => s !== 'Pan-India')];
  }, []);

  return (
    <div className="w-full space-y-6">
      {/* Top Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-border/80 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'jobs'
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          <span>🔥 Latest Jobs &amp; Notifications</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-current font-mono font-bold">
            {PAN_INDIA_GOV_JOBS.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('portals')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'portals'
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          <span>🏛️ All 28 States &amp; UTs Portals</span>
          <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-current font-mono font-bold">
            {ALL_INDIAN_STATES_PORTALS.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('qualifications')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'qualifications'
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        >
          <span>🎓 Jobs by Qualification</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: LIVE JOBS & VACANCIES */}
      {/* ======================================================== */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          {/* Controls Bar (Search + Dropdown Filters) */}
          <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search Box */}
              <div className="relative sm:col-span-2 lg:col-span-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search exam, post, or board..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 sm:py-2 min-h-[42px] rounded-xl bg-background border border-border text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear job search"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Sector / Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 min-h-[42px] rounded-xl bg-background border border-border text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground cursor-pointer"
                >
                  <option value="ALL">All Categories</option>
                  <option value="Central">Central Ministries &amp; SSC</option>
                  <option value="State">State PSC &amp; Subordinate</option>
                  <option value="Railways">Railways (RRB)</option>
                  <option value="Banking">Banking &amp; Insurance</option>
                  <option value="Defence">Defence &amp; Paramilitary</option>
                  <option value="Police">State Police Bharti</option>
                </select>
              </div>

              {/* State / Region Filter */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  State / Scope
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-3 py-2 min-h-[42px] rounded-xl bg-background border border-border text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground cursor-pointer"
                >
                  <option value="ALL">All India &amp; All States</option>
                  <option value="Pan-India">Pan-India (Central)</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Assam">Assam</option>
                  <option value="Delhi (NCT)">Delhi (NCT)</option>
                  <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                </select>
              </div>

              {/* Qualification Filter */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Minimum Qualification
                </label>
                <select
                  value={selectedQualification}
                  onChange={(e) => setSelectedQualification(e.target.value)}
                  className="w-full px-3 py-2 min-h-[42px] rounded-xl bg-background border border-border text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground cursor-pointer"
                >
                  <option value="ALL">All Qualifications</option>
                  <option value="10th Pass">10th Pass (Matriculation)</option>
                  <option value="12th Pass">12th Pass (Higher Secondary)</option>
                  <option value="Graduate">Graduate (Any Degree)</option>
                  <option value="Engineering / ITI">Engineering / ITI / Diploma</option>
                </select>
              </div>
            </div>

            {/* Quick Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-border/50 text-[11px]">
              <span className="text-muted-foreground font-medium mr-1">Popular:</span>
              <button
                type="button"
                onClick={() => { setSelectedCategory('Central'); setSelectedRegion('ALL'); setSelectedQualification('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedCategory === 'Central' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                SSC &amp; Central
              </button>
              <button
                type="button"
                onClick={() => { setSelectedCategory('Railways'); setSelectedRegion('ALL'); setSelectedQualification('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedCategory === 'Railways' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                Railway RRB (11.5K+)
              </button>
              <button
                type="button"
                onClick={() => { setSelectedCategory('Banking'); setSelectedRegion('ALL'); setSelectedQualification('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedCategory === 'Banking' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                Bank PO / Clerk
              </button>
              <button
                type="button"
                onClick={() => { setSelectedCategory('Police'); setSelectedRegion('ALL'); setSelectedQualification('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedCategory === 'Police' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                Police Constable &amp; SI
              </button>
              <button
                type="button"
                onClick={() => { setSelectedQualification('10th Pass'); setSelectedCategory('ALL'); setSelectedRegion('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedQualification === '10th Pass' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                10th Pass Jobs
              </button>
              <button
                type="button"
                onClick={() => { setSelectedQualification('12th Pass'); setSelectedCategory('ALL'); setSelectedRegion('ALL'); }}
                className={`px-2.5 py-1 rounded-lg border transition ${selectedQualification === '12th Pass' ? 'bg-primary text-white border-primary' : 'bg-background hover:bg-muted border-border text-muted-foreground'}`}
              >
                12th Pass Jobs
              </button>
              {(selectedCategory !== 'ALL' || selectedRegion !== 'ALL' || selectedQualification !== 'ALL' || searchQuery !== '') && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedRegion('ALL');
                    setSelectedQualification('ALL');
                    setSearchQuery('');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900 ml-auto font-medium hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Summary Count */}
          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <div>
              Showing <span className="font-bold text-foreground">{filteredJobs.length}</span> active job notifications
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Updated for 2026 Examination Calendar</span>
            </div>
          </div>

          {/* Grid of Job Cards */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border/80 rounded-2xl p-8 space-y-3">
              <div className="text-3xl">🔍</div>
              <div className="font-bold text-foreground text-base">No notifications matched your filters</div>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Try clearing your search keyword or changing the category/qualification filter to see more government jobs.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSelectedRegion('ALL');
                  setSelectedQualification('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold shadow-xs cursor-pointer"
              >
                Show All Available Jobs
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
                          {job.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-muted text-foreground border border-border">
                          {job.state}
                        </span>
                      </div>
                      {job.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 animate-pulse">
                          {job.badge}
                        </span>
                      )}
                    </div>

                    {/* Job Title */}
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {job.title}
                      </h3>
                      <div className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                        {job.organization}
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-muted/40 border border-border/60 text-xs">
                      <div>
                        <div className="text-[10px] text-muted-foreground font-semibold">Vacancies:</div>
                        <div className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                          {job.vacancies}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground font-semibold">Qualification:</div>
                        <div className="font-semibold text-foreground truncate" title={job.qualificationDetail}>
                          {job.qualification}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground font-semibold">Last Date:</div>
                        <div className="font-medium text-foreground text-[11px]">
                          {job.lastDate}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground font-semibold">Age Limit:</div>
                        <div className="font-medium text-foreground text-[11px] truncate" title={job.ageLimit}>
                          {job.ageLimit.split('(')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {job.notificationSummary}
                    </p>

                    {/* Specs Preview Strip */}
                    <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>Sign Rule: <strong className="text-foreground font-mono">{job.signatureSpecs.fileSize}</strong></span>
                      <span>Photo: <strong className="text-foreground font-mono">{job.photoSpecs.fileSize}</strong></span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 mt-3 border-t border-border/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 px-3 py-2 rounded-xl text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground border border-border transition text-center cursor-pointer"
                    >
                      Full Details
                    </button>

                    <a
                      href={`/${job.toolPresetSlug}/`}
                      className="flex-1 px-3 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition text-center shadow-xs cursor-pointer flex items-center justify-center gap-1"
                      title={job.toolLabel}
                    >
                      <span>Resize Sign</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: ALL 28 STATES & UTs PORTALS DIRECTORY */}
      {/* ======================================================== */}
      {activeTab === 'portals' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search state (e.g. Maharashtra, UP)..."
                value={portalSearch}
                onChange={(e) => setPortalSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 sm:py-2 min-h-[42px] rounded-xl bg-background border border-border text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
              />
              {portalSearch && (
                <button
                  type="button"
                  onClick={() => setPortalSearch('')}
                  aria-label="Clear state search"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              <span className="text-muted-foreground text-[11px] font-medium mr-1">Filter Region:</span>
              {['ALL', 'North', 'South', 'East', 'West', 'Central', 'North-East'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setPortalRegion(r)}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition cursor-pointer ${
                    portalRegion === r
                      ? 'bg-primary text-white border-primary'
                      : 'bg-muted/40 hover:bg-muted border-border text-muted-foreground'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Portals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredPortals.map((p) => (
              <div
                key={p.state}
                className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <div>
                    <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                      <span>{p.state}</span>
                      <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {p.capital}
                      </span>
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{p.description}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary shrink-0">
                    {p.region}
                  </span>
                </div>

                {/* Recruitment Bodies Table */}
                <div className="space-y-2 text-xs">
                  {/* PSC */}
                  <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-muted/30 border border-border/50">
                    <div>
                      <div className="font-semibold text-foreground">{p.pscName}</div>
                      <div className="text-[10px] text-muted-foreground">State Public Service Commission (Group A &amp; B)</div>
                    </div>
                    <a
                      href={p.pscUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold text-[11px] transition shrink-0 inline-flex items-center gap-1"
                    >
                      <span>Portal</span>
                      <span className="text-[9px]">↗</span>
                    </a>
                  </div>

                  {/* Subordinate Board */}
                  {p.subordinateBoardName && (
                    <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-muted/30 border border-border/50">
                      <div>
                        <div className="font-semibold text-foreground">{p.subordinateBoardName}</div>
                        <div className="text-[10px] text-muted-foreground">Subordinate Staff &amp; Clerical Selection</div>
                      </div>
                      {p.subordinateBoardUrl && (
                        <a
                          href={p.subordinateBoardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold text-[11px] transition shrink-0 inline-flex items-center gap-1"
                        >
                          <span>Portal</span>
                          <span className="text-[9px]">↗</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Police Board */}
                  {p.policeBoardName && (
                    <div className="flex items-start justify-between gap-3 p-2 rounded-xl bg-muted/30 border border-border/50">
                      <div>
                        <div className="font-semibold text-foreground">{p.policeBoardName}</div>
                        <div className="text-[10px] text-muted-foreground">Uniformed Services, SI &amp; Constables</div>
                      </div>
                      {p.policeBoardUrl && (
                        <a
                          href={p.policeBoardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold text-[11px] transition shrink-0 inline-flex items-center gap-1"
                        >
                          <span>Portal</span>
                          <span className="text-[9px]">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Popular Exams Tags */}
                <div className="pt-2 border-t border-border/60">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Major Competitive Exams
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {p.popularExams.map((exam) => (
                      <span
                        key={exam}
                        className="px-2 py-0.5 rounded-md text-[10px] bg-background border border-border text-foreground font-medium"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: JOBS BY QUALIFICATION */}
      {/* ======================================================== */}
      {activeTab === 'qualifications' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 10th Pass */}
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg">
                10th
              </div>
              <h3 className="font-bold text-base text-foreground">Matriculation (10th Pass)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Entry-level government opportunities with massive vacancy counts, straightforward syllabus, and early pension security.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground font-medium pt-2 border-t border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> SSC MTS &amp; Havaldar (8,000+ Posts)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> SSC GD Constable in CAPFs (39,000+ Posts)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> India Post GDS (44,000+ Merit Posts)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> Railway Group D (Trackman, Helper)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-500">✓</span> State Police Constables (All States)
                </li>
              </ul>
              <button
                type="button"
                onClick={() => { setActiveTab('jobs'); setSelectedQualification('10th Pass'); }}
                className="w-full mt-2 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition text-center cursor-pointer"
              >
                Browse 10th Pass Jobs →
              </button>
            </div>

            {/* 12th Pass */}
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                12th
              </div>
              <h3 className="font-bold text-base text-foreground">Higher Secondary (12th Pass)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Clerical, secretarial, revenue staff, and defense academy entries right after completing school board exams.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground font-medium pt-2 border-t border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500">✓</span> SSC CHSL (LDC, DEO, Junior Assistant)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500">✓</span> RRB NTPC Undergraduate (Clerks &amp; Typists)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500">✓</span> NDA &amp; Naval Academy (UPSC Defence Officer)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500">✓</span> State Subordinate Lekhpal &amp; Patwari
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-blue-500">✓</span> Indian Air Force Agniveervayu
                </li>
              </ul>
              <button
                type="button"
                onClick={() => { setActiveTab('jobs'); setSelectedQualification('12th Pass'); }}
                className="w-full mt-2 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition text-center cursor-pointer"
              >
                Browse 12th Pass Jobs →
              </button>
            </div>

            {/* Graduate */}
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
                UG
              </div>
              <h3 className="font-bold text-base text-foreground">Graduates (Any Degree)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Elite administrative, managerial, and officer-cadre examinations across Central ministries, state governments, and banks.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground font-medium pt-2 border-t border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-500">✓</span> UPSC Civil Services (IAS, IPS, IFS)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-500">✓</span> SSC CGL (Income Tax, CBI, ASO)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-500">✓</span> IBPS &amp; SBI PO / Clerk (Public Banks)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-500">✓</span> State PSC Combined Services (PCS / KAS / MPSC)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-purple-500">✓</span> Railway Station Master &amp; Goods Manager
                </li>
              </ul>
              <button
                type="button"
                onClick={() => { setActiveTab('jobs'); setSelectedQualification('Graduate'); }}
                className="w-full mt-2 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition text-center cursor-pointer"
              >
                Browse Graduate Jobs →
              </button>
            </div>

            {/* Technical / Engineering */}
            <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
                ENG
              </div>
              <h3 className="font-bold text-base text-foreground">Engineering &amp; ITI / Diploma</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialized technical positions in core infrastructure, defense R&amp;D, space research, and Navratna/Maharatna PSUs.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground font-medium pt-2 border-t border-border/50">
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-500">✓</span> RRB ALP &amp; Technician Grade 1/3
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-500">✓</span> SSC Junior Engineer (JE - Civil/Elec/Mech)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-500">✓</span> DRDO &amp; ISRO Scientist / Tech Assistant
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-500">✓</span> GATE PSU Trainees (NTPC, ONGC, IOCL, SAIL)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-amber-500">✓</span> State Assistant Engineer (AE / JE)
                </li>
              </ul>
              <button
                type="button"
                onClick={() => { setActiveTab('jobs'); setSelectedQualification('Engineering / ITI'); }}
                className="w-full mt-2 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition text-center cursor-pointer"
              >
                Browse Technical Jobs →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* DETAILED JOB MODAL DIALOG */}
      {/* ======================================================== */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div
            className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-5 sm:p-6 space-y-5"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-border/80 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                    {selectedJob.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-muted text-foreground">
                    {selectedJob.state}
                  </span>
                  {selectedJob.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {selectedJob.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-foreground">
                  {selectedJob.title}
                </h3>
                <p className="text-xs text-muted-foreground">{selectedJob.organization}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="w-8 h-8 rounded-xl bg-muted hover:bg-muted/80 text-foreground flex items-center justify-center text-sm font-bold transition shrink-0 cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/60 text-xs">
              <div>
                <div className="text-[10px] text-muted-foreground">Total Vacancies</div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{selectedJob.vacancies}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Apply Deadline</div>
                <div className="font-semibold text-foreground text-xs">{selectedJob.lastDate}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Age Limit</div>
                <div className="font-semibold text-foreground text-xs">{selectedJob.ageLimit.split('(')[0]}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">App Fee</div>
                <div className="font-semibold text-foreground text-xs truncate" title={selectedJob.applicationFee}>
                  {selectedJob.applicationFee.split('(')[0]}
                </div>
              </div>
            </div>

            {/* Educational Qualification */}
            <div className="space-y-1">
              <div className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                Educational Qualification
              </div>
              <div className="p-3 rounded-xl bg-background border border-border/80 text-xs text-foreground leading-relaxed">
                {selectedJob.qualificationDetail}
              </div>
            </div>

            {/* Key Posts & Selection Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <div className="font-bold uppercase tracking-wider text-muted-foreground text-[10px]">
                  Key Posts &amp; Cadres
                </div>
                <ul className="space-y-1 bg-background p-3 rounded-xl border border-border/80">
                  {selectedJob.keyPosts.map((p) => (
                    <li key={p} className="flex items-start gap-1.5 text-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="font-bold uppercase tracking-wider text-muted-foreground text-[10px]">
                  Selection Process
                </div>
                <ul className="space-y-1 bg-background p-3 rounded-xl border border-border/80">
                  {selectedJob.selectionSteps.map((s, idx) => (
                    <li key={s} className="flex items-start gap-1.5 text-foreground">
                      <span className="font-bold text-primary">{idx + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strict Application Photo & Signature Specifications */}
            <div className="space-y-2 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-foreground">
                <span className="text-primary">📌</span>
                <span>Official Document Upload Rules for this Portal</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-2.5 rounded-lg bg-card border border-border">
                  <div className="font-bold text-primary text-[11px] mb-1">Photograph Requirement</div>
                  <div className="space-y-0.5 text-[11px] text-muted-foreground">
                    <div>Size: <strong className="text-foreground font-mono">{selectedJob.photoSpecs.fileSize}</strong></div>
                    <div>Dimensions: <strong className="text-foreground font-mono">{selectedJob.photoSpecs.dimensions}</strong></div>
                    <div className="text-[10px] mt-1 italic">{selectedJob.photoSpecs.note}</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-card border border-border">
                  <div className="font-bold text-primary text-[11px] mb-1">Signature Requirement</div>
                  <div className="space-y-0.5 text-[11px] text-muted-foreground">
                    <div>Size: <strong className="text-foreground font-mono">{selectedJob.signatureSpecs.fileSize}</strong></div>
                    <div>Dimensions: <strong className="text-foreground font-mono">{selectedJob.signatureSpecs.dimensions}</strong></div>
                    <div className="text-[10px] mt-1 italic">{selectedJob.signatureSpecs.note}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <a
                href={selectedJob.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs transition text-center border border-border inline-flex items-center justify-center gap-1"
              >
                <span>Official Portal</span>
                <span className="text-[10px]">↗</span>
              </a>

              <a
                href={`/${selectedJob.toolPresetSlug}/`}
                className="flex-1 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs transition text-center shadow-md shadow-primary/20 inline-flex items-center justify-center gap-1"
              >
                <span>{selectedJob.toolLabel}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
