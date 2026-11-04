import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Building2,
  ArrowRight,
  Home,
  Heart,
  House,
  Bell,
  UserRound,
  Menu,
} from "lucide-react";
import PropertiesFilters from "./PropertiesFilters";

export const instant = false;

type SearchParams = {
  market?: string;
  type?: string;
  operation?: string;
  location?: string;
  minPrice?: string;
  maxPrice?: string;
};

const marketNames: Record<string, string> = {
  residential: "سكني",
  commercial: "تجاري",
  hotel: "فندقي",
  resale: "إعادة البيع",
  investment: "استثماري",
};

const operationNames: Record<string, string> = {
  sale: "للبيع",
  rent: "للإيجار",
  resale: "إعادة البيع",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const market = params.market || "";
  const type = params.type || "";
  const operation = params.operation || "";
  const location = params.location || "";
  const minPrice = params.minPrice || "";
  const maxPrice = params.maxPrice || "";

  const hasFilters = Boolean(
    market || type || operation || location || minPrice || maxPrice
  );

  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">

            {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/95 text-[#142B49] shadow-[0_3px_18px_rgba(31,104,160,0.06)] backdrop-blur-2xl">
        <div className="mx-auto flex h-[64px] max-w-[1500px] items-center justify-between gap-2 px-3 sm:px-6 lg:px-10">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#48B8F5] to-[#258EE8] text-xl font-bold text-white shadow-md shadow-sky-200">
              ش
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-[1.5px] sm:text-base">
                SHOSHAN
              </div>
              <div className="text-[8px] tracking-[3px] text-[#258EE8]">
                PROPERTIES
              </div>
              <div className="text-[8px] text-slate-500">شوشان العقارية</div>
            </div>
          </a>

          <nav className="hidden items-center gap-4 xl:flex">
            {[
              ["الرئيسية", "/"],
              ["العقارات", "/properties"],
              ["المشروعات", "/projects"],
              ["إعادة البيع", "/resale"],
              ["الاستثمار", "/investment"],
              ["الخدمات", "/services"],
              ["عن شوشان", "/about"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="whitespace-nowrap text-xs font-semibold text-[#52677E] transition hover:text-[#258EE8]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="/login" className="text-sm font-semibold hover:text-[#258EE8]">
              تسجيل الدخول
            </a>
            <a
              href="/favorites"
              aria-label="المفضلة"
              className="text-[#52677E] transition hover:text-[#258EE8]"
            >
              <Heart size={19} strokeWidth={1.8} />
            </a>
            <a
              href="/register"
              className="rounded-xl bg-gradient-to-l from-[#258EE8] to-[#48B8F5] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-100 transition hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                <House size={16} strokeWidth={2} />
                ضيف عقارك
              </span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href="/notifications"
              aria-label="الإشعارات"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-[#258EE8]"
            >
              <Bell size={17} />
            </a>
            <a
              href="/favorites"
              aria-label="المفضلة"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-[#258EE8]"
            >
              <Heart size={17} />
            </a>
            <a
              href="/login"
              aria-label="حسابي"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-[#258EE8]"
            >
              <UserRound size={17} />
            </a>
            <button
              type="button"
              aria-label="القائمة"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-white text-[#258EE8]"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>

        <div className="hidden border-t border-sky-50 lg:block">
          <nav className="mx-auto flex max-w-[1500px] items-center justify-center gap-8 px-6 py-2.5 text-xs font-medium text-slate-500">
            <a href="/residential" className="hover:text-sky-500">سكني</a>
            <a href="/commercial" className="hover:text-sky-500">تجاري</a>
            <a href="/tourism" className="hover:text-sky-500">سياحي</a>
            <a href="/investment" className="hover:text-sky-500">استثماري</a>
            <a href="/resale" className="hover:text-sky-500">إعادة البيع</a>
            <a href="/developers" className="hover:text-sky-500">المطورون</a>
            <a href="/companies" className="hover:text-sky-500">الشركات والخدمات</a>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        {/* Breadcrumb */}
        <div className="mb-7 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="transition hover:text-blue-600">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="text-slate-700">العقارات</span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-blue-600">
            <Search size={19} />
            <span className="text-sm font-semibold">اكتشف العقارات</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            ابحث عن عقارك المناسب
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500 md:text-base">
            استكشف العقارات المتاحة واختر الوحدة التي تناسب احتياجاتك.
          </p>
        </div>

        {/* Filters Summary */}
        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">

          <div className="mb-4 flex items-center gap-2">
            <SlidersHorizontal size={19} className="text-blue-600" />
            <h2 className="font-bold text-slate-800">
              خيارات البحث
            </h2>
          </div>

          {hasFilters ? (
            <div className="flex flex-wrap gap-2">

              {market && (
                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  السوق: {marketNames[market] || market}
                </span>
              )}

              {type && (
                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  النوع: {type}
                </span>
              )}

              {operation && (
                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  العملية: {operationNames[operation] || operation}
                </span>
              )}

              {location && (
                <span className="flex items-center gap-1 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  <MapPin size={14} />
                  {location}
                </span>
              )}

              {minPrice && (
                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  من: {minPrice}
                </span>
              )}

              {maxPrice && (
                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-slate-700">
                  إلى: {maxPrice}
                </span>
              )}

            </div>
          ) : (
            <p className="text-sm text-slate-500">
              لم يتم تحديد فلاتر البحث بعد. يمكنك العودة للرئيسية واختيار القسم المناسب.
            </p>
          )}

          <div className="mt-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              تعديل البحث
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
{/* PROPERTY FILTERS */}
<div className="mb-6">
  <PropertiesFilters />
</div>
        {/* Results Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              العقارات المتاحة
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              العقارات المعتمدة والمعروضة على المنصة
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-500">
            ترتيب النتائج: الأحدث
          </div>
        </div>

        {/* Empty Results */}
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-slate-50/50 px-5 text-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
            <Search size={30} className="text-blue-500" />
          </div>

          <h3 className="text-lg font-bold text-slate-800">
            جاري تجهيز نتائج العقارات
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
            لم يتم ربط قاعدة بيانات العقارات بهذه الصفحة بعد.
            ستظهر هنا الوحدات المعتمدة والمتوافقة مع اختيارات البحث بمجرد
            اكتمال الربط.
          </p>

          <Link
            href="/"
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            العودة للصفحة الرئيسية
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-center md:flex-row md:text-right">
          <span className="text-sm font-semibold tracking-wide text-slate-700">
            SHOSHAN PROPERTIES
          </span>

          <span className="text-xs text-slate-400">
            منصة شوشان العقارية
          </span>
        </div>
      </footer>

    </main>
  );
}