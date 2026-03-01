import { CarOffer } from './types'
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react'

interface CarListProps {
    cars: CarOffer[];
    selectedCarId: string | null;
    onSelectCar: (id: string) => void;
}

export default function CarList({ cars, selectedCarId, onSelectCar }: CarListProps) {
    return (
        <div className="flex flex-col bg-slate-50/30 overflow-y-auto h-full px-2 sm:px-3 py-2 sm:py-3 gap-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {cars.map((car) => {

                const isSelected = selectedCarId === car.id;

                // Status styling logic
                let indicatorColorClass = "bg-transparent";
                let statusBadge = null;
                let bgClass = "bg-white hover:bg-slate-50";

                if (car.status === 'bid_placed') {
                    indicatorColorClass = "bg-emerald-500";
                    bgClass = isSelected ? "bg-emerald-50/60" : "bg-white hover:bg-emerald-50/40";
                    statusBadge = (
                        <div className="flex items-center space-x-1 text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shrink-0">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Oferta</span>
                        </div>
                    );
                } else {
                    indicatorColorClass = isSelected ? "bg-indigo-400" : "bg-transparent";
                    statusBadge = null;
                }

                return (
                    <div
                        key={car.id}
                        onClick={() => onSelectCar(car.id)}
                        className={`
              group flex overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer
              ${isSelected
                                ? `border-indigo-200 shadow-md ring-1 ring-indigo-200/50 ${bgClass}`
                                : `border-slate-200 shadow-sm ${bgClass} hover:shadow-md hover:border-slate-300`
                            }
            `}
                    >
                        {/* Status indicator line */}
                        <div className={`w-1 shrink-0 transition-colors duration-300 ${indicatorColorClass}`}></div>

                        {/* Content Area (Narrow & Dense) */}
                        <div className="flex-1 p-3 flex flex-col gap-2.5">

                            {/* Image */}
                            <div className="relative w-24 h-16 shrink-0 rounded-lg overflow-hidden shadow-sm bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={car.imageUrls[0]} alt={`${car.company} ${car.modelFull}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg pointer-events-none"></div>
                                {car.imageUrls.length > 1 && (
                                    <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm border border-white/10">
                                        +{car.imageUrls.length - 1}
                                    </div>
                                )}
                            </div>

                            {/* Main Info */}
                            <div className="flex flex-col flex-1 min-w-0 justify-between py-0.5">
                                <div>
                                    <div className="flex justify-between items-start gap-1">
                                        <h3 className="font-bold text-slate-900 text-[13px] leading-tight group-hover:text-indigo-700 transition-colors truncate">
                                            {car.title || `${car.company} ${car.modelFull.split(',')[0]}`}
                                        </h3>
                                        {statusBadge}
                                    </div>
                                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                        {car.modelFull}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1.5 text-[10px] text-slate-500 mt-1">
                                    <span className="font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">{car.motor}</span>
                                    <span className="text-slate-300">•</span>
                                    <span className="font-medium text-slate-600">EZ {car.ez}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: Price & Time */}
                        <div className="flex justify-between items-center pt-2.5 border-t border-slate-100/80">
                            <div className="flex items-center space-x-1.5">
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">R.K.</span>
                                <span className="font-bold text-slate-700 text-[12px]">{car.rk.toLocaleString('de-DE')} €</span>
                                <span className="text-slate-300 mx-1">|</span>
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">WBW</span>
                                <span className="font-bold text-slate-900 text-[12px]">{car.wbw.toLocaleString('de-DE')} €</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                                <span className="font-bold text-rose-600 flex items-center text-[11px] bg-rose-50 px-1.5 py-0.5 rounded">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {car.endTime}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
