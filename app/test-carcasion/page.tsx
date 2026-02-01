'use client';

import { useState } from 'react';

type TestAction = 'checkConnection' | 'getVehicleList' | 'getManufacturers' | 'getVehicleTypes';

export default function CarCasionTestPage() {
  const [username, setUsername] = useState('info@miamiauto.de');
  const [password, setPassword] = useState('Bjk3Cw2w');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testAPI = async (action: TestAction) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/carcasion/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          action,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        // Wyświetl szczegółowe informacje o błędzie
        let errorMsg = data.error || 'Wystąpił błąd';
        if (data.details) errorMsg += '\n\nSzczegóły: ' + data.details;
        if (data.message) errorMsg += '\n\nKomunikat: ' + data.message;
        if (data.code) errorMsg += '\n\nKod: ' + data.code;
        if (data.root) errorMsg += '\n\nRoot: ' + data.root;
        setError(errorMsg);
      }
    } catch (err: any) {
      setError(`Błąd sieci: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Test Integracji car.casion API
          </h1>
          <p className="text-gray-600 mb-8">
            Testuj połączenie z car.casion SOAP API
          </p>

          {/* Formularz logowania */}
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username (Login)
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Twój login car.casion"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password (Hasło)
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Twoje hasło"
              />
            </div>
          </div>

          {/* Przyciski testowe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => testAPI('checkConnection')}
              disabled={loading || !username || !password}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? 'Sprawdzam...' : '1. Test Połączenia'}
            </button>

            <button
              onClick={() => testAPI('getVehicleList')}
              disabled={loading || !username || !password}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? 'Pobieram...' : '2. Pobierz Listę Pojazdów'}
            </button>

            <button
              onClick={() => testAPI('getManufacturers')}
              disabled={loading || !username || !password}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? 'Pobieram...' : '3. Pobierz Marki i Modele'}
            </button>

            <button
              onClick={() => testAPI('getVehicleTypes')}
              disabled={loading || !username || !password}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {loading ? 'Pobieram...' : '4. Pobierz Typy Pojazdów'}
            </button>
          </div>

          {/* Status i wyniki */}
          {loading && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Łączę się z car.casion API...
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h3 className="text-red-800 font-semibold mb-2">❌ Błąd</h3>
              <div className="text-red-700 whitespace-pre-wrap font-mono text-sm">
                {error}
              </div>
            </div>
          )}

          {result && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-green-800 font-semibold mb-2">✅ Sukces</h3>
              <p className="text-sm text-gray-600 mb-4">
                Akcja: <strong>{result.action}</strong> | Czas: {new Date(result.timestamp).toLocaleString('pl-PL')}
              </p>
              <div className="bg-white rounded border border-gray-200 p-4 overflow-auto max-h-96">
                <pre className="text-xs text-gray-800 whitespace-pre-wrap">
                  {JSON.stringify(result.result, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* Informacje */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ℹ️ Informacje</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>WSDL URL:</strong> https://car.casion.eu/carcasion/ws/wscarcasion.asmx?WSDL</li>
              <li>• <strong>Protokół:</strong> SOAP 1.1/1.2</li>
              <li>• <strong>Główne metody:</strong> CheckConnection, GetVehicleList, GetVehicles, GetAvailableManufacturerAndModels</li>
              <li>• <strong>Koszty:</strong> Pobieranie danych bezpłatne, wystawienie pojazdu: 17,50 EUR</li>
              <li>• <strong>Kontakt:</strong> haendlerservice@net.casion.eu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
