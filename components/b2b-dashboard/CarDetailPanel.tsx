"use client";

import { useState, useEffect } from 'react'
import { CarOffer } from './types'
import { Clock, ShieldCheck, CheckCircle2, Settings, FileText, BadgeInfo, Camera, ChevronRight, ChevronLeft, AlertCircle, Info, Maximize2, X } from 'lucide-react'

interface CarDetailPanelProps {
    car: CarOffer | null;
}

export default function CarDetailPanel({ car }: CarDetailPanelProps) {
    const [activeTab, setActiveTab] = useState<'ausstattung' | 'bericht' | 'kalkulation'>('ausstattung');
    const [activeImageIdx, setActiveImageIdx] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    useEffect(() => {
        setActiveImageIdx(0);
        setActiveTab('ausstattung');
    }, [car?.id]);

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeImageIdx > 0) setActiveImageIdx(activeImageIdx - 1);
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (activeImageIdx < (car?.imageUrls.length || 1) - 1) setActiveImageIdx(activeImageIdx + 1);
    };

    if (!car) {
        return (
            <div className="h-full flex flex-col items-center justify-center bg-transparent p-8 text-center">
                <div className="w-12 h-12 text-slate-300 rounded-full flex items-center justify-center mb-3">
                    <BadgeInfo className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="text-sm font-semibold text-slate-600 mb-1">Brak zaznaczenia</h3>
                <p className="text-slate-400 text-xs max-w-[220px]">
                    Wybierz pojazd z listy ubezpieczeniowej po lewej stronie, aby wyświetlić szczegóły i dokumentację Audatex.
                </p>
            </div>
        );
    }

    const costsPct = Math.min(100, (car.rk / car.wbw) * 100);

    return (
        <div className="h-full flex flex-col bg-white overflow-hidden relative">

            {/* SaaS Style Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-8 py-3 shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                    <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-widest mb-0.5">
                        <span className="font-bold text-slate-700">Dossier: #{car.id}</span>
                        <span className="text-slate-300">•</span>
                        <span>{car.locationZip} ({car.distanceKm}km)</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-rose-600 font-bold flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Zakończenie: {car.endTime}
                        </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {car.title || `${car.company} ${car.modelFull}`}
                    </h2>
                </div>
                <div className="shrink-0 flex items-center space-x-3">
                    {car.status === 'bid_placed' && (
                        <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-md flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-1.5" />
                            <span className="text-xs font-bold">Oferta Aktywna: {car.currentBid?.toLocaleString('de-DE')} €</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Scrollable Area */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">

                {/* Top Section: Gallery + Bidding/Stats (Wide Split View) */}
                <div className="flex flex-col xl:flex-row border-b border-slate-200">

                    {/* Left: Huge Gallery (Min 50% width on Desktop) */}
                    <div className="w-full xl:w-1/2 p-4 sm:p-6 bg-slate-50/50 border-b xl:border-b-0 xl:border-r border-slate-200">
                        <div className="flex flex-col gap-2">
                            {/* Main Image Container */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={car.imageUrls[activeImageIdx]}
                                    alt="Pojazd"
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />

                                {/* Navigation Arrows */}
                                {activeImageIdx > 0 && (
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                                    >
                                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                )}
                                {activeImageIdx < car.imageUrls.length - 1 && (
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                                    >
                                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                )}

                                <div className="absolute top-2 left-2 pointer-events-none">
                                    <div className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center">
                                        <ShieldCheck className="w-3 h-3 mr-1.5 text-emerald-400" /> VIN: {car.vin}
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsGalleryOpen(true)}
                                    className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold flex items-center transition-colors z-10"
                                >
                                    <Maximize2 className="w-3 h-3 mr-1.5" /> Powiększ
                                </button>
                                {/* Camera icon showing current / total */}
                                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold flex items-center pointer-events-none">
                                    <Camera className="w-3 h-3 mr-1.5" /> {activeImageIdx + 1} / {car.imageUrls.length}
                                </div>
                            </div>

                            {/* Gallery Thumbnails (Grid on Desktop, horizontal scroll on Mobile) */}
                            <div className="flex overflow-x-auto snap-x scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent pb-1 gap-2">
                                {car.imageUrls.map((url, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIdx(idx)}
                                        className={`
                          relative shrink-0 snap-center rounded overflow-hidden transition-all
                          w-[72px] h-[48px] sm:w-[96px] sm:h-[64px] border-2
                          ${activeImageIdx === idx ? 'border-indigo-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100 ring-1 ring-inset ring-slate-200'}
                        `}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={url} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Technical Specs & Bidding (Wider than before) */}
                    <div className="w-full xl:w-1/2 flex flex-col bg-white">

                        {/* Technical Grid - Density like SaaS Table */}
                        <div className="p-4 sm:p-6 pb-2">
                            <h3 className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Dane Techniczne</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">1. Rejestracja (EZ)</span>
                                    <span className="text-xs font-bold text-slate-900">{car.ez}</span>
                                </div>
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">Przebieg (km)</span>
                                    <span className="text-xs font-bold text-slate-900">{car.mileage.toLocaleString('de-DE')}</span>
                                </div>
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">Pojemność / Moc</span>
                                    <span className="text-xs font-bold text-slate-900">{car.capacityCcm.toLocaleString('de-DE')} ccm / {car.powerKw} kW</span>
                                </div>
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">Skrzynia Biegów</span>
                                    <span className="text-xs font-bold text-slate-900">{car.gearbox}</span>
                                </div>
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">Napęd / Paliwo</span>
                                    <span className="text-xs font-bold text-slate-900 truncate">{car.motor}</span>
                                </div>
                                <div className="flex flex-col border-b border-slate-100 pb-1.5">
                                    <span className="text-[10px] text-slate-500 uppercase">Kolor / Nast. HU</span>
                                    <span className="text-xs font-bold text-slate-900 capitalize">{car.color} / {car.nextHu}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bidding Block - Clean & Professional */}
                        <div className="p-4 sm:p-6 mt-auto bg-slate-50/50 border-t border-slate-100">

                            {/* Financial Overview Progress Bar */}
                            <div className="mb-5">
                                <div className="flex justify-between items-end mb-1.5">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Koszty Naprawy (R.K.)</span>
                                        <span className="text-sm font-bold text-rose-600">{car.rk.toLocaleString('de-DE')} €</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Wartość Pojazdu (WBW)</span>
                                        <span className="text-sm font-bold text-slate-900">{car.wbw.toLocaleString('de-DE')} €</span>
                                    </div>
                                </div>
                                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden flex">
                                    <div
                                        className={`h-full transition-all duration-500 ${costsPct > 70 ? 'bg-rose-500' : (costsPct > 40 ? 'bg-amber-500' : 'bg-emerald-500')}`}
                                        style={{ width: `${costsPct}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Action Area */}
                            {car.status === 'bid_placed' ? (
                                <div className="bg-white border border-emerald-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-0.5">Stan Licytacji</div>
                                        <div className="text-xs text-slate-600">Złożono wiążącą ofertę w ciemno.</div>
                                    </div>
                                    <div className="text-lg font-black text-emerald-700">
                                        {car.currentBid?.toLocaleString('de-DE')} €
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm pointer-events-none">€</span>
                                            <input
                                                type="number"
                                                placeholder="Maks. oferta"
                                                className="w-full bg-white border border-slate-300 rounded-lg pl-7 pr-3 py-2 sm:py-2.5 text-sm font-bold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                        <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-xs sm:text-sm whitespace-nowrap flex items-center">
                                            Złóż Ofertę
                                            <ChevronRight className="w-3.5 h-3.5 ml-1 opacity-70" />
                                        </button>
                                    </div>
                                    <div className="text-[9px] text-slate-500 mt-2 flex items-center leading-tight">
                                        <AlertCircle className="w-3 h-3 mr-1 shrink-0 text-amber-500" />
                                        Platforma działa na zasadzie aukcji w ciemno (&quot;Restwertbörse&quot;). Złożona oferta jest wiążąca bez prawa do wycofania.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tabs - Sticky & Clean */}
                <div className="border-b border-slate-200 bg-white px-4 sm:px-6 sticky top-0 z-10">
                    <nav className="-mb-px flex space-x-6 overflow-x-auto scrollbar-none" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab('ausstattung')}
                            className={`whitespace-nowrap pb-2.5 border-b-[3px] font-bold text-[11px] sm:text-xs tracking-wide transition-colors pt-3 ${activeTab === 'ausstattung'
                                ? 'border-indigo-600 text-indigo-700'
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                                }`}
                        >
                            Udogodnienia (Ausstattung)
                        </button>
                        <button
                            onClick={() => setActiveTab('bericht')}
                            className={`whitespace-nowrap pb-2.5 border-b-[3px] font-bold text-[11px] sm:text-xs tracking-wide transition-colors pt-3 flex items-center ${activeTab === 'bericht'
                                ? 'border-indigo-600 text-indigo-700'
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                                }`}
                        >
                            <FileText className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                            Raport Eksperta (Bericht)
                        </button>
                        <button
                            onClick={() => setActiveTab('kalkulation')}
                            className={`whitespace-nowrap pb-2.5 border-b-[3px] font-bold text-[11px] sm:text-xs tracking-wide transition-colors pt-3 flex items-center ${activeTab === 'kalkulation'
                                ? 'border-indigo-600 text-indigo-700'
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                                }`}
                        >
                            <Settings className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                            Kosztorys (Kalkulation & Ersatzteile)
                        </button>
                    </nav>
                </div>

                {/* Document Content - Expanded Width */}
                <div className="bg-white">
                    <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px] mx-auto min-h-[400px]">

                        {activeTab === 'ausstattung' && (
                            <div className="text-[11px] sm:text-xs text-justify">
                                {car.equipment.map((block, idx) => {
                                    if (block === "Serienausstattung:") return <div key={idx} className="font-bold text-slate-900 mt-6 mb-2 border-b border-slate-200 pb-1.5 uppercase tracking-widest text-[10px]">Wyposażenie Seryjne</div>;

                                    let formattedBlock = block;
                                    const keywords = ['Getriebe', 'Licht', 'System', 'Drive', 'Bremsassistent', 'Notbremsfunktion', 'Müdigkeitserkennung', 'Geschwindigkeits', 'Gang', 'Doppelkupplungsgetriebe', 'Plus', 'Start', 'Xenon', 'Anhängerkupplung', 'Freisprecheinrichtung', 'Einparkhilfe', 'Abblendautomatik', 'digital', 'cockpit', 'Zonen', 'Navigation', 'Alcantara', 'Sound', 'Sitze', 'Dachhimmel', 'assist'];

                                    keywords.forEach(kw => {
                                        const regex = new RegExp(`\\b${kw}\\b`, 'g');
                                        formattedBlock = formattedBlock.replace(regex, `<span class="bg-indigo-50/50 text-indigo-800 font-semibold px-0.5 rounded-sm">${kw}</span>`);
                                    });

                                    return (
                                        <div key={idx} className="leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formattedBlock }} />
                                    )
                                })}
                            </div>
                        )}

                        {activeTab === 'bericht' && (
                            <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-6 w-full">
                                <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase mb-4 border-b border-slate-100 pb-2">
                                    <FileText className="w-3 h-3" />
                                    <span>Zapis rzeczoznawcy</span>
                                </div>
                                <div className="text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap font-mono text-slate-800">
                                    {car.reportText || "Brak szczegółowego raportu dla tego pojazdu."}
                                </div>
                            </div>
                        )}

                        {activeTab === 'kalkulation' && (
                            <div className="space-y-6">

                                {/* Advanced Audatex Table */}
                                {car.kalkulationDetails && car.kalkulationDetails.length > 0 ? (
                                    <div className="bg-white border border-slate-200 shadow-sm w-full">
                                        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                                            <span className="font-bold text-[10px] text-slate-600 uppercase tracking-widest">Szczegółowy wykaz części (AUDATEX / DAT)</span>
                                            <span className="text-[10px] text-slate-400 font-mono">ID: {car.id}</span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse min-w-[600px] table-auto">
                                                <thead>
                                                    <tr className="border-b border-slate-200 bg-white text-[10px] text-slate-500 uppercase tracking-wider">
                                                        <th className="py-2.5 px-4 font-semibold w-16 text-center">Poz. (Leit-Nr)</th>
                                                        <th className="py-2.5 px-4 font-semibold">Opis Części (Bezeichnung)</th>
                                                        <th className="py-2.5 px-4 font-semibold w-20 text-center">Ilość</th>
                                                        <th className="py-2.5 px-4 font-semibold w-28 text-center">Rodzaj (Typ)</th>
                                                        <th className="py-2.5 px-4 font-semibold text-right w-36">Cena Netto (Preis)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-[11px] sm:text-xs text-slate-700">
                                                    {car.kalkulationDetails.map((item, idx) => (
                                                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                                                            <td className="py-2 px-4 text-center font-mono text-slate-400 text-[10px]">{2300 + item.position * 12}</td>
                                                            <td className="py-2 px-4 font-medium">{item.name}</td>
                                                            <td className="py-2 px-4 text-center font-mono">1</td>
                                                            <td className="py-2 px-4 text-center">
                                                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${item.type === 'E' ? 'bg-amber-100 text-amber-800' : (item.type === 'L' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-600')}`}>
                                                                    {item.type} (Erneuern)
                                                                </span>
                                                            </td>
                                                            <td className="py-2 px-4 text-right font-mono font-medium">{item.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ) : null}

                                {/* Summary Totals Table */}
                                <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 shadow-sm max-w-[400px] ml-auto">
                                    <h4 className="font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3 flex items-center text-[10px]">
                                        <Settings className="w-3.5 h-3.5 mr-1.5" />
                                        Zusammenfassung (Podsumowanie)
                                    </h4>
                                    <div className="grid grid-cols-[1fr_auto] gap-y-2 text-[11px] sm:text-xs mt-2">
                                        <div className="text-slate-500">Koszty Części (Ersatzteile):</div>
                                        <div className="text-right font-mono text-slate-800">{car.partsCost.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>
                                        <div className="text-slate-500">Robocizna (Lohnkosten):</div>
                                        <div className="text-right font-mono text-slate-800">{car.laborCost.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>
                                        <div className="text-slate-500 pb-2 border-b border-slate-200">Koszty Lakieru (Lackkosten):</div>
                                        <div className="text-right font-mono text-slate-800 pb-2 border-b border-slate-200">{car.paintCost.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>

                                        <div className="text-slate-900 font-bold pt-2 uppercase tracking-wide text-[10px] sm:text-[11px] self-end">Suma Kosztów (Rep.-Kosten):</div>
                                        <div className="text-right font-black font-mono text-rose-600 text-base sm:text-lg pt-1">{car.rk.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>

                                        <div className="text-slate-500 font-bold uppercase tracking-wide text-[10px] mt-2 self-end">Wartość Pojazdu (WBW):</div>
                                        <div className="text-right font-bold font-mono text-slate-900 text-sm mt-2">{car.wbw.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</div>
                                    </div>
                                </div>

                                {car.calculationText && (
                                    <div className="flex items-start bg-blue-50/60 p-3 mt-4 border border-blue-100 rounded">
                                        <Info className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                                        <div className="text-[10px] sm:text-[11px] text-blue-800 leading-relaxed font-medium">
                                            {car.calculationText} Powyższe dane stanowią wycenę niezależnego rzeczoznawcy zgodnie z systemem Audatex / DAT Europe.
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Fullscreen Gallery Modal */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
                    <button
                        onClick={() => setIsGalleryOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-slate-300 bg-white/10 p-2 rounded-full transition-colors z-50"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-white absolute top-6 left-6 font-bold text-sm tracking-widest bg-black/50 px-3 py-1.5 rounded-md">
                        {activeImageIdx + 1} / {car.imageUrls.length}
                    </div>

                    <div className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center p-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={car.imageUrls[activeImageIdx]}
                            alt={`Fullscreen image ${activeImageIdx + 1}`}
                            className="max-w-full max-h-[80vh] object-contain select-none"
                        />

                        {/* Huge Arrows for Fullscreen */}
                        {activeImageIdx > 0 && (
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}
                        {activeImageIdx < car.imageUrls.length - 1 && (
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        )}
                    </div>

                    {/* Thumbnail strip at the bottom */}
                    <div className="absolute bottom-6 w-full max-w-4xl px-8 flex justify-center gap-2 overflow-x-auto scrollbar-none py-2">
                        {car.imageUrls.map((url, idx) => (
                            <button
                                key={`fs-thumb-${idx}`}
                                onClick={() => setActiveImageIdx(idx)}
                                className={`
                                   shrink-0 rounded overflow-hidden transition-all
                                   w-16 h-12 border-2
                                   ${activeImageIdx === idx ? 'border-indigo-400 opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-100'}
                                 `}
                            >
                                <img src={url} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
