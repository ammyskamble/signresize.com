import { useEffect, useState, type FormEvent } from 'react';
import { ArrowDownToLine, ArrowLeft, Check, LockKeyhole, LogOut, MessageSquare, RefreshCw, Search, Smile, AlertCircle } from 'lucide-react';
import '../styles/feedback-admin.css';

interface FeedbackRecord {
  id: string; created_at: string; updated_at: string; kind: string; rating: string;
  category: string; message: string; email: string; page: string; tool: string;
  device: string; browser: string; version: string; source: string; status: string; notes: string;
}
interface DashboardData {
  records: FeedbackRecord[];
  summary: { total: number; good: number; okay: number; difficult: number; problems: number };
  tools: { tool: string; count: number }[];
  versions: { version: string; count: number }[];
  trend: { date: string; total: number; good: number; rated: number }[];
  page: number; pageSize: number;
}
const labels: Record<string, string> = { good: 'Good', okay: 'Okay', difficult: 'Difficult', experience: 'Experience', problem: 'Problem', suggestion: 'Suggestion', new: 'New', investigating: 'Investigating', fixed: 'Fixed' };
const initialFilters = { days: '30', status: '', rating: '', kind: '', device: '', tool: '', version: '', q: '' };
function params(filters: typeof initialFilters) { return new URLSearchParams(Object.entries(filters).filter(([, value]) => value)); }
function date(value: string) { return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date(value)); }

function RecordCard({ record, onUpdate }: { record: FeedbackRecord; onUpdate: (id: string, status: string, notes: string) => Promise<void> }) {
  const [status, setStatus] = useState(record.status);
  const [notes, setNotes] = useState(record.notes);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  return <article className="fa-record">
    <div className="fa-record-heading"><div className="fa-pills"><span className={`fa-pill fa-${record.rating || record.kind}`}>{labels[record.rating] || labels[record.kind]}</span><span className={`fa-pill fa-status-${record.status}`}>{labels[record.status]}</span><strong>{record.tool || 'Website'}</strong></div><time dateTime={record.created_at}>{date(record.created_at)} IST</time></div>
    {record.category && <h3>{record.category}</h3>}
    <p className="fa-message">{record.message || 'Rating only. No comment added.'}</p>
    <div className="fa-record-meta"><span>{record.device} · {record.browser}</span><span>{record.page}</span><span>{labels[record.kind]} · {record.source}</span></div>
    <details className="fa-review"><summary>Details &amp; review</summary><div className="fa-review-fields">
      <dl><div><dt>Reply email</dt><dd>{record.email || 'Not provided'}</dd></div><div><dt>Website version</dt><dd>{record.version || 'Not provided'}</dd></div><div><dt>Record</dt><dd>{record.id}</dd></div></dl>
      <label>Status<select value={status} onChange={event => setStatus(event.target.value)}><option value="new">New</option><option value="investigating">Investigating</option><option value="fixed">Fixed</option></select></label>
      <label>Private review notes<textarea rows={3} maxLength={2000} value={notes} onChange={event => setNotes(event.target.value)} placeholder="What needs to change? Which release fixed it?" /></label>
      {error && <p className="fa-error" role="alert">{error}</p>}
      <button type="button" disabled={saving} className="fa-button fa-primary" onClick={async () => { setSaving(true); setError(''); try { await onUpdate(record.id, status, notes); } catch (error) { setError(error instanceof Error ? error.message : 'Could not update feedback.'); } finally { setSaving(false); } }}><Check size={15} />{saving ? 'Saving…' : 'Save review'}</button>
    </div></details>
  </article>;
}

