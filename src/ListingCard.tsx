// YENİ 1: Hafıza (state) tutmak için React'ten useState'i çağırıyoruz
import { useState } from "react";

export interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  roomCount: string;
  squareMeters: number;
  imageUrl: string;
  isUrgent?: boolean;
  isLoanEligible?: boolean; // Az önce senin eklediğin özellik
}

export function ListingCard({
  title,
  price,
  location,
  roomCount,
  squareMeters,
  imageUrl,
  isUrgent = false,
  isLoanEligible = false,
}: ListingCardProps) {
  // YENİ 2: Kalbin seçili olup olmadığını tutan hafıza (Başlangıçta false yani seçili değil)
  const [isFavorite, setIsFavorite] = useState(false);

  const formattedPrice = new Intl.NumberFormat("tr-TR").format(price) + " TL";

  return (
    <article className="listing-card flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {isUrgent && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            ACİL İLAN
          </span>
        )}

        {isLoanEligible && (
          <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
            KREDİYE UYGUN
          </span>
        )}

        {/* YENİ 3: Tıklandığında mevcut durumu tersine çevir (!isFavorite) ve rengi değiştir */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Favorilere Ekle"
          className={`absolute top-2 right-2 p-2 rounded-full shadow transition-transform active:scale-90 ${
            isFavorite
              ? "bg-red-50 text-red-600" // Favoriyse kırmızı
              : "bg-white text-gray-400" // Değilse gri
          }`}
        >
          ♥
        </button>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <header>
          <p className="text-xl font-bold text-orange-600">{formattedPrice}</p>
          <h3 className="text-base font-semibold text-gray-800 line-clamp-1 mt-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{location}</p>
        </header>

        <footer className="mt-4 pt-3 border-t flex items-center justify-between text-sm text-gray-600">
          <span>🛋️ {roomCount}</span>
          <span>📐 {squareMeters} m²</span>
        </footer>
      </div>
    </article>
  );
}
