import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <SkipLink href="#page-title" skipLinkText="Skip to Page Title" />
      <SkipLink href="#dashboard-content" skipLinkText="Skip to Dashboard Content" />
      <PageTitle id="page-title" text="Dashboard" />
      <div id="dashboard-content">Flow complete.</div>
    </div>
  );
}