export default function FeedbackAdmin() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState(initialFilters);
  const [applied, setApplied] = useState(initialFilters);
  const [page, setPage] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/feedback-admin/session/', { cache: 'no-store', signal: controller.signal }).then(async response => {
      if (!response.ok && response.status !== 401) { const body = await response.json().catch(() => ({})); throw new Error(body.error || 'Could not connect to feedback storage.'); }
      setAuthenticated(response.ok);
    }).catch(error => { if (error.name !== 'AbortError') { setError(error.message); setAuthenticated(false); } });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    const controller = new AbortController();
    const query = params(applied); query.set('page', String(page));
    setLoading(true); setError('');
    fetch(`/api/feedback-admin/records/?${query}`, { cache: 'no-store', signal: controller.signal }).then(async response => {
      if (response.status === 401) { setAuthenticated(false); setData(null); throw new Error('Your session expired. Please sign in again.'); }
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Could not load feedback.');
      setData(body);
    }).catch(error => { if (error.name !== 'AbortError') setError(error.message); }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [authenticated, applied, page, refresh]);

  async function login(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/feedback-admin/login/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
      setPassword('');
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Could not sign in.');
      setAuthenticated(true);
    } catch (error) { setError(error instanceof Error ? error.message : 'Could not sign in.'); } finally { setBusy(false); }
  }

  async function update(id: string, status: string, notes: string) {
    const response = await fetch(`/api/feedback-admin/records/${id}/`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status, notes }) });
    const body = await response.json();
    if (response.status === 401) { setAuthenticated(false); setData(null); }
    if (!response.ok) throw new Error(body.error || 'Could not update feedback.');
    setRefresh(value => value + 1);
  }

  async function exportCsv() {
    setBusy(true); setError('');
    try {
      const response = await fetch(`/api/feedback-admin/export/?${params(applied)}`, { cache: 'no-store' });
      if (!response.ok) { const body = await response.json(); throw new Error(body.error || 'Could not export feedback.'); }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a'); link.href = url; link.download = `signresize-feedback-${new Date().toISOString().slice(0, 10)}.csv`; link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) { setError(error instanceof Error ? error.message : 'Could not export feedback.'); } finally { setBusy(false); }
  }

  if (authenticated === null) return <div className="fa-loading" role="status">Connecting to your feedback inbox…</div>;
  if (!authenticated) return <main className="fa-login-wrap"><a href="/" className="fa-back"><ArrowLeft size={15} />Back to SignResize</a><section className="fa-login"><div className="fa-lock"><LockKeyhole size={26} /></div><p className="fa-eyebrow">SIGNRESIZE · PRIVATE WORKSPACE</p><h1>Your visitors.<br />In their own words.</h1><p>Sign in to review feedback and decide what to improve next.</p><form onSubmit={login}><label htmlFor="feedback-admin-password">Administrator password</label><input id="feedback-admin-password" type="password" autoComplete="current-password" required maxLength={200} value={password} onChange={event => setPassword(event.target.value)} />{error && <p className="fa-error" role="alert">{error}</p>}<button className="fa-button fa-primary" type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Open feedback inbox'}</button></form><small>Your session expires after 12 hours.</small></section></main>;

  const rated = data ? data.summary.good + data.summary.okay + data.summary.difficult : 0;
  return <div className="fa-shell">
    <header className="fa-header"><a href="/" className="fa-brand"><span>✎</span>SignResize <small>Feedback inbox</small></a><div className="fa-header-actions"><span className="fa-private"><LockKeyhole size={12} />Private</span><button type="button" className="fa-button" onClick={async () => { setError(''); try { const response = await fetch('/api/feedback-admin/logout/', { method: 'POST' }); if (!response.ok) throw new Error('Could not sign out. Please try again.'); setData(null); setAuthenticated(false); } catch (error) { setError(error instanceof Error ? error.message : 'Could not sign out.'); } }}><LogOut size={14} />Sign out</button></div></header>
    <main className="fa-main"><div className="fa-page-heading"><div><p className="fa-eyebrow">LISTEN. UNDERSTAND. IMPROVE.</p><h1>Visitor feedback</h1><p>Find the friction. Keep what works. Make the next visit better.</p></div><div className="fa-actions"><button type="button" className="fa-button" disabled={loading} onClick={() => setRefresh(value => value + 1)}><RefreshCw size={15} />Refresh</button><button type="button" className="fa-button fa-primary" disabled={busy || !data} onClick={exportCsv}><ArrowDownToLine size={15} />Export CSV</button></div></div>
      <section className="fa-stats" aria-label="Feedback summary"><div><MessageSquare size={19} /><span>Total responses</span><strong>{data?.summary.total ?? '—'}</strong><small>In the selected filters</small></div><div><Smile size={19} /><span>Positive ratings</span><strong>{rated && data ? `${Math.round(data.summary.good / rated * 100)}%` : '—'}</strong><small>{data?.summary.good ?? 0} Good · {data?.summary.okay ?? 0} Okay</small></div><div><AlertCircle size={19} /><span>Difficult experiences</span><strong>{data?.summary.difficult ?? '—'}</strong><small>Visitors who rated it difficult</small></div><div><Search size={19} /><span>Problem reports</span><strong>{data?.summary.problems ?? '—'}</strong><small>Ratings and detailed reports</small></div></section>
      <form className="fa-filters" onSubmit={event => { event.preventDefault(); setPage(0); setApplied({ ...filters }); }}>
        <label>Date range<select value={filters.days} onChange={event => setFilters({ ...filters, days: event.target.value })}><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="365">Last year</option><option value="all">All time</option></select></label>
        {(['status', 'rating', 'kind', 'device'] as const).map(field => <label key={field}>{field === 'kind' ? 'Feedback type' : field}<select value={filters[field]} onChange={event => setFilters({ ...filters, [field]: event.target.value })}><option value="">All {field === 'kind' ? 'types' : field === 'device' ? 'devices' : field === 'status' ? 'statuses' : 'ratings'}</option>{(field === 'status' ? ['new', 'investigating', 'fixed'] : field === 'rating' ? ['good', 'okay', 'difficult'] : field === 'kind' ? ['experience', 'problem', 'suggestion'] : ['mobile', 'desktop']).map(value => <option key={value} value={value}>{labels[value] || value}</option>)}</select></label>)}
        <label>Tool<select value={filters.tool} onChange={event => setFilters({ ...filters, tool: event.target.value })}><option value="">All tools</option>{data?.tools.map(row => <option key={row.tool} value={row.tool}>{row.tool || 'Website'} ({row.count})</option>)}</select></label>
        <label>Website version<select value={filters.version} onChange={event => setFilters({ ...filters, version: event.target.value })}><option value="">All versions</option>{data?.versions.map(row => <option key={row.version} value={row.version}>{row.version || 'Unknown'}</option>)}</select></label>
        <label className="fa-search">Search<input value={filters.q} maxLength={120} onChange={event => setFilters({ ...filters, q: event.target.value })} placeholder="Message, problem, page or record ID" /></label><button className="fa-button fa-primary" type="submit">Apply filters</button>
      </form>
      {error && <p className="fa-error fa-banner" role="alert">{error}</p>}
      {data && data.trend.length > 1 && <section className="fa-trend" aria-label="Daily feedback trend"><div><h2>Daily responses</h2><p>Good ratings in purple. Other responses in grey. Latest 31 active days.</p></div><div className="fa-trend-bars">{data.trend.map(day => <div key={day.date} className="fa-day" title={`${day.date}: ${day.total} responses, ${day.good} good ratings`}><div style={{ height: `${Math.max(6, day.total / Math.max(...data.trend.map(row => row.total)) * 65)}px` }}><span style={{ height: `${day.good / day.total * 100}%` }} /></div><small>{day.date.slice(5)}</small></div>)}</div></section>}
      <div className="fa-list-heading"><h2>Feedback inbox</h2><span>{loading ? 'Updating…' : `${data?.summary.total ?? 0} responses`}</span></div>
      <section className="fa-records" aria-label="Visitor responses" aria-busy={loading}>{data?.records.map(record => <RecordCard key={`${record.id}-${record.updated_at}`} record={record} onUpdate={update} />)}{!loading && data?.records.length === 0 && <div className="fa-empty"><MessageSquare size={32} /><h3>{data.summary.total ? 'No more responses on this page' : 'No feedback in this view yet'}</h3><p>New ratings and messages will appear here. Try another date range or clear the filters.</p></div>}</section>
      {data && data.summary.total > data.pageSize && <nav className="fa-pagination" aria-label="Feedback pages"><button type="button" className="fa-button" disabled={loading || page === 0} onClick={() => setPage(value => value - 1)}>Previous</button><span>Page {page + 1} of {Math.ceil(data.summary.total / data.pageSize)}</span><button type="button" className="fa-button" disabled={loading || (page + 1) * data.pageSize >= data.summary.total} onClick={() => setPage(value => value + 1)}>Next</button></nav>}
      <footer className="fa-footer">Times are shown in IST. CSV exports include up to 5,000 matching responses; narrow the dates for larger inboxes. Visitor images are never included.</footer>
    </main>
  </div>;
}
