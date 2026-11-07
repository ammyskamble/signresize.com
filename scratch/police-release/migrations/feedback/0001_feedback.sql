CREATE TABLE feedback (
  id TEXT PRIMARY KEY,
  edit_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  edit_expires_at TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('experience', 'problem', 'suggestion')),
  rating TEXT NOT NULL DEFAULT '' CHECK (rating IN ('', 'good', 'okay', 'difficult')),
  category TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  page TEXT NOT NULL,
  tool TEXT NOT NULL,
  device TEXT NOT NULL CHECK (device IN ('mobile', 'desktop')),
  browser TEXT NOT NULL DEFAULT '',
  version TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT 'widget',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'investigating', 'fixed')),
  notes TEXT NOT NULL DEFAULT ''
);
CREATE INDEX feedback_created ON feedback(created_at DESC, id DESC);
CREATE INDEX feedback_status_created ON feedback(status, created_at DESC);
CREATE INDEX feedback_tool_device_created ON feedback(tool, device, created_at DESC);
CREATE TABLE feedback_rate_limits (
  key TEXT NOT NULL,
  bucket INTEGER NOT NULL,
  hits INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (key, bucket)
);
CREATE INDEX feedback_rate_limits_bucket ON feedback_rate_limits(bucket);
