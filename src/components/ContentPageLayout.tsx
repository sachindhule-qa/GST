"use client";

import Link from "next/link";
import { InternalLink } from "@/lib/internal-links";
import Breadcrumb from "@/components/Breadcrumb";

type ContentPageLayoutProps = {
  breadcrumbs: { name: string; href: string }[];
  badge: string;
  title: string;
  description: string;
  meta?: { label: string; value: string }[];
  children: React.ReactNode;
  relatedCalculators?: InternalLink[];
  relatedBlogs?: InternalLink[];
  relatedFAQs?: InternalLink[];
  relatedGlossary?: InternalLink[];
  relatedComparisons?: InternalLink[];
  sidebarTitle?: string;
};

const TYPE_COLORS: Record<string, string> = {
  calculator: "bg-blue-50 border-blue-100 hover:border-blue-300",
  blog: "bg-green-50 border-green-100 hover:border-green-300",
  faq: "bg-purple-50 border-purple-100 hover:border-purple-300",
  glossary: "bg-orange-50 border-orange-100 hover:border-orange-300",
  comparison: "bg-pink-50 border-pink-100 hover:border-pink-300",
};

const TYPE_BADGES: Record<string, { label: string; color: string }> = {
  calculator: { label: "Calculator", color: "bg-blue-100 text-blue-700" },
  blog: { label: "Article", color: "bg-green-100 text-green-700" },
  faq: { label: "FAQ", color: "bg-purple-100 text-purple-700" },
  glossary: { label: "Definition", color: "bg-orange-100 text-orange-700" },
  comparison: { label: "Comparison", color: "bg-pink-100 text-pink-700" },
};

function LinkCard({ link }: { link: InternalLink }) {
  const badge = TYPE_BADGES[link.type];
  const color = TYPE_COLORS[link.type] || "bg-gray-50 border-gray-100 hover:border-gray-300";
  return (
    <Link href={link.href} className={`block border rounded-lg p-3 transition-colors ${color}`}>
      <div className="flex items-start gap-2">
        <span className={`text-xs font-medium px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${badge.color}`}>
          {badge.label}
        </span>
        <div>
          <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{link.title}</p>
          {link.description && (
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{link.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

function SidebarSection({ title, links }: { title: string; links: InternalLink[] }) {
  if (!links.length) return null;
  return (
    <div className="mb-6">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{title}</h3>
      <div className="space-y-2">
        {links.map((link) => (
          <LinkCard key={link.href} link={link} />
        ))}
      </div>
    </div>
  );
}

export default function ContentPageLayout({
  breadcrumbs,
  badge,
  title,
  description,
  meta,
  children,
  relatedCalculators = [],
  relatedBlogs = [],
  relatedFAQs = [],
  relatedGlossary = [],
  relatedComparisons = [],
}: ContentPageLayoutProps) {
  const hasSidebar =
    relatedCalculators.length + relatedBlogs.length + relatedFAQs.length +
    relatedGlossary.length + relatedComparisons.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={breadcrumbs} />

      <div className={`mt-6 ${hasSidebar ? "lg:grid lg:grid-cols-[1fr_280px] lg:gap-10" : ""}`}>
        {/* Main Content */}
        <main>
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3">
              {badge}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">{title}</h1>
            <p className="text-gray-600 text-base leading-relaxed">{description}</p>
            {meta && meta.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                {meta.map((m) => (
                  <span key={m.label}>
                    <span className="font-medium text-gray-700">{m.label}:</span> {m.value}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="prose prose-gray max-w-none">{children}</div>
        </main>

        {/* Sidebar */}
        {hasSidebar && (
          <aside className="mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-6">
              <SidebarSection title="Free Calculators" links={relatedCalculators} />
              <SidebarSection title="Related Articles" links={relatedBlogs} />
              <SidebarSection title="FAQ Pages" links={relatedFAQs} />
              <SidebarSection title="Definitions" links={relatedGlossary} />
              <SidebarSection title="Comparisons" links={relatedComparisons} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
