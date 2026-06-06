import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgrammaticSlugPage from "@/components/ProgrammaticSlugPage";
import { generateProgrammaticMetadata } from "@/lib/programmatic-metadata";
import { getAllProgrammaticSlugs, parseProgrammaticSlug } from "@/lib/parse-programmatic-slug";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllProgrammaticSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!parseProgrammaticSlug(params.slug)) {
    return { title: "Not Found" };
  }
  return generateProgrammaticMetadata(params.slug);
}

export default function ProgrammaticPage({ params }: PageProps) {
  if (!parseProgrammaticSlug(params.slug)) {
    notFound();
  }
  return <ProgrammaticSlugPage slug={params.slug} />;
}
