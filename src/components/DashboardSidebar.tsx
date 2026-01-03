import { 
  LayoutDashboard, 
  MapPin, 
  Calendar, 
  Users, 
  Leaf, 
  Shield, 
  Settings, 
  LogOut,
  Bike,
  Footprints
} from 'lucide-react';

interface NavItem {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
  badge?: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: MapPin, label: 'Find Rides', badge: '3' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Users, label: 'My Pool' },
  { icon: Leaf, label: 'Eco Impact' },
  { icon: Bike, label: 'Walk & Cycle' },
  { icon: Shield, label: 'Safety' },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-gradient-primary">RideGreen</h1>
            <p className="text-xs text-muted-foreground">Eco Carpooling</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active
                ? 'bg-primary text-primary-foreground shadow-glow'
                : 'text-sidebar-foreground hover:bg-sidebar-accent'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
            {item.badge && (
              <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                item.active 
                  ? 'bg-primary-foreground/20 text-primary-foreground' 
                  : 'bg-accent text-accent-foreground'
              }`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-sidebar-accent mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-eco-forest flex items-center justify-center text-primary-foreground font-semibold">
            AS
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-sidebar-foreground truncate">Arjun Singh</p>
            <p className="text-xs text-muted-foreground truncate">arjun@company.com</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
