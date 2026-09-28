import { useState } from "react";
import { ListingCard, type ListingCardProps } from "./ListingCard";

// 1. SANKİ BACKEND API'DEN GELMİŞ GİBİ ÖRNEK İLAN LİSTESİ (Array)
const LISTINGS_DATA: ListingCardProps[] = [
  {
    id: "101",
    title: "Çankaya Ayrancı'da Balkonlu Ferah Daire",
    price: 4250000,
    location: "Ankara / Çankaya",
    roomCount: "3+1",
    squareMeters: 135,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    isUrgent: true,
    isLoanEligible: true,
  },
  {
    id: "102",
    title: "Metroya Yürüme Mesafesinde Sıfır Rezidans",
    price: 6800000,
    location: "İstanbul / Kadıköy",
    roomCount: "2+1",
    squareMeters: 95,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
    isUrgent: false,
    isLoanEligible: true,
  },
  {
    id: "103",
    title: "Bahçeli Müstakil Таdilatlı Köşe Ev",
    price: 5100000,
    location: "Ankara / Gölbaşı",
    roomCount: "4+1",
    squareMeters: 180,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
    isUrgent: true,
    isLoanEligible: false,
  },
];

function App() {
  // Filtre açık mı kapalı mı? bilgisini tutan state
  const [onlyUrgent, setOnlyUrgent] = useState(false);

  // 2. FİLTRELEME (.filter): Eğer buton açıksa sadece isUrgent olanları süz
  const filteredListings = onlyUrgent
    ? LISTINGS_DATA.filter((item) => item.isUrgent === true)
    : LISTINGS_DATA;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* ÜST BAŞLIK VE FİLTRE BUTONU */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Güncel İlanlar ({filteredListings.length})
          </h1>

          <button
            onClick={() => setOnlyUrgent(!onlyUrgent)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              onlyUrgent
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border hover:bg-gray-50"
            }`}
          >
            {onlyUrgent
              ? "🔥 Sadece Acil İlanlar Gösteriliyor"
              : "Acil İlanları Filtrele"}
          </button>
        </div>

        {/* 3. DİNAMİK LİSTELEME (.map): Listede kaç ilan varsa hepsini otomatik çiz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
