import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import EventsPage from "./pages/EventsPage";
import ResourcesPage from "./pages/ResourcesPage";
import NewsPage from "./pages/NewsPage";

// About sub-pages
import TeamPage from "./pages/about/TeamPage";
import MembersPage from "./pages/about/MembersPage";
import HistoryPage from "./pages/about/HistoryPage";

// Resources sub-pages
import AdvicePage from "./pages/resources/AdvicePage";
import ServicesPage from "./pages/resources/ServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/about'
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path='/get-involved'
          element={
            <Layout>
              <GetInvolvedPage />
            </Layout>
          }
        />
        <Route
          path='/events'
          element={
            <Layout>
              <EventsPage />
            </Layout>
          }
        />
        <Route
          path='/resources'
          element={
            <Layout>
              <ResourcesPage />
            </Layout>
          }
        />
        <Route
          path='/news'
          element={
            <Layout>
              <NewsPage />
            </Layout>
          }
        />

        {/* About sub-routes */}
        <Route
          path='/about/team'
          element={
            <Layout>
              <TeamPage />
            </Layout>
          }
        />
        <Route
          path='/about/members'
          element={
            <Layout>
              <MembersPage />
            </Layout>
          }
        />
        <Route
          path='/about/history'
          element={
            <Layout>
              <HistoryPage />
            </Layout>
          }
        />

        {/* Resources sub-routes */}
        <Route
          path='/resources/advice'
          element={
            <Layout>
              <AdvicePage />
            </Layout>
          }
        />
        <Route
          path='/resources/services'
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
