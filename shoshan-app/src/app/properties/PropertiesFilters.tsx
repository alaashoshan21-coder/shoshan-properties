"use client";

import { useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  X,
  Check,
} from "lucide-react";

type FilterPanel =
  | "type"
  | "rooms"
  | "price"
  | "sort"
  | "all"
  | null;

export default function PropertiesFilters() {
  const [activePanel, setActivePanel] = useState<FilterPanel>(null);

  const [selectedType, setSelectedType] = useState("الكل");
  const [bedrooms, setBedrooms] = useState("الكل");
  const [bathrooms, setBathrooms] = useState("الكل");
  const [sort, setSort] = useState("الأحدث");
  const [paymentMethod, setPaymentMethod] = useState("الكل");

const paymentOptions = [
  "الكل",
  "نقدي فقط",
  "تقسيط فقط",
  "نقدي أو تقسيط",
];
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");

const [minArea, setMinArea] = useState("");
const [maxArea, setMaxArea] = useState("");

const [downPayment, setDownPayment] = useState("");
const [monthlyPayment, setMonthlyPayment] = useState("");
const [installmentYears, setInstallmentYears] = useState("الكل");

const [finishing, setFinishing] = useState("الكل");
const [delivery, setDelivery] = useState("الكل");

const [amenities, setAmenities] = useState<string[]>([]);

const amenitiesOptions = [
  "أمن وحراسة",
  "مصعد",
  "جراج",
  "حمام سباحة",
  "حديقة",
  "تكييف",
  "عداد كهرباء",
  "عداد مياه",
  "غاز طبيعي",
  "إنترنت",
];

const finishingOptions = [
  "الكل",
  "بدون تشطيب",
  "نصف تشطيب",
  "تشطيب كامل",
  "سوبر لوكس",
  "ألترا سوبر لوكس",
];

const deliveryOptions = [
  "الكل",
  "جاهز للاستلام",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031 أو بعد ذلك",
];

const installmentOptions = [
  "الكل",
  "سنة",
  "سنتان",
  "3 سنوات",
  "4 سنوات",
  "5 سنوات",
  "6 سنوات أو أكثر",
];

  const types = [
    "الكل",
    "شقة",
    "فيلا",
    "دوبلكس",
    "بنتهاوس",
    "استوديو",
    "أرض",
    "مبنى",
  ];

  const roomOptions = ["الكل", "1", "2", "3", "4", "5", "6+"];

  const sortOptions = [
    "الأحدث",
    "الأقدم",
    "السعر من الأقل للأعلى",
    "السعر من الأعلى للأقل",
    "المساحة من الأكبر للأصغر",
  ];

  const closePanel = () => setActivePanel(null);

  const PanelButton = ({
    label,
    value,
    panel,
  }: {
    label: string;
    value: string;
    panel: FilterPanel;
  }) => (
    <button
      type="button"
      onClick={() => setActivePanel(panel)}
      className="flex shrink-0 items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#294563] shadow-sm transition hover:border-sky-300"
    >
      <span>{label}</span>
      <span className="text-[#258EE8]">{value}</span>
      <ChevronDown size={15} />
    </button>
  );

  return (
    <div dir="rtl" className="w-full">

      {/* MOBILE FILTER BAR */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 lg:hidden">
        <button
          type="button"
          onClick={() => setActivePanel("all")}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#258EE8] text-white shadow-md shadow-sky-100"
          aria-label="جميع الفلاتر"
        >
          <SlidersHorizontal size={18} />
        </button>

        <PanelButton
          label="نوع الوحدة"
          value={selectedType}
          panel="type"
        />

        <PanelButton
          label="الغرف"
          value={bedrooms}
          panel="rooms"
        />

        <PanelButton
          label="الحمامات"
          value={bathrooms}
          panel="rooms"
        />

        <PanelButton
          label="السعر"
          value="تحديد"
          panel="price"
        />

        <PanelButton
          label="الترتيب"
          value={sort}
          panel="sort"
        />
      </div>

      {/* FILTER PANEL */}
      {activePanel && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#10243A]/40 lg:hidden"
          onClick={closePanel}
        >
          <div
            className="max-h-[85vh] w-full overflow-y-auto rounded-t-[28px] bg-white p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* PANEL HEADER */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#183653]">
                {activePanel === "type" && "نوع الوحدة"}
                {activePanel === "rooms" && "الغرف والحمامات"}
                {activePanel === "price" && "نطاق السعر"}
                {activePanel === "sort" && "ترتيب النتائج"}
                {activePanel === "all" && "جميع الفلاتر"}
              </h3>

              <button
                type="button"
                onClick={closePanel}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                aria-label="إغلاق"
              >
                <X size={19} />
              </button>
            </div>

            {/* PROPERTY TYPES */}
            {(activePanel === "type" || activePanel === "all") && (
              <div className="mb-7">
                <h4 className="mb-4 font-bold text-[#294563]">
                  نوع الوحدة
                </h4>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {types.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedType(item)}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        selectedType === item
                          ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ROOMS */}
            {(activePanel === "rooms" || activePanel === "all") && (
              <div className="mb-7">
                <h4 className="mb-4 font-bold text-[#294563]">
                  غرف النوم
                </h4>

                <div className="flex flex-wrap gap-2">
                  {roomOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBedrooms(item)}
                      className={`h-11 min-w-11 rounded-full border px-3 text-sm font-bold ${
                        bedrooms === item
                          ? "border-[#258EE8] bg-[#258EE8] text-white"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <h4 className="mb-4 mt-6 font-bold text-[#294563]">
                  الحمامات
                </h4>

                <div className="flex flex-wrap gap-2">
                  {roomOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBathrooms(item)}
                      className={`h-11 min-w-11 rounded-full border px-3 text-sm font-bold ${
                        bathrooms === item
                          ? "border-[#258EE8] bg-[#258EE8] text-white"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PRICE */}
            {(activePanel === "price" || activePanel === "all") && (
              <div className="mb-7">
                <h4 className="mb-4 font-bold text-[#294563]">
                  نطاق السعر
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="أقل سعر"
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
                  />

                  <input
                    type="number"
                    placeholder="أعلى سعر"
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
                  />
                </div>
              </div>
            )}
{/* AREA */}
{activePanel === "all" && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">المساحة (م²)</h4>
    <div className="grid grid-cols-2 gap-3">
      <input
        type="number"
        value={minArea}
        onChange={(e) => setMinArea(e.target.value)}
        placeholder="أقل مساحة"
        className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
      />
      <input
        type="number"
        value={maxArea}
        onChange={(e) => setMaxArea(e.target.value)}
        placeholder="أكبر مساحة"
        className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
      />
    </div>
  </div>
)}
{/* PAYMENT METHOD */}
{activePanel === "all" && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">
      طريقة الدفع
    </h4>

    <div className="grid grid-cols-2 gap-2">
      {paymentOptions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setPaymentMethod(item)}
          className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
            paymentMethod === item
              ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
              : "border-slate-200 text-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
)}
{activePanel === "all" &&
  (paymentMethod === "تقسيط فقط" ||
    paymentMethod === "نقدي أو تقسيط") && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">نظام الدفع والتقسيط</h4>

    <div className="grid grid-cols-2 gap-3">
      <input
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
        placeholder="مقدم التعاقد"
        className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
      />
      <input
        type="number"
        value={monthlyPayment}
        onChange={(e) => setMonthlyPayment(e.target.value)}
        placeholder="القسط الشهري"
        className="w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-400"
      />
    </div>

    <h5 className="mb-3 mt-5 text-sm font-semibold text-[#52677E]">
      مدة التقسيط
    </h5>
    <div className="flex flex-wrap gap-2">
      {installmentOptions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setInstallmentYears(item)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold ${
            installmentYears === item
              ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
              : "border-slate-200 text-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
)}

{/* FINISHING */}
{activePanel === "all" && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">حالة التشطيب</h4>
    <div className="flex flex-wrap gap-2">
      {finishingOptions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setFinishing(item)}
          className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
            finishing === item
              ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
              : "border-slate-200 text-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
)}

{/* DELIVERY */}
{activePanel === "all" && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">موعد التسليم</h4>
    <div className="flex flex-wrap gap-2">
      {deliveryOptions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setDelivery(item)}
          className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${
            delivery === item
              ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
              : "border-slate-200 text-slate-600"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
)}

{/* AMENITIES */}
{activePanel === "all" && (
  <div className="mb-7">
    <h4 className="mb-4 font-bold text-[#294563]">المرافق والخدمات</h4>
    <div className="grid grid-cols-2 gap-2">
      {amenitiesOptions.map((item) => {
        const selected = amenities.includes(item);

        return (
          <button
            key={item}
            type="button"
            onClick={() =>
              setAmenities((current) =>
                selected
                  ? current.filter((value) => value !== item)
                  : [...current, item]
              )
            }
            className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold ${
              selected
                ? "border-[#258EE8] bg-sky-50 text-[#258EE8]"
                : "border-slate-200 text-slate-600"
            }`}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded border border-current">
              {selected && <Check size={14} />}
            </span>
            {item}
          </button>
        );
      })}
    </div>
  </div>
)}

            {/* SORT */}
            {activePanel === "sort" && (
              <div className="mb-7">
                {sortOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSort(item)}
                    className="flex w-full items-center justify-between border-b border-slate-100 py-4 text-sm font-semibold text-[#294563]"
                  >
                    {item}
                    {sort === item && (
                      <Check size={18} className="text-[#258EE8]" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* FOOTER */}
            <div className="sticky bottom-0 flex gap-3 border-t border-slate-100 bg-white pt-4">
              <button
                type="button"
                onClick={() => {
  setSelectedType("الكل");
  setPaymentMethod("الكل");
  setBedrooms("الكل");
  setBathrooms("الكل");
  setSort("الأحدث");

  setMinPrice("");
  setMaxPrice("");
  setMinArea("");
  setMaxArea("");

  setDownPayment("");
  setMonthlyPayment("");
  setInstallmentYears("الكل");

  setFinishing("الكل");
  setDelivery("الكل");
  setAmenities([]);
}}
                className="flex-1 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-600"
              >
                مسح الكل
              </button>

              <button
                type="button"
                onClick={closePanel}
                className="flex-[2] rounded-xl bg-[#258EE8] py-3 text-sm font-bold text-white shadow-lg shadow-sky-100"
              >
                عرض النتائج
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}