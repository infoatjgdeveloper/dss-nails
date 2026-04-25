import { Check } from "lucide-react";
import { use3dTilt } from "@/hooks/use-3d-tilt";

const serviceData = {
  Manicure: [
    { name: "Regular Manicure", price: "$20.00" },
    { name: "French Manicure", price: "$30.00" },
    { name: "Paraffin Manicure", price: "$30.00" },
    { name: "Spa Manicure", price: "$40.00" },
    { name: "Powder Manicure SNS", price: "$65.00" },
    { name: "Color Change Manicure", price: "$10.00" }
  ],
  "Gel Color": [
    { name: "Gel Manicure", price: "$40.00" },
    { name: "Gel Pedicure", price: "$45.00" },
    { name: "Gel French Extra", price: "$10.00" },
    { name: "Soak Off", price: "$15.00" },
    { name: "Gel Color Change", price: "$20.00" }
  ],
  Pedicure: [
    { name: "Regular Pedicure", price: "$30.00" },
    { name: "French Pedicure", price: "$40.00" },
    { name: "Callus Pedicure", price: "$40.00" },
    { name: "Paraffin Pedicure", price: "$40.00" },
    { name: "Color Change Pedicure", price: "$10.00" }
  ],
  "Artificial Nails": [
    { name: "One Nail Fix", price: "$5.00" },
    { name: "UV Gel Fill In", price: "$65.00" },
    { name: "Acrylic Fill In", price: "$65.00" },
    { name: "UV Gel Tips (New Set)", price: "$75.00" },
    { name: "GelX", price: "$75.00" },
    { name: "Dip Powder Tips", price: "$75.00" },
    { name: "Acrylic (New Set)", price: "$75.00" },
    { name: "Russian Manicure", price: "$95.00" },
    { name: "Russian + Tips", price: "$110.00" }
  ],
  Waxing: [
    { name: "Chin", price: "$10.00" },
    { name: "Cheek", price: "$15.00" },
    { name: "Full Face", price: "$40.00" },
    { name: "Under Arms", price: "$15.00" },
    { name: "Half Arms", price: "$20.00" },
    { name: "Full Arms", price: "$40.00" },
    { name: "Belly Wax", "price": "$20.00" },
    { name: "Full Leg", price: "$55.00" },
    { name: "Half Leg", price: "$28.00" },
    { name: "Back Wax", price: "$55.00" },
    { name: "Eye Brows", price: "$10.00" },
    { name: "Upper Lip", price: "$10.00" },
    { name: "Eye Lashes", price: "$80-$150" }
  ],
  "Relaxation Therapy": [
    { name: "10 Min", price: "$12.00" },
    { name: "15 Min", price: "$18.00" },
    { name: "20 Min", price: "$24.00" },
    { name: "30 Min", price: "$35.00" }
  ],
  "Special Spas": [
    {
      name: "Gold CBD Spa",
      price: "$120.00",
      features: ["Million Dollar feet", "Rich Scented Bath", "Soft and smooth finish", "Hydration for dry skin", "Helps with aches and pains", "Includes Callus care, Paraffin & 30 mins stone therapy"]
    },
    {
      name: "Tropical CBD Volcano",
      price: "$100.00",
      features: ["Summery foot soak", "Relaxing scented tropical bath", "Tropical and smooth skin", "Callus care, Paraffin & 20 mins muscle relaxation"]
    },
    {
      name: "Honey Pearl CBD",
      price: "$80.00",
      features: ["Luxury Pearl finish", "Natural beauty restoration", "Nature's energy booster", "Anti-inflammatory compounds", "Callus care, Paraffin & 15 mins revitalizing touch"]
    },
    {
      name: "Lavender CBD Volcano",
      price: "$80.00",
      features: ["Stress reliever pedicure", "Classic floral scent", "Relieves emotional stress", "Anxiety-reducing lavender", "Callus Care, Paraffin & 15 mins relaxing ritual"]
    },
    {
      name: "Collagen Spa",
      price: "$75.00",
      features: ["Detoxifies and softens skin", "Maintains youthful beauty", "Refreshes and relaxes muscles", "Callus care & 15 mins restorative treatment"]
    },
    {
      name: "Green Tea & Aloe",
      price: "$75.00",
      features: ["Promotes detoxification", "Moisture-rich protection", "Fresh tea fragrance", "Callus care & 15 mins rejuvenation therapy"]
    },
    {
      name: "Vitamin Spa",
      price: "$65.00",
      features: ["Detoxifies and Soothes Skin", "Maintains Youthful Beauty", "Refreshes and Relaxes Muscles", "Callus Care & 10 mins refreshing knead"]
    },
    {
      name: "Lemon Spa",
      price: "$65.00",
      features: ["Tone the skin with fresh lemon", "Exfoliate dead skin cells", "Callus Care & 10 mins tension relief"]
    }
  ]
};

function ServiceItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline justify-between py-2 border-b border-rose-deep/10 group hover:bg-blush/50 transition-smooth px-2 rounded-lg">
      <span className="text-foreground/90 font-medium group-hover:text-rose-deep transition-colors">{name}</span>
      <div className="flex-1 mx-4 border-b border-dotted border-rose-deep/20 mb-1" />
      <span className="font-serif font-semibold text-rose-deep">{price}</span>
    </div>
  );
}

function SpaCard({ spa }: { spa: typeof serviceData["Special Spas"][0] }) {
  const tilt = use3dTilt({ max: 5, perspective: 1000, scale: 1.02 });

  return (
    <div 
      className="bg-white p-6 rounded-3xl shadow-card border border-rose-deep/5 hover:border-rose-deep/20 transition-smooth flex flex-col h-full"
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-serif text-xl font-semibold text-rose-deep leading-tight">{spa.name}</h3>
        <span className="font-serif text-2xl font-bold text-rose-deep ml-4">{spa.price}</span>
      </div>
      <ul className="space-y-2 flex-1">
        {spa.features.map((f, i) => (
          <li key={i} className="flex items-start text-sm text-muted-foreground gap-2">
            <Check className="h-4 w-4 text-rose-deep/60 mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a 
        href={`https://wa.me/17186068808?text=I'm%20interested%20in%20the%20${encodeURIComponent(spa.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full text-center py-2.5 rounded-full border border-rose-deep/20 text-rose-deep text-sm font-semibold hover:bg-rose-deep hover:text-white transition-smooth"
      >
        Book This Spa
      </a>
    </div>
  );
}

export function ServiceMenu() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 mb-20 animate-fade-up">
        {/* Left Column: Basic Services */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Manicure</h2>
            <div className="space-y-1">
              {serviceData.Manicure.map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Gel Color</h2>
            <div className="space-y-1">
              {serviceData["Gel Color"].map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Relaxation</h2>
            <div className="space-y-1">
              {serviceData["Relaxation Therapy"].map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>
        </div>

        {/* Middle Column: Pedicure & Artificial */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Pedicure</h2>
            <div className="space-y-1">
              {serviceData.Pedicure.map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Artificial Nails</h2>
            <div className="space-y-1">
              {serviceData["Artificial Nails"].map((s, i) => <ServiceItem key={i} {...s} />)}
            </div>
          </div>
        </div>

        {/* Right Column: Waxing */}
        <div className="bg-blush/30 p-8 rounded-[40px] shadow-sm border border-rose-deep/5">
          <h2 className="font-serif text-2xl font-semibold text-rose-deep mb-6 pb-2 border-b-2 border-rose-deep/20 inline-block">Waxing</h2>
          <div className="grid sm:grid-cols-1 gap-1">
            {serviceData.Waxing.map((s, i) => <ServiceItem key={i} {...s} />)}
          </div>
          <p className="mt-8 text-xs text-muted-foreground italic text-center text-rose-deep/60">*Tax not included in prices</p>
        </div>
      </div>

      {/* Special Spas Section */}
      <div className="mt-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-rose-deep">Luxury Spa Experiences</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Elevate your nail care with our premium volcanic and CBD infused spa treatments.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData["Special Spas"].map((spa, i) => (
            <SpaCard key={i} spa={spa} />
          ))}
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <p className="font-serif text-xl text-rose-deep font-medium italic">"Quality nail care at your convenience"</p>
        <p className="text-sm text-muted-foreground mt-2">Tel: 718-606-8808</p>
      </div>
    </section>
  );
}
