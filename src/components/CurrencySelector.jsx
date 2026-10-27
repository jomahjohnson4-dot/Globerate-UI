import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
  { code: 'GBP', name: 'British Pound Sterling', flag: '🇬🇧', symbol: '£' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: 'C$' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: 'A$' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', symbol: 'Fr' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', symbol: '₹' },
  { code: 'TZS', name: 'Tanzanian Shilling', flag: '🇹🇿', symbol: 'TSh' },
  { code: 'KES', name: 'Kenyan Shilling', flag: '🇰🇪', symbol: 'KSh' },
  { code: 'UGX', name: 'Ugandan Shilling', flag: '🇺🇬', symbol: 'USh' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦', symbol: 'R' },
  { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬', symbol: '₦' },
  { code: 'GHS', name: 'Ghanaian Cedi', flag: '🇬🇭', symbol: '₵' },
  { code: 'ETB', name: 'Ethiopian Birr', flag: '🇪🇹', symbol: 'Br' },
  { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬', symbol: 'E£' },
  { code: 'MAD', name: 'Moroccan Dirham', flag: '🇲🇦', symbol: 'DH' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽', symbol: '$' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷', symbol: 'R$' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: 'S$' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰', symbol: 'HK$' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', symbol: 'NZ$' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', symbol: 'kr' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴', symbol: 'kr' },
  { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰', symbol: 'kr' },
  { code: 'PLN', name: 'Polish Zloty', flag: '🇵🇱', symbol: 'zł' },
  { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', symbol: '₽' },
  { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷', symbol: '₺' },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', symbol: '₩' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭', symbol: '฿' },
  { code: 'VND', name: 'Vietnamese Dong', flag: '🇻🇳', symbol: '₫' },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾', symbol: 'RM' },
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩', symbol: 'Rp' },
  { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭', symbol: '₱' },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', symbol: 'د.إ' },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', symbol: '﷼' },
];

export default function CurrencySelector({ value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const selectedCurrency = currencies.find(c => c.code === value) || currencies[0];

  const filteredCurrencies = currencies.filter(c => 
    c.code.toLowerCase().includes(search.toLowerCase()) ||
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setSearch('');
        }}
        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-left flex items-center justify-between hover:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition-all"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{selectedCurrency.flag}</span>
          <span className="font-bold">{selectedCurrency.code}</span>
          <span className="text-slate-600 text-sm hidden sm:inline">{selectedCurrency.name}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-[100000] w-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 max-h-80 overflow-hidden">
          <div className="p-3 border-b border-slate-200">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search currencies..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((currency) => (
                <button
                  key={currency.code}
                  type="button"
                  onClick={() => {
                    try {
                      onChange(currency.code);
                    } catch (e) {
                      console.error(e);
                    }
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full px-4 py-2.5 text-left hover:bg-blue-50 flex items-center gap-3 ${
                    currency.code === value ? 'bg-blue-50' : ''
                  }`}
                >
                  <span className="text-lg">{currency.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{currency.code}</span>
                      <span className="text-slate-600 text-sm">{currency.name}</span>
                    </div>
                  </div>
                  <span className="text-slate-500 text-sm">{currency.symbol}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-slate-500 text-center">No currencies found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
