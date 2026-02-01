'use client';

import { useState } from 'react';

export default function VehiclesTestPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchVehicles = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch('/api/carcasion/vehicles');
      const result = await response.json();

      if (response.ok) {
        setData(result);
      } else {
        setError(result.error || 'Wystąpił błąd');
      }
    } catch (err: any) {
      setError(`Błąd sieci: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🚗 Test Pobierania Pojazdów z car.casion
          </h1>
          <p className="text-gray-600 mb-8">
            Kliknij przycisk, żeby pobrać dane o pojazdach z ostatnich 30 dni
          </p>

          {/* Przycisk */}
          <button
            onClick={fetchVehicles}
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg mb-8"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Pobieram dane...
              </span>
            ) : (
              '📥 Pobierz Pojazdy z car.casion'
            )}
          </button>

          {/* Loading */}
          {loading && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800">
                ⏳ Łączę się z car.casion i pobieram dane pojazdów...
              </p>
            </div>
          )}

          {/* Błąd */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="text-red-800 font-semibold mb-2">❌ Błąd</h3>
              <p className="text-red-700 whitespace-pre-wrap">{error}</p>
            </div>
          )}

          {/* Wyniki */}
          {data && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-800 font-semibold mb-2">✅ Dane pobrane!</h3>
                <p className="text-sm text-gray-600">
                  Czas: {new Date(data.timestamp).toLocaleString('pl-PL')}
                </p>
                {data.message && (
                  <p className="text-sm text-gray-700 mt-2">{data.message}</p>
                )}
              </div>

              {/* Surowe dane do debugowania */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                <h3 className="text-gray-800 font-semibold mb-3">📊 Surowe dane z API</h3>
                <div className="bg-white rounded border border-gray-200 p-4 overflow-auto max-h-96">
                  <pre className="text-xs text-gray-800 whitespace-pre-wrap">
                    {JSON.stringify(data.rawData, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Lista pojazdów - TODO: wyświetlić gdy będą dostępne */}
              {data.vehicles && data.vehicles.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🚘 Znalezione pojazdy: {data.vehicles.length}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.vehicles.map((vehicle: any, index: number) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Pojazd #{index + 1}
                        </h4>
                        <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                          {JSON.stringify(vehicle, null, 2)}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.vehicles && data.vehicles.length === 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    ℹ️ Brak pojazdów w ostatnich 30 dniach lub dane wymagają dalszego parsowania XML
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ℹ️ Informacje</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Pobierane są pojazdy z ostatnich 30 dni</li>
              <li>• Użytkownik: info@miamiauto.de</li>
              <li>• Metoda API: GetVehicleList</li>
              <li>• Dane są pobierane na żądanie (ręcznie)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
