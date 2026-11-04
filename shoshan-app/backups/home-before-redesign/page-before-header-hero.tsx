import {
  Bell,
  Building2,
  Building,
  BriefcaseBusiness,
  Heart,
  House,
  Hotel,
  LandPlot,
  MapPinned,
  Menu,
  Search,
  Store,
  Trees,
  Castle,
  Warehouse,
  Factory,
  Stethoscope,
  Sofa,
  BedDouble,
  Landmark,
  Wrench,
  Wallet,
  Compass,
  Home as HomeIcon,
  UserRound,
  Waves,
} from "lucide-react";

const properties = [
  {
    title: "فيلا فاخرة - القرنة",
    location: "الأقصر",
    price: "14,500,000",
    area: "420",
    bedrooms: "5",
    bathrooms: "4",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900",
    type: "سكني",
  },
  {
    title: "شقة فاخرة - شارع المدينة",
    location: "الأقصر",
    price: "6,800,000",
    area: "180",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    type: "سكني",
  },
  {
    title: "محل تجاري - وسط المدينة",
    location: "الأقصر",
    price: "3,200,000",
    area: "120",
    bedrooms: "-",
    bathrooms: "-",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    type: "تجاري",
  },
];

const propertyCategories = [
  { title: "شقق", market: "سكني", icon: Building2, href: "/properties?type=apartment" },
  { title: "فيلات", market: "سكني", icon: House, href: "/properties?type=villa" },
  { title: "قصور", market: "سكني", icon: Castle, href: "/properties?type=palace" },
  { title: "منازل", market: "سكني", icon: HomeIcon, href: "/properties?type=house" },
  { title: "دوبلكس", market: "سكني", icon: Building, href: "/properties?type=duplex" },
  { title: "استوديو", market: "سكني", icon: BedDouble, href: "/properties?type=studio" },
  { title: "أراضٍ سكنية", market: "سكني", icon: LandPlot, href: "/properties?type=residential-land" },

  { title: "محلات", market: "تجاري وإداري", icon: Store, href: "/properties?type=shop" },
  { title: "مكاتب", market: "تجاري وإداري", icon: BriefcaseBusiness, href: "/properties?type=office" },
  { title: "مقرات شركات", market: "تجاري وإداري", icon: Building2, href: "/properties?type=company-office" },
  { title: "عيادات", market: "تجاري وإداري", icon: Stethoscope, href: "/properties?type=clinic" },
  { title: "مولات", market: "تجاري وإداري", icon: Landmark, href: "/properties?type=mall" },
  { title: "مخازن", market: "تجاري وإداري", icon: Warehouse, href: "/properties?type=warehouse" },
  { title: "مصانع", market: "تجاري وإداري", icon: Factory, href: "/properties?type=factory" },
  { title: "ورش", market: "تجاري وإداري", icon: Wrench, href: "/properties?type=workshop" },
  { title: "أراضٍ تجارية", market: "تجاري وإداري", icon: LandPlot, href: "/properties?type=commercial-land" },

  { title: "فنادق", market: "سياحي وفندقي", icon: Hotel, href: "/properties?type=hotel" },
  { title: "منتجعات", market: "سياحي وفندقي", icon: Trees, href: "/properties?type=resort" },
  { title: "شقق فندقية", market: "سياحي وفندقي", icon: Building, href: "/properties?type=hotel-apartment" },
  { title: "شقق مفروشة", market: "سياحي وفندقي", icon: Sofa, href: "/properties?type=furnished-apartment" },
  { title: "شاليهات", market: "سياحي وفندقي", icon: Waves, href: "/properties?type=chalet" },
  { title: "فيلات سياحية", market: "سياحي وفندقي", icon: House, href: "/properties?type=tourist-villa" },
  { title: "غرف وأجنحة", market: "سياحي وفندقي", icon: BedDouble, href: "/properties?type=hotel-room" },

  { title: "مبانٍ كاملة", market: "استثماري", icon: Building, href: "/properties?type=whole-building" },
  { title: "مشروعات تحت الإنشاء", market: "استثماري", icon: Landmark, href: "/properties?type=under-construction" },
  { title: "فرص تطوير", market: "استثماري", icon: Compass, href: "/properties?type=development-opportunity" },
  { title: "عقارات مدرة للدخل", market: "استثماري", icon: Wallet, href: "/properties?type=income-property" },
];

