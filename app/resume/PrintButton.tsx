'use client';

import Icon from '@/components/Icon';

/**
 * Print is a browser capability, not a link, so this is the one control on the
 * page that genuinely needs a client component. It renders nothing without JS —
 * a dead "Print" button would be worse than no button, and every browser
 * already has ⌘P.
 */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-magnetic="0.25"
      className="btn btn-primary type-subhead"
    >
      <Icon name="file" size={16} /> Print / Save as PDF
    </button>
  );
}
