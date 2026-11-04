"use client";

import { useState } from "react";
import {
  Search,
  MapPinned,
  SlidersHorizontal,
  PlusCircle,
    X,
  ChevronDown,
  MapPin,
  BedDouble,
  Bath,
  Wallet,
  Ruler,
  Check,
} from "lucide-react";

type MarketOption = {
  value: string;
  label: string;
};

type Props = {
  selectedMarket: string;
  marketOptions: Record<string, MarketOption[]>;
};

export default function HomeSearch({
  selectedMarket,
  marketOptions,
}: Props) {
  const [activePanel, setActivePanel] = useState("");

  const [operation, setOperation] = useState(
    selectedMarket === "إعادة البيع" ? "resale" : "sale"
  );

  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  const [bedrooms, setBedrooms] = useState("الكل");
  const [bathrooms, setBathrooms] = useState("الكل");

  const [paymentMethod, setPaymentMethod] = useState("الكل");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [installmentYears, setInstallmentYears] = useState("الكل");

  const [finishing, setFinishing] = useState("الكل");
  const [delivery, setDelivery] = useState("الكل");
  const [amenities, setAmenities] = useState<string[]>([]);

  const currentTypes = marketOptions[selectedMarket] || [];

  const marketValue =
    selectedMarket === "سكني"
      ? "residential"
      : selectedMarket === "تجاري"
        ? "commercial"
        : selectedMarket === "فندقي"
          ? "hotel"
          : selectedMarket === "إعادة البيع"
            ? "resale"
            : "investment";

  const installmentEnabled =
    paymentMethod === "تقسيط فقط" ||
    paymentMethod === "نقدي أو تقسيط";

  const toggleAmenity = (item: string) => {
    setAmenities((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const resetFilters = () => {
    setOperation(selectedMarket === "إعادة البيع" ? "resale" : "sale");
    setPropertyType("");
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
    setMinArea("");
    setMaxArea("");
    setBedrooms("الكل");
    setBathrooms("الكل");
    setPaymentMethod("الكل");
    setDownPayment("");
    setMonthlyPayment("");
    setInstallmentYears("الكل");
    setFinishing("الكل");
    setDelivery("الكل");
    setAmenities([]);
  };

  const panelButton =
    "flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-sky-100 bg-[#F6FAFE] px-4 py-4 text-right transition hover:border-sky-300 hover:bg-sky-50";

  const choiceButton = (active: boolean) =>
    `rounded-xl border px-4 py-3 text-sm font-bold transition ${
      active
        ? "border-[#258EE8] bg-sky-50 text-[#0878D9]"
        : "border-sky-100 bg-white text-slate-500 hover:border-sky-300"
    }`;

  const inputStyle =
    "w-full min-w-0 rounded-xl border border-sky-100 bg-[#F6FAFE] px-4 py-3 text-sm text-[#142B49] outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100";

  const panelTitle =
    "mb-4 text-base font-extrabold text-[#142B49]";

  const isOpen = (name: string) => activePanel === name;

  return (
    <section className="relative mx-auto max-w-[1500px] px-3 pb-10 pt-2 sm:px-8 sm:pb-12 lg:px-12">
      <form
        action="/properties"
        method="get"
        className="relative rounded-[30px] border border-sky-100/90 bg-white p-4 shadow-[0_12px_38px_rgba(31,104,160,0.07)] sm:rounded-[38px] sm:p-7 lg:p-9"
      >
        <input type="hidden" name="market" value={marketValue} />
        <input type="hidden" name="operation" value={operation} />
        <input type="hidden" name="type" value={propertyType} />
        <input type="hidden" name="location" value={location} />

        <input type="hidden" name="minPrice" value={minPrice} />
        <input type="hidden" name="maxPrice" value={maxPrice} />
        <input type="hidden" name="minArea" value={minArea} />
        <input type="hidden" name="maxArea" value={maxArea} />

        <input type="hidden" name="bedrooms" value={bedrooms} />
        <input type="hidden" name="bathrooms" value={bathrooms} />

        <input type="hidden" name="paymentMethod" value={paymentMethod} />
        <input type="hidden" name="downPayment" value={downPayment} />
        <input type="hidden" name="monthlyPayment" value={monthlyPayment} />
        <input
          type="hidden"
          name="installmentYears"
          value={installmentYears}
        />

        <input type="hidden" name="finishing" value={finishing} />
        <input type="hidden" name="delivery" value={delivery} />

        {amenities.map((item) => (
          <input key={item} type="hidden" name="amenities" value={item} />
        ))}

        {/* HEADER */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-[#142B49] sm:text-2xl">
              ابحث عن عقارك
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              اكتشف العقار المناسب لك بسهولة
            </p>
          </div>

          <a
            href="/advanced-search"
            className="rounded-full border border-sky-100 bg-[#F8FCFF] px-4 py-2 text-xs font-bold text-[#258EE8] transition hover:bg-sky-50"
          >
            البحث المتقدم ←
          </a>
        </div>

        {/* MAIN FILTER BAR */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          <button
            type="button"
            onClick={() => setActivePanel("operation")}
            className={panelButton}
          >
            <span>
              <span className="block text-[10px] text-slate-400">
                نوع العملية
              </span>
              <span className="mt-1 block text-sm font-extrabold text-[#142B49]">
                {operation === "rent"
                  ? "إيجار"
                  : operation === "resale"
                    ? "إعادة بيع / تنازل"
                    : "شراء"}
              </span>
            </span>
            <ChevronDown size={17} className="shrink-0 text-[#258EE8]" />
          </button>

          <button
            type="button"
            onClick={() => setActivePanel("type")}
            className={panelButton}
          >
            <span>
              <span className="block text-[10px] text-slate-400">
                نوع العقار
              </span>
              <span className="mt-1 block text-sm font-extrabold text-[#142B49]">
                {currentTypes.find((item) => item.value === propertyType)
                  ?.label || "كل العقارات"}
              </span>
            </span>
            <ChevronDown size={17} className="shrink-0 text-[#258EE8]" />
          </button>

          <button
            type="button"
            onClick={() => setActivePanel("location")}
            className={panelButton}
          >
            <span>
              <span className="block text-[10px] text-slate-400">
                الموقع
              </span>
              <span className="mt-1 block truncate text-sm font-extrabold text-[#142B49]">
                {location || "كل المناطق"}
              </span>
            </span>
            <MapPin size={17} className="shrink-0 text-[#258EE8]" />
          </button>

          <button
            type="button"
            onClick={() => setActivePanel("price")}
            className={panelButton}
          >
            <span>
              <span className="block text-[10px] text-slate-400">
                نطاق السعر
              </span>
              <span className="mt-1 block text-sm font-extrabold text-[#142B49]">
                {minPrice || maxPrice
                  ? "تم تحديد السعر"
                  : "كل الأسعار"}
              </span>
            </span>
            <Wallet size={17} className="shrink-0 text-[#258EE8]" />
          </button>

          <button
            type="button"
            onClick={() => setActivePanel("all")}
            className="col-span-2 flex items-center justify-center gap-3 rounded-2xl bg-[#142B49] px-4 py-4 text-sm font-extrabold text-white transition hover:bg-[#1C3B62] sm:col-span-1"
          >
            <SlidersHorizontal size={18} />
            جميع الفلاتر
          </button>
        </div>

        {/* SEARCH BUTTON */}
<div className="mt-5 flex flex-col gap-4 border-t border-sky-50 pt-5 sm:flex-row sm:items-center sm:justify-between">
  <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs font-bold text-[#52677E]">
    <a
      href="/map"
      className="flex items-center gap-2 transition hover:text-[#258EE8]"
    >
      <MapPinned size={17} strokeWidth={1.8} className="text-[#258EE8]" />
      البحث بالخريطة
    </a>

    <a
      href="/advanced-search"
      className="flex items-center gap-2 transition hover:text-[#258EE8]"
    >
      <SlidersHorizontal size={17} strokeWidth={1.8} className="text-[#258EE8]" />
      خيارات متقدمة
    </a>

    <a
      href="/property-request"
      className="flex items-center gap-2 transition hover:text-[#258EE8]"
    >
      <PlusCircle size={17} strokeWidth={1.8} className="text-[#258EE8]" />
      اطلب عقارك
    </a>
  </div>

  <button
    type="submit"
    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-[#0878D9] to-[#48B8F5] px-8 py-4 text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(37,142,232,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,142,232,0.30)] sm:w-auto"
  >
    <Search size={19} />
    بحث عن عقار
  </button>
</div>

          
      </form>

      {/* FILTER OVERLAY */}
      {activePanel !== "" && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#0B1E3B]/45 backdrop-blur-sm sm:items-center sm:p-5"
          onClick={() => setActivePanel("")}
        >
          <div
            dir="rtl"
            className="max-h-[88vh] w-full max-w-xl overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between border-b border-sky-50 px-5 py-4">
              <h3 className="text-lg font-extrabold text-[#142B49]">
                {activePanel === "operation"
                  ? "نوع العملية"
                  : activePanel === "type"
                    ? "نوع العقار"
                    : activePanel === "location"
                      ? "حدد الموقع"
                      : activePanel === "price"
                        ? "نطاق السعر"
                        : "جميع الفلاتر"}
              </h3>

              <button
                type="button"
                onClick={() => setActivePanel("")}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-sky-50 hover:text-[#258EE8]"
                aria-label="إغلاق"
              >
                <X size={19} />
              </button>
            </div>

            {/* PANEL CONTENT */}
            <div className="max-h-[65vh] space-y-6 overflow-y-auto p-5">
              {(isOpen("operation") || isOpen("all")) && (
                <div>
                  <h4 className={panelTitle}>نوع العملية</h4>
                  <div className="flex flex-wrap gap-2">
                    {(
                      selectedMarket === "إعادة البيع"
                        ? [{ value: "resale", label: "إعادة بيع / تنازل" }]
                        : [
                            { value: "sale", label: "شراء" },
                            { value: "rent", label: "إيجار" },
                          ]
                    ).map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setOperation(item.value)}
                        className={choiceButton(operation === item.value)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(isOpen("type") || isOpen("all")) && (
                <div>
                  <h4 className={panelTitle}>نوع العقار</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType("")}
                      className={choiceButton(propertyType === "")}
                    >
                      كل الأنواع
                    </button>

                    {currentTypes.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setPropertyType(item.value)}
                        className={choiceButton(
                          propertyType === item.value
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(isOpen("location") || isOpen("all")) && (
                <div>
                  <h4 className={panelTitle}>الموقع</h4>
                  <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="اكتب المدينة أو المنطقة"
                    className={inputStyle}
                  />
                </div>
              )}

              {(isOpen("price") || isOpen("all")) && (
                <div>
                  <h4 className={panelTitle}>نطاق السعر</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      min="0"
                      value={minPrice}
                      onChange={(event) => setMinPrice(event.target.value)}
                      placeholder="أقل سعر"
                      className={inputStyle}
                    />
                    <input
                      type="number"
                      min="0"
                      value={maxPrice}
                      onChange={(event) => setMaxPrice(event.target.value)}
                      placeholder="أعلى سعر"
                      className={inputStyle}
                    />
                  </div>
                </div>
              )}

              {isOpen("all") && (
                <>
                  <div>
                    <h4 className={panelTitle}>عدد الغرف</h4>
                    <div className="flex flex-wrap gap-2">
                      {["الكل", "1", "2", "3", "4", "5+"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setBedrooms(item)}
                          className={choiceButton(bedrooms === item)}
                        >
                          {item === "الكل" ? item : `${item} غرف`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={panelTitle}>عدد الحمامات</h4>
                    <div className="flex flex-wrap gap-2">
                      {["الكل", "1", "2", "3", "4+"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setBathrooms(item)}
                          className={choiceButton(bathrooms === item)}
                        >
                          {item === "الكل" ? item : `${item} حمام`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={panelTitle}>المساحة بالمتر المربع</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        min="0"
                        value={minArea}
                        onChange={(event) => setMinArea(event.target.value)}
                        placeholder="أقل مساحة"
                        className={inputStyle}
                      />
                      <input
                        type="number"
                        min="0"
                        value={maxArea}
                        onChange={(event) => setMaxArea(event.target.value)}
                        placeholder="أعلى مساحة"
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className={panelTitle}>طريقة الدفع</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "الكل",
                        "نقدي فقط",
                        "تقسيط فقط",
                        "نقدي أو تقسيط",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setPaymentMethod(item)}
                          className={choiceButton(paymentMethod === item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {installmentEnabled && (
                    <div className="space-y-4 rounded-2xl border border-sky-100 bg-[#F8FCFF] p-4">
                      <h4 className={panelTitle}>تفاصيل التقسيط</h4>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-500">
                          مقدم الدفع
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={downPayment}
                          onChange={(event) =>
                            setDownPayment(event.target.value)
                          }
                          placeholder="المقدم بالجنيه"
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-500">
                          القسط الشهري
                        </label>
                        <input
                          type="number"
                          min="0"
                          value={monthlyPayment}
                          onChange={(event) =>
                            setMonthlyPayment(event.target.value)
                          }
                          placeholder="القسط الشهري بالجنيه"
                          className={inputStyle}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-500">
                          مدة التقسيط
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["الكل", "1", "2", "3", "4", "5", "6", "7", "8", "10"].map(
                            (item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setInstallmentYears(item)}
                                className={choiceButton(
                                  installmentYears === item
                                )}
                              >
                                {item === "الكل" ? item : `${item} سنوات`}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className={panelTitle}>التشطيب</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "الكل",
                        "بدون تشطيب",
                        "نصف تشطيب",
                        "تشطيب كامل",
                        "سوبر لوكس",
                        "فاخر",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFinishing(item)}
                          className={choiceButton(finishing === item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={panelTitle}>موعد الاستلام</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "الكل",
                        "استلام فوري",
                        "خلال 3 أشهر",
                        "خلال 6 أشهر",
                        "خلال سنة",
                        "على المحارة",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setDelivery(item)}
                          className={choiceButton(delivery === item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={panelTitle}>مميزات العقار</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "مصعد",
                        "جراج",
                        "حديقة",
                        "حمام سباحة",
                        "أمن وحراسة",
                        "تكييف مركزي",
                        "إطلالة مميزة",
                        "قريب من الخدمات",
                      ].map((item) => {
                        const active = amenities.includes(item);

                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleAmenity(item)}
                            className={choiceButton(active)}
                          >
                            {active && (
                              <Check size={14} className="ml-1 inline" />
                            )}
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* PANEL FOOTER */}
            <div className="flex items-center justify-between gap-3 border-t border-sky-50 bg-white p-4">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-3 text-xs font-bold text-slate-400 transition hover:text-red-500"
              >
                مسح الاختيارات
              </button>

              <button
                type="button"
                onClick={() => setActivePanel("")}
                className="flex-1 rounded-xl bg-gradient-to-l from-[#0878D9] to-[#48B8F5] px-5 py-3 text-sm font-extrabold text-white"
              >
                تطبيق الاختيارات
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}