const services = [
  { icon: "⌂", title: "التشطيبات والديكور" },
  { icon: "▤", title: "المطابخ والتجهيزات" },
  { icon: "⚖", title: "التمويل العقاري" },
  { icon: "♧", title: "الخدمات العقارية" },
  { icon: "◇", title: "المطورون العقاريون" },
];

const resaleProperties = [
  {
    title: "شقة في مشروع سكني",
    project: "مشروع سكني - الأقصر",
    paid: "450,000",
    remaining: "850,000",
    transfer: "500,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700",
  },
  {
    title: "وحدة سكنية مميزة",
    project: "مشروع عمراني",
    paid: "700,000",
    remaining: "1,200,000",
    transfer: "750,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700",
  },
];

function SectionHeading({
  eyebrow,
  title,
  link,
}: {
  eyebrow?: string;
  title: string;
  link?: string;
}) {
  return (
    <div className="mb-7 flex items-end justify-between gap-3">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold tracking-wide text-[#B69A6A]">
            {eyebrow}
          </p>
        )}
        <h2 className="text-xl font-extrabold text-[#102A56] sm:text-2xl">
          {title}
        </h2>
      </div>

      {link && (
        <a
          href={link}
          className="shrink-0 text-xs font-bold text-[#245FC5] transition hover:text-[#B69A6A]"
        >
          عرض الكل ←
        </a>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#F7F5F0] pb-20 text-[#102A56] sm:pb-0"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1E3B] text-white shadow-lg">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center border border-[#C5A46D] text-2xl font-bold text-[#C5A46D]">
              ش
            </div>

            <div>
              <div className="text-base font-extrabold tracking-[2px] sm:text-lg">
                SHOSHAN
              </div>
              <div className="text-[9px] tracking-[4px] text-[#C5A46D]">
                PROPERTIES
              </div>
              <div className="text-[9px] text-white/70">
                شوشان العقارية
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
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
                className="whitespace-nowrap text-xs font-semibold text-white/85 transition hover:text-[#C5A46D]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="/login" className="text-sm">
              تسجيل الدخول
            </a>

            <a
              href="/favorites"
              aria-label="المفضلة"
              className="text-white transition hover:text-[#C5A46D]"
            >
              <Heart size={22} strokeWidth={1.8} />
            </a>

            <a
              href="/register"
              className="rounded-md bg-[#C5A46D] px-4 py-2 text-sm font-bold text-[#102A56]"
            >
              + أضف عقارك
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="/notifications"
              aria-label="الإشعارات"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#C5A46D] hover:text-[#C5A46D]"
            >
              <Bell size={19} strokeWidth={1.8} />
            </a>

            <a
              href="/favorites"
              aria-label="المفضلة"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#C5A46D] hover:text-[#C5A46D]"
            >
              <Heart size={19} strokeWidth={1.8} />
            </a>

            <a
              href="/login"
              aria-label="حسابي"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#C5A46D] hover:text-[#C5A46D]"
            >
              <UserRound size={19} strokeWidth={1.8} />
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#C5A46D] hover:text-[#C5A46D]"
              aria-label="القائمة"
            >
              <Menu size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="hidden border-t border-white/10 lg:block">
          <nav className="mx-auto flex max-w-[1500px] items-center justify-center gap-8 px-6 py-3 text-xs text-white/75">
            <a href="/residential">سكني</a>
            <a href="/commercial">تجاري</a>
            <a href="/tourism">سياحي</a>
            <a href="/investment">استثماري</a>
            <a href="/resale">إعادة البيع</a>
            <a href="/developers">المطورون</a>
            <a href="/companies">الشركات والخدمات</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[530px] overflow-hidden bg-[#0B1E3B] sm:min-h-[570px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#0B1E3B]/95 via-[#0B1E3B]/65 to-[#0B1E3B]/20" />

        <div className="relative mx-auto flex min-h-[530px] max-w-[1500px] flex-col justify-center px-5 py-20 sm:min-h-[570px] sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C5A46D]/50 bg-white/10 px-4 py-2 text-xs text-white">
              SHOSHAN PROPERTIES
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A46D]" />
              السوق العقاري المتكامل
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.5] text-white sm:text-5xl lg:text-6xl">
              اكتشف فرصتك
              <br />
              العقارية القادمة
            </h1>

            <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
              سوق عقاري متكامل يجمع العقارات السكنية والتجارية والسياحية
              والاستثمارية في تجربة واحدة.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/properties"
                className="rounded-md bg-[#C5A46D] px-7 py-4 text-sm font-extrabold text-[#102A56] transition hover:bg-white"
              >
                استكشف العقارات
              </a>

              <a
                href="/projects"
                className="rounded-md border border-white/50 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                اكتشف المشروعات
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-10 mx-auto -mt-12 max-w-[1350px] px-4 sm:px-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-extrabold">ابحث عن عقارك</h2>
            <a
              href="/advanced-search"
              className="text-xs font-bold text-[#245FC5]"
            >
              البحث المتقدم
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <select className="min-w-0 rounded-lg border border-gray-200 bg-[#F8FAFC] p-4 text-sm outline-none focus:border-[#245FC5]">
              <option>نوع العملية</option>
              <option>شراء</option>
              <option>إيجار</option>
              <option>إعادة بيع</option>
            </select>

            <select className="min-w-0 rounded-lg border border-gray-200 bg-[#F8FAFC] p-4 text-sm outline-none focus:border-[#245FC5]">
              <option>نوع السوق</option>
              <option>سكني</option>
              <option>تجاري</option>
              <option>سياحي</option>
              <option>استثماري</option>
            </select>

            <select className="min-w-0 rounded-lg border border-gray-200 bg-[#F8FAFC] p-4 text-sm outline-none focus:border-[#245FC5]">
              <option>نوع العقار</option>
              <option>شقة</option>
              <option>فيلا</option>
              <option>أرض</option>
              <option>محل تجاري</option>
              <option>فندق</option>
            </select>

            <select className="min-w-0 rounded-lg border border-gray-200 bg-[#F8FAFC] p-4 text-sm outline-none focus:border-[#245FC5]">
              <option>المدينة أو المنطقة</option>
              <option>الأقصر</option>
              <option>القاهرة</option>
              <option>الجيزة</option>
            </select>

            <a
              href="/properties"
              className="flex items-center justify-center rounded-lg bg-[#245FC5] p-4 text-sm font-bold text-white transition hover:bg-[#102A56]"
            >
              <Search size={18} className="ml-2" />
              بحث عن عقار
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-5 text-xs text-gray-500">
            <a href="/map" className="flex items-center gap-1">
              <MapPinned size={15} />
              البحث بالخريطة
            </a>
            <a href="/advanced-search" className="flex items-center gap-1">
              <Compass size={15} />
              خيارات متقدمة
            </a>
            <a href="/property-request">＋ اطلب عقارك</a>
          </div>
        </div>
      </section>

      {/* PROPERTY CATEGORIES */}
      <section className="mx-auto max-w-[1500px] px-4 py-14 sm:px-8 lg:px-12 sm:py-20">
        <SectionHeading
          eyebrow="EXPLORE PROPERTY TYPES"
          title="استكشف العقارات"
          link="/properties"
        />

        {["سكني", "تجاري وإداري", "سياحي وفندقي", "استثماري"].map((market) => (
          <div key={market} className="mb-8 last:mb-0">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#DCD6C9]" />
              <h3 className="shrink-0 text-sm font-extrabold text-[#102A56] sm:text-base">
                {market}
              </h3>
              <span className="h-px flex-1 bg-[#DCD6C9]" />
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
              {propertyCategories
                .filter((category) => category.market === market)
                .map((category) => {
                  const Icon = category.icon;

                  return (
                    <a
                      href={category.href}
                      key={category.title}
                      className="group flex min-h-[104px] flex-col items-center justify-center gap-3 rounded-2xl border border-[#E9E4DA] bg-white px-2 py-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#C5A46D] hover:shadow-md sm:min-h-[124px] sm:gap-3.5"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F0E9] text-[#245FC5] transition group-hover:bg-[#102A56] group-hover:text-[#D8BD8B] sm:h-14 sm:w-14">
                        <Icon size={25} strokeWidth={1.7} />
                      </span>

                      <span className="text-[11px] font-bold leading-5 text-[#102A56] sm:text-sm">
                        {category.title}
                      </span>
                    </a>
                  );
                })}
            </div>
          </div>
        ))}
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="SELECTED PROPERTIES"
            title="عقارات مختارة"
            link="/selected-properties"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.title}
                className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <div
                    className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${property.image})` }}
                  />

                  <span className="absolute right-4 top-4 rounded-md bg-[#C5A46D] px-3 py-2 text-xs font-bold text-[#102A56]">
                    عقار مختار
                  </span>

                  <button
                    type="button"
                    aria-label="إضافة للمفضلة"
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#102A56] shadow-sm transition hover:text-[#245FC5]"
                  >
                    <Heart size={19} strokeWidth={1.8} />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs text-gray-400">
                    {property.location} · {property.type}
                  </p>

                  <h3 className="mt-2 text-lg font-extrabold">
                    {property.title}
                  </h3>

                  <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <span>{property.area} م²</span>
                    <span>{property.bedrooms} غرف</span>
                    <span>{property.bathrooms} حمام</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-[10px] text-gray-400">السعر</p>
                      <p className="mt-1 text-lg font-extrabold text-[#245FC5]">
                        {property.price} ج.م
                      </p>
                    </div>

                    <a
                      href="/properties"
                      className="rounded-md bg-[#102A56] px-4 py-3 text-xs font-bold text-white"
                    >
                      التفاصيل
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESALE MARKET */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="SHOSHAN RESALE MARKET"
            title="سوق إعادة البيع والتنازل"
            link="/resale"
          />

          <div className="mb-8 max-w-3xl text-sm leading-7 text-gray-600">
            فرص للحصول على وحدات داخل المشروعات العقارية من خلال التنازل
            عن التعاقدات القائمة، مع معرفة المبالغ المسددة والمتبقية
            والتكلفة الإجمالية.
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {resaleProperties.map((item) => (
              <article
                key={item.title}
                className="grid overflow-hidden rounded-xl border border-gray-200 bg-white sm:grid-cols-2"
              >
                <div
                  className="min-h-[220px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="p-5">
                  <span className="rounded bg-[#E9DFC8] px-3 py-1 text-[10px] font-bold text-[#102A56]">
                    إعادة بيع
                  </span>

                  <h3 className="mt-4 font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-xs text-gray-400">{item.project}</p>

                  <div className="mt-5 space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">المبلغ المطلوب للتنازل</span>
                      <strong>{item.transfer} ج.م</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">المبلغ المسدد</span>
                      <strong>{item.paid} ج.م</strong>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">المتبقي للمطور</span>
                      <strong>{item.remaining} ج.م</strong>
                    </div>
                  </div>

                  <a
                    href="/resale"
                    className="mt-5 block rounded-md bg-[#102A56] px-4 py-3 text-center text-xs font-bold text-white"
                  >
                    تفاصيل فرصة التنازل
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white py-20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="REAL ESTATE PROJECTS"
            title="المشروعات العقارية"
            link="/projects"
          />

          <div className="relative overflow-hidden rounded-2xl bg-[#102A56]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-45"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400)",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-l from-[#0B1E3B] via-[#102A56]/75 to-transparent" />

            <div className="relative flex min-h-[300px] flex-col justify-center p-8 sm:p-14">
              <span className="text-xs font-bold text-[#D8BD8B]">
                DISCOVER PROJECTS
              </span>

              <h3 className="mt-4 max-w-xl text-3xl font-extrabold leading-relaxed text-white sm:text-4xl">
                اكتشف المشروعات العقارية
                <br />
                وفرص التملك والاستثمار
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">
                استكشف المشروعات والمطورين والوحدات المتاحة ومراحل التنفيذ.
              </p>

              <a
                href="/projects"
                className="mt-7 w-fit rounded-md bg-[#C5A46D] px-6 py-4 text-sm font-bold text-[#102A56]"
              >
                استكشف المشروعات ←
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ADVERTISING */}
      <section className="bg-[#F1EEE7] py-20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="BUSINESS PARTNERS"
            title="الشركات والخدمات العقارية"
            link="/companies"
          />

          <p className="mb-8 max-w-2xl text-sm leading-7 text-gray-500">
            اكتشف الشركات المتخصصة والخدمات التي تساعدك في شراء وتجهيز
            وإدارة واستثمار عقارك.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((service) => (
              <a
                href="/companies"
                key={service.title}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:border-[#C5A46D] hover:shadow-lg"
              >
                <span className="text-4xl text-[#245FC5]">
                  {service.icon}
                </span>

                <h3 className="mt-4 text-sm font-bold">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-xl bg-[#102A56]">
            <div className="grid items-center md:grid-cols-2">
              <div className="p-8 text-white sm:p-12">
                <span className="text-xs font-bold text-[#D8BD8B]">
                  ADVERTISING PLATFORM
                </span>

                <h3 className="mt-4 text-2xl font-extrabold">
                  أعلن عن شركتك على شوشان
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  وصل بخدماتك ومنتجاتك إلى جمهور يبحث عن العقار
                  والتطوير والتجهيز والتمويل.
                </p>

                <a
                  href="/advertise"
                  className="mt-6 inline-block rounded-md bg-[#C5A46D] px-6 py-3 text-sm font-bold text-[#102A56]"
                >
                  اكتشف المساحات الإعلانية
                </a>
              </div>

              <div
                className="min-h-[230px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SMART ADVISOR */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-2xl bg-[#102A56]">
            <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
              <div className="text-white">
                <span className="text-xs font-bold text-[#D8BD8B]">
                  SHOSHAN SMART ADVISOR
                </span>

                <h2 className="mt-5 text-3xl font-extrabold leading-relaxed">
                  مستشارك العقاري الذكي
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                  احصل على مساعدة ذكية لفهم احتياجاتك واكتشاف العقارات
                  المناسبة وتحليل الفرص الاستثمارية واتخاذ قرارات أفضل.
                </p>

                <a
                  href="/smart-advisor"
                  className="mt-7 inline-block rounded-md bg-[#C5A46D] px-7 py-4 text-sm font-bold text-[#102A56]"
                >
                  ابدأ مع المستشار الذكي
                </a>
              </div>

              <div className="flex justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border border-[#C5A46D]/50 bg-white/5 text-7xl text-[#D8BD8B]">
                  ✧
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#09182E] pb-10 pt-16 text-white">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <div className="text-2xl font-extrabold tracking-[3px]">
              SHOSHAN
            </div>

            <div className="mt-1 text-xs tracking-[5px] text-[#C5A46D]">
              PROPERTIES
            </div>

            <p className="mt-5 max-w-xs text-sm leading-8 text-white/55">
              سوق عقاري متكامل يجمع الفرص السكنية والتجارية والسياحية
              والاستثمارية في تجربة رقمية واحدة.
            </p>
          </div>

          <div>
            <h3 className="font-extrabold">السوق العقاري</h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <a href="/residential">السوق السكني</a>
              <a href="/commercial">السوق التجاري</a>
              <a href="/tourism">السوق السياحي</a>
              <a href="/investment">السوق الاستثماري</a>
              <a href="/resale">إعادة البيع</a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">خدمات شوشان</h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <a href="/projects">المشروعات العقارية</a>
              <a href="/developers">المطورون العقاريون</a>
              <a href="/companies">الشركات والخدمات</a>
              <a href="/advertise">الإعلانات التجارية</a>
              <a href="/smart-advisor">المستشار الذكي</a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">تواصل معنا</h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <a href="/about">عن شوشان</a>
              <a href="/contact">اتصل بنا</a>
              <a href="/privacy">سياسة الخصوصية</a>
              <a href="/terms">الشروط والأحكام</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1500px] border-t border-white/10 px-5 pt-7 text-center text-xs text-white/40 sm:px-8">
          © 2026 SHOSHAN PROPERTIES. جميع الحقوق محفوظة.
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 z-[100] grid h-[70px] w-full grid-cols-5 border-t border-white/10 bg-[#0B1E3B] text-center text-[10px] text-white shadow-[0_-8px_24px_rgba(11,30,59,0.12)] sm:hidden">
        {[
          { icon: HomeIcon, label: "الرئيسية", href: "/" },
          { icon: Search, label: "البحث", href: "/properties" },
          { icon: MapPinned, label: "الخريطة", href: "/map" },
          { icon: Heart, label: "المفضلة", href: "/favorites" },
          { icon: UserRound, label: "حسابي", href: "/login" },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1.5 transition ${
                index === 0
                  ? "text-[#D8BD8B]"
                  : "text-white/75 hover:text-[#D8BD8B]"
              }`}
            >
              <Icon size={21} strokeWidth={index === 0 ? 2.2 : 1.8} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </main>
  );
}