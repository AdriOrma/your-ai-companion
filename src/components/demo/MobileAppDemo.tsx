import { useState } from "react";
import { Home, Heart, MessageSquare, ShoppingBag, User, ChevronRight, ChevronLeft, RefreshCw, CreditCard, MapPin, Bell, HelpCircle, Settings, Package, Wallet } from "lucide-react";

type Screen = "account" | "orders" | "returns" | "myatida" | "personal" | "address" | "payment";

const MobileAppDemo = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("account");
  const [activeTab, setActiveTab] = useState("account");

  const menuItems = [
    { id: "orders", label: "Orders", icon: Package },
    { id: "returns", label: "Returns", icon: RefreshCw },
    { id: "myatida", label: "MyAtida", icon: Wallet, hasBalance: true },
    { id: "personal", label: "Personal information", icon: User },
    { id: "address", label: "Address", icon: MapPin },
    { id: "payment", label: "Payment methods", icon: CreditCard },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case "orders":
        return <OrdersScreen onBack={() => setCurrentScreen("account")} />;
      case "returns":
        return <ReturnsScreen onBack={() => setCurrentScreen("account")} />;
      case "myatida":
        return <MyAtidaScreen onBack={() => setCurrentScreen("account")} />;
      case "personal":
        return <PersonalInfoScreen onBack={() => setCurrentScreen("account")} />;
      case "address":
        return <AddressScreen onBack={() => setCurrentScreen("account")} />;
      case "payment":
        return <PaymentScreen onBack={() => setCurrentScreen("account")} />;
      default:
        return (
          <AccountScreen 
            menuItems={menuItems} 
            onNavigate={(id) => setCurrentScreen(id as Screen)} 
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-muted/30">
      <h2 className="text-2xl font-bold text-navy mb-2">Mobile App Demo</h2>
      <p className="text-muted-foreground mb-8">Click on menu items to navigate</p>
      
      {/* Phone Frame */}
      <div className="relative w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-gray-900">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-2 bg-white">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-black rounded-full" />
              <div className="w-1 h-1.5 bg-black rounded-full" />
              <div className="w-1 h-2 bg-black rounded-full" />
              <div className="w-1 h-2.5 bg-black rounded-full" />
            </div>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71s.11.53.29.71l11 11c.39.39 1.02.39 1.41 0l11-11c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
            </svg>
            <div className="w-6 h-3 bg-black rounded-sm relative">
              <div className="absolute right-0 top-0.5 bottom-0.5 w-0.5 bg-black -mr-0.5 rounded-r" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-[calc(100%-100px)] overflow-y-auto">
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 pb-6">
          <div className="flex justify-around">
            {[
              { id: "home", icon: Home, label: "Home" },
              { id: "wishlist", icon: Heart, label: "Wishlist" },
              { id: "discovery", icon: MessageSquare, label: "Discovery" },
              { id: "basket", icon: ShoppingBag, label: "Basket", badge: 99 },
              { id: "account", icon: User, label: "Account" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (item.id === "account") setCurrentScreen("account");
                }}
                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                  activeTab === item.id ? "text-indigo-600" : "text-gray-400"
                }`}
              >
                <div className="relative">
                  <item.icon className="w-6 h-6" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 bg-teal-500 text-white text-[10px] font-bold px-1.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Account Screen (Main Menu)
const AccountScreen = ({ 
  menuItems, 
  onNavigate 
}: { 
  menuItems: { id: string; label: string; icon: any; hasBalance?: boolean }[];
  onNavigate: (id: string) => void;
}) => (
  <div className="px-4 py-4">
    <h1 className="text-xl font-bold text-indigo-900 text-center mb-6">Account</h1>
    
    {/* User Greeting */}
    <div className="mb-6">
      <p className="text-gray-500 text-sm">Hello Luca</p>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">MyAtida</h2>
          <p className="text-sm text-gray-500">Earn Atida Cash in every purchase</p>
        </div>
        <button 
          onClick={() => onNavigate("myatida")}
          className="flex items-center gap-2 bg-teal-50 text-teal-600 px-3 py-1.5 rounded-full text-sm font-medium"
        >
          <RefreshCw className="w-4 h-4" />
          Balance 4 €
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="border-t border-gray-100" />

    {/* Menu Items */}
    <div className="py-2">
      {menuItems.slice(0, 4).map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-800">{item.label}</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      ))}
    </div>

    <div className="border-t border-gray-100" />

    {/* Second section */}
    <div className="py-2">
      {menuItems.slice(4).map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-800">{item.label}</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      ))}
      
      <button className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800">Communication preferences</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>
      
      <button className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-gray-800">Help & Support</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  </div>
);

// Orders Screen
const OrdersScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Mis pedidos" onBack={onBack} />
    
    <div className="mt-4 space-y-4">
      {[
        { id: "ES--004926366", date: "21/11/25", name: "Dev Tests", total: "39,21 €", status: "Cancelado", statusColor: "text-gray-500" },
        { id: "ES--004926365", date: "21/11/25", name: "Dev Tests", total: "140,56 €", status: "Completo", statusColor: "text-green-600" },
        { id: "ES--004926363", date: "20/11/25", name: "Dev Tests", total: "83,86 €", status: "Procesando", statusColor: "text-orange-500" },
      ].map((order) => (
        <div key={order.id} className="border border-gray-200 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-gray-500">Pedido #</span>
            <span className="font-medium">{order.id}</span>
            <span className="text-gray-500">Fecha</span>
            <span>{order.date}</span>
            <span className="text-gray-500">Nombre</span>
            <span>{order.name}</span>
            <span className="text-gray-500">Total</span>
            <span>{order.total}</span>
            <span className="text-gray-500">Estado</span>
            <span className={order.statusColor}>{order.status}</span>
          </div>
          <div className="flex gap-4 mt-3 text-sm text-teal-600">
            <button className="flex items-center gap-1">👁 Ver</button>
            <button className="flex items-center gap-1">↻ Repetir</button>
            {order.status === "Completo" && <button className="flex items-center gap-1">📍 Localizar</button>}
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex items-center justify-between mt-4 text-sm">
      <span>3 Artículo(s)</span>
      <span>Ver: 10 ▾</span>
    </div>
  </div>
);

// Returns Screen
const ReturnsScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Mis solicitudes de devolución" onBack={onBack} />
    
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800 mb-3">Crear nueva solicitud de devolución</h3>
      
      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-4">
        <option>Pedido #ES--004926365 - 21/11/25 - 140,56 €</option>
      </select>
      
      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium">
        Devolución
      </button>
      
      <p className="text-gray-500 text-sm mt-6">No has realizado ninguna solicitud de devolución.</p>
    </div>
  </div>
);

// MyAtida Cash Screen
const MyAtidaScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Historial de transacciones" onBack={onBack} />
    
    <div className="bg-gray-50 rounded-lg p-4 mt-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Saldo</p>
        <p className="text-3xl font-bold text-teal-600">0,00 €</p>
        <p className="text-xs text-gray-400 mt-1">Se puede utilizar Atida Cash en el paso de pago, de saldo positivo, sin gasto mínimo.</p>
      </div>
      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
        <Wallet className="w-8 h-8 text-orange-500" />
      </div>
    </div>
    
    <div className="mt-6 space-y-4">
      {[
        { date: "24 nov. 2025", orderId: "ES--004926363", amount: "+ 1,50 €", expiry: "2025-11-24" },
        { date: "23 nov. 2025", orderId: "ES--004926366", amount: "+ 3,88 €", expiry: "2025-11-23" },
        { date: "23 nov. 2025", orderId: "ES--004926365", amount: "+ 1,88 €", expiry: "2025-11-23" },
        { date: "22 nov. 2025", orderId: "ES--004926363", amount: "+ 9,22 €", expiry: "2025-11-22" },
      ].map((tx, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">{tx.date}</p>
          <p className="text-sm">Abono del importe del pedido: {tx.orderId}</p>
          <div className="flex justify-between items-center mt-1">
            <span className="text-sm">Atida Cash recibido</span>
            <span className="text-teal-600 font-semibold">{tx.amount}</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">⏰ Atida Cash disponible hasta un {tx.expiry}</p>
        </div>
      ))}
    </div>
  </div>
);

// Personal Info Screen
const PersonalInfoScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Información de cuenta" onBack={onBack} />
    
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800 mb-4">Editar tu información personal</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Nombre*</label>
          <input type="text" defaultValue="Dev" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Apellidos*</label>
          <input type="text" defaultValue="Tests" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1" />
        </div>
        
        <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-lg">
          <div className="w-10 h-5 bg-gray-300 rounded-full relative">
            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-sm text-gray-700">Si eres un comercio puedes aplicar Recargo de Equivalencia</span>
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm text-gray-600">Cambiar contraseña</span>
        </div>
        
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium">
          Guardar cambios
        </button>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h4 className="font-semibold text-gray-800 mb-3">Privacidad</h4>
        <button className="flex items-center gap-2 text-gray-600 py-2">
          📄 Solicitud de datos personales
        </button>
        <button className="flex items-center gap-2 text-gray-600 py-2">
          🗑 Borrar cuenta
        </button>
      </div>
    </div>
  </div>
);

// Address Screen
const AddressScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Libreta de direcciones" onBack={onBack} />
    
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800 mb-2">Direcciones predeterminadas</h3>
      
      <div className="border-t pt-4">
        <p className="text-sm text-gray-500 mb-2">Dirección de facturación predeterminada</p>
        <div className="text-sm text-gray-800">
          <p>Dev Test</p>
          <p>Calle Teofonto Gallego, 9</p>
          <p>Albacete, Albacete, 02002</p>
          <p>España</p>
          <p>T: 601002003</p>
        </div>
        <button className="text-teal-600 text-sm mt-2 flex items-center gap-1">
          ✏️ Editar dirección de facturación
        </button>
      </div>
      
      <div className="border-t pt-4 mt-4">
        <p className="text-sm text-gray-500 mb-2">Dirección de envío predeterminada</p>
        <div className="text-sm text-gray-800">
          <p>Dev Tests</p>
          <p>Calle Mayor 6</p>
          <p>Murcia, Murcia, 30007</p>
          <p>España</p>
          <p>T: 612 245 678</p>
        </div>
        <button className="text-teal-600 text-sm mt-2 flex items-center gap-1">
          ✏️ Editar dirección de envío
        </button>
      </div>
      
      <div className="border-t pt-4 mt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Direcciones adicionales</h3>
        <p className="text-sm text-gray-500">No tienes más direcciones guardadas.</p>
        
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium mt-4">
          + Nueva dirección
        </button>
      </div>
    </div>
  </div>
);

// Payment Screen
const PaymentScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="px-4 py-4">
    <ScreenHeader title="Métodos de pago" onBack={onBack} />
    
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800 mb-4">Métodos de pago</h3>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 px-4 py-2 text-sm">
          <span className="text-teal-600">Número de tarjeta</span>
          <span className="text-teal-600">Fecha de caducidad</span>
          <span></span>
        </div>
        <div className="grid grid-cols-3 px-4 py-3 text-sm border-t">
          <span>1111</span>
          <span>03/2027</span>
          <span className="text-red-500 cursor-pointer">Borrar</span>
        </div>
      </div>
    </div>
  </div>
);

// Reusable Header Component
const ScreenHeader = ({ title, onBack }: { title: string; onBack: () => void }) => (
  <>
    <div className="flex items-center gap-4 mb-4">
      <select className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white">
        <option>{title}</option>
      </select>
    </div>
    <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    <button 
      onClick={onBack}
      className="flex items-center gap-1 text-gray-600 text-sm mt-4"
    >
      <ChevronLeft className="w-4 h-4" /> Volver
    </button>
  </>
);

export default MobileAppDemo;
