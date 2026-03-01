"use client";

import { useState } from 'react'
import { CarOffer } from './types'
import { mockCarsItems } from './data.mock'
import CarList from './CarList'
import CarDetailPanel from './CarDetailPanel'
import { Car, BarChart3, AlertCircle, ArrowLeft } from 'lucide-react'

export default function DashboardView() {
    const [selectedId, setSelectedId] = useState<string | null>(mockCarsItems[0]?.id || null);
    const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

    const activeBidsCount = mockCarsItems.filter(c => c.status === 'bid_placed').length;

    const handleSelectCar = (id: string) => {
        setSelectedId(id);
        setIsMobileDetailOpen(true);
    };

    const handleBackToList = () => {
        setIsMobileDetailOpen(false);
    };

    const selectedCar = mockCarsItems.find(c => c.id === selectedId) || null;

    return (
        <div className="min-h-screen bg-slate-100/50 flex flex-col font-sans">

            {/* Header - Premium Corporate */}
            <div className="bg-white border-b border-slate-200/80 px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center shrink-0 z-20 relative shadow-sm">
                <div className="flex items-center space-x-3 text-slate-900 mb-3 sm:mb-0">
                    <div className="p-2 bg-indigo-600 rounded-lg shadow-sm">
                        <Car className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                            B2B Restwertbörse
                        </h1>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest mt-1">Ekskluzywny Dostęp Dealerski</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shrink-0">
                        <BarChart3 className="w-4 h-4 text-indigo-500" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Aktywne Aukcje</span>
                            <span className="text-sm font-bold text-slate-700 leading-none mt-0.5">{mockCarsItems.length}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-emerald-50/50 border border-emerald-100 px-3 py-1.5 rounded-lg shrink-0">
                        <AlertCircle className="w-4 h-4 text-emerald-500" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-emerald-600/80 font-bold uppercase tracking-wider leading-none">Twoje Oferty</span>
                            <span className="text-sm font-bold text-emerald-700 leading-none mt-0.5">{activeBidsCount}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Bar */}
            {isMobileDetailOpen && (
                <div className="lg:hidden bg-slate-900 text-white px-4 py-3 flex items-center shrink-0 shadow-md z-30 sticky top-0">
                    <button
                        onClick={handleBackToList}
                        className="flex items-center text-sm font-semibold hover:text-indigo-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Wróć do listy
                    </button>
                    <div className="ml-auto text-xs font-mono opacity-60">ID: {selectedId}</div>
                </div>
            )}

            {/* Main Layout: Master (List) - Detail (Content) */}
            <div className={`flex flex-col lg:flex-row flex-1 overflow-hidden relative ${isMobileDetailOpen ? 'bg-slate-900 lg:bg-transparent' : ''}`}>

                {/* Left List Column (Narrow Master - Apple Mail Style) */}
                <div className={`
                    flex flex-col bg-slate-50 border-r border-slate-200 overflow-hidden relative shrink-0
                    ${isMobileDetailOpen ? 'hidden lg:flex' : 'flex'}
                    w-full lg:w-[340px] xl:w-[360px] h-[calc(100vh-80px)] lg:h-[calc(100vh-76px)]
                `}>
                    {/* Header of the list */}
                    <div className="bg-white border-b border-slate-200 p-3 flex justify-between items-center text-xs font-semibold shrink-0 shadow-sm z-10">
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-1.5">
                                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                <span className="text-slate-500">Oczekujące <span className="text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-md ml-1">{mockCarsItems.filter(c => c.status === 'active').length}</span></span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                                <span className="text-slate-500">Złożono <span className="text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-md ml-1">{activeBidsCount}</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <CarList
                            cars={mockCarsItems}
                            selectedCarId={selectedId}
                            onSelectCar={handleSelectCar}
                        />
                    </div>
                </div>

                {/* Right Detail Panel Column (Ultra Wide Detail) */}
                <div className={`
                    ${isMobileDetailOpen ? 'flex' : 'hidden lg:flex'}
                    flex-1 min-w-0 bg-white h-[calc(100vh-80px-44px)] lg:h-[calc(100vh-76px)] overflow-hidden
                `}>
                    <CarDetailPanel car={selectedCar} />
                </div>

            </div>
        </div>
    )
}
