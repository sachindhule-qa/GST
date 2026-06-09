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
