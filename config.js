// Online Order Fulfilment — configuration
// Shares WHIP's Supabase project. The publishable key is meant to be in client code: every ful_ table
// is locked to signed-in staff by row level security (admin edits, cs reads). The Shopify token is NOT
// here — it lives only in the ful-shopify-sync Edge Function's secrets.

const CONFIG = {
  SB_URL: 'https://wqsibegaczuhgrcjwitl.supabase.co',
  SB_KEY: 'sb_publishable_n_uq745mW_vf1x7WuDl7Aw_kl-KDNcH',
  SYNC_FUNCTION: 'ful-shopify-sync',
  ARAMEX_FUNCTION: 'ful-aramex',   // Aramex login lives only in this function's secrets
  SIGN_OFF: 'Musa',          // name at the bottom of drafted emails
  LOOKBACK_DAYS: 45          // how far back the board and lookup load lines
};
