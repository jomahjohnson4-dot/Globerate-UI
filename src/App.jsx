import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import SendMoneyPage from './pages/SendMoneyPage';
import LargeTransfersPage from './pages/LargeTransfersPage';
import CompareRatesPage from './pages/CompareRatesPage';
import MoneyTransferAppPage from './pages/MoneyTransferAppPage';
import CurrencyConverterPage from './pages/CurrencyConverterPage';
import CurrencyChartsPage from './pages/CurrencyChartsPage';
import HistoricalRatesPage from './pages/HistoricalRatesPage';
import RateAlertsPage from './pages/RateAlertsPage';
import HelpCentrePage from './pages/HelpCentrePage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import LiveExchangeRatesPage from './pages/LiveExchangeRatesPage';

// Business pages
import InternationalPaymentsPage from './pages/business/InternationalPaymentsPage';
import MultiCurrencyAccountsPage from './pages/business/MultiCurrencyAccountsPage';
import BatchPaymentsPage from './pages/business/BatchPaymentsPage';
import RiskManagementPage from './pages/business/RiskManagementPage';
import ForwardsPage from './pages/business/ForwardsPage';
import LimitOrdersPage from './pages/business/LimitOrdersPage';
import PartnershipsPage from './pages/business/PartnershipsPage';
import AffiliatePartnershipsPage from './pages/business/AffiliatePartnershipsPage';

// Platform pages
import PaymentsAPIPage from './pages/platform/PaymentsAPIPage';
import CurrencyDataAPIPage from './pages/platform/CurrencyDataAPIPage';
import ERPIntegrationsPage from './pages/platform/ERPIntegrationsPage';

// Resources pages
import BlogPage from './pages/resources/BlogPage';
import WebinarsPage from './pages/resources/WebinarsPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import DevelopersPage from './pages/resources/DevelopersPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/live-exchange-rates" element={<LiveExchangeRatesPage />} />
        <Route path="/send-money" element={<SendMoneyPage />} />
        <Route path="/large-transfers" element={<LargeTransfersPage />} />
        <Route path="/compare-rates" element={<CompareRatesPage />} />
        <Route path="/money-transfer-app" element={<MoneyTransferAppPage />} />
        <Route path="/currency-converter" element={<CurrencyConverterPage />} />
        <Route path="/currency-charts" element={<CurrencyChartsPage />} />
        <Route path="/historical-rates" element={<HistoricalRatesPage />} />
        <Route path="/rate-alerts" element={<RateAlertsPage />} />
        <Route path="/help-centre" element={<HelpCentrePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/fees-pricing" element={<HelpCentrePage />} />
        <Route path="/security" element={<AboutUsPage />} />
        <Route path="/esim" element={<MoneyTransferAppPage />} />

        {/* Business routes */}
        <Route path="/business/international-payments" element={<InternationalPaymentsPage />} />
        <Route path="/business/multi-currency-accounts" element={<MultiCurrencyAccountsPage />} />
        <Route path="/business/batch-payments" element={<BatchPaymentsPage />} />
        <Route path="/business/risk-management" element={<RiskManagementPage />} />
        <Route path="/business/forwards" element={<ForwardsPage />} />
        <Route path="/business/limit-orders" element={<LimitOrdersPage />} />
        <Route path="/business/partnerships" element={<PartnershipsPage />} />
        <Route path="/business/affiliate-partnerships" element={<AffiliatePartnershipsPage />} />
        <Route path="/business/contact-sales" element={<ContactUsPage />} />

        {/* Platform routes */}
        <Route path="/platform/payments-api" element={<PaymentsAPIPage />} />
        <Route path="/platform/currency-data-api" element={<CurrencyDataAPIPage />} />
        <Route path="/platform/erp-integrations" element={<ERPIntegrationsPage />} />
        <Route path="/platform/docs" element={<DevelopersPage />} />

        {/* Resources routes */}
        <Route path="/resources/blog" element={<BlogPage />} />
        <Route path="/resources/webinars" element={<WebinarsPage />} />
        <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
        <Route path="/resources/developers" element={<DevelopersPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
