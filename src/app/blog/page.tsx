<<<<<<< HEAD
import { Metadata } from "next";
import Link from "next/link";
import { ALL_BLOGS, BLOG_SILOS } from "@/data/blogs";
import { createMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = createMetadata({
  title: "GST, Tax & Finance Blog — Expert Articles for India 2025",
  description:
    "Expert articles on GST, income tax, investments, salary, loans, and personal finance. 50+ in-depth guides for Indian businesses and individuals.",
  keywords: "GST blog India, tax articles, finance guides, investment tips India, salary guide",
  slug: "blog",
});
=======
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getBlogBySlug, getAllBlogSlugs, getRelatedBlogs } from "@/data/blogs";
import { createMetadata, createBreadcrumbJsonLd } from "@/lib/seo";
import { getRelatedLinks } from "@/lib/internal-links";
import ContentPageLayout from "@/components/ContentPageLayout";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return {};
  return createMetadata({
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    slug: `blog/${blog.slug}`,
  });
}
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658

const SILO_LABELS: Record<string, string> = {
  gst: "GST",
  tax: "Income Tax",
  finance: "Finance",
  investment: "Investment",
  business: "Business",
  loans: "Loans",
  accounting: "Accounting",
  salary: "Salary & Payroll",
  "government-schemes": "Govt Schemes",
  banking: "Banking",
};

<<<<<<< HEAD
const SILO_COLORS: Record<string, string> = {
  gst: "bg-blue-100 text-blue-700",
  tax: "bg-purple-100 text-purple-700",
  finance: "bg-green-100 text-green-700",
  investment: "bg-yellow-100 text-yellow-700",
  business: "bg-orange-100 text-orange-700",
  loans: "bg-red-100 text-red-700",
  accounting: "bg-cyan-100 text-cyan-700",
  salary: "bg-indigo-100 text-indigo-700",
  "government-schemes": "bg-teal-100 text-teal-700",
  banking: "bg-gray-100 text-gray-700",
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />

      <div className="mt-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">GST, Tax & Finance Articles</h1>
        <p className="text-gray-600 text-lg">
          Expert guides on GST compliance, income tax, investments, and personal finance for Indian businesses and individuals.
        </p>
      </div>

      {/* Silo Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {BLOG_SILOS.map((silo) => (
          <span
            key={silo}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full ${SILO_COLORS[silo] || "bg-gray-100 text-gray-700"}`}
          >
            {SILO_LABELS[silo] || silo}
          </span>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_BLOGS.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${SILO_COLORS[blog.silo] || "bg-gray-100 text-gray-600"}`}>
                {SILO_LABELS[blog.silo] || blog.silo}
              </span>
              <span className="text-xs text-gray-400">{blog.readTime} min read</span>
            </div>
            <h2 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-3">
              {blog.title}
            </h2>
            <p className="text-xs text-gray-500 line-clamp-2">{blog.description}</p>
            <div className="mt-3 text-xs text-blue-600 font-medium">Read article →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
=======
export default function BlogPostPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const relatedBlogs = getRelatedBlogs(blog.slug, 4);
  const { calculators, faqs, glossary, comparisons } = getRelatedLinks({
    silo: blog.silo,
    currentSlug: blog.slug,
    currentType: "blog",
    count: 4,
  });

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: SILO_LABELS[blog.silo] || "Blog", href: `/blog` },
    { name: blog.title, href: `/blog/${blog.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    url: `${SITE_URL}/blog/${blog.slug}`,
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
    author: { "@type": "Organization", name: "GSTCalc.in" },
    publisher: {
      "@type": "Organization",
      name: "GSTCalc.in",
      url: SITE_URL,
    },
    keywords: blog.keywords,
  };

  const breadcrumbSchema = createBreadcrumbJsonLd(breadcrumbs);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ContentPageLayout
        breadcrumbs={breadcrumbs}
        badge={blog.category}
        title={blog.title}
        description={blog.description}
        meta={[
          { label: "Category", value: blog.category },
          { label: "Read time", value: `${blog.readTime} min` },
          { label: "Updated", value: blog.publishDate },
        ]}
        relatedCalculators={calculators}
        relatedBlogs={relatedBlogs.map((b) => ({
          href: `/blog/${b.slug}`,
          title: b.title,
          description: b.description,
          type: "blog" as const,
        }))}
        relatedFAQs={faqs}
        relatedGlossary={glossary}
        relatedComparisons={comparisons}
      >
        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">{blog.content.intro}</p>

        {/* Sections */}
        {blog.content.sections.map((section, i) => (
          <div key={i} className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.body}</p>
          </div>
        ))}

        {/* Conclusion */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Key Takeaway</h2>
          <p className="text-gray-700 leading-relaxed">{blog.content.conclusion}</p>
        </div>

        {/* Related Calculators CTA */}
        {blog.relatedCalculator && (
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
            <p className="text-sm font-semibold text-green-800 mb-1">🧮 Try Our Free Calculator</p>
            <a
              href={`/${blog.relatedCalculator}`}
              className="text-green-700 hover:text-green-900 font-medium underline underline-offset-2"
            >
              Use the {blog.relatedCalculator.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
            </a>
          </div>
        )}
      </ContentPageLayout>
    </>
  );
}
>>>>>>> 4ed6793d4d69d1bb84b4ed9ef8e97c626cda1658
