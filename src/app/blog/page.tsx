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