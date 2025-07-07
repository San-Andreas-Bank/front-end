
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  Search,
  Calendar as CalendarIcon,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import DashboardLayout from "@/components/DashboardLayout";

const Movements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const movements = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Depósito Nómina - Empresa ABC",
      amount: 3500.00,
      type: "credit",
      category: "Ingresos",
      account: "Cuenta Corriente",
      balance: 15750.50,
      reference: "DEP001234",
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Supermercado El Buen Precio",
      amount: -150.25,
      type: "debit",
      category: "Alimentación",
      account: "Tarjeta Débito",
      balance: 12250.50,
      reference: "POS987654",
    },
    {
      id: 3,
      date: "2024-01-14",
      description: "Transferencia Recibida - María González",
      amount: 750.00,
      type: "credit",
      category: "Transferencias",
      account: "Cuenta Corriente",
      balance: 12400.75,
      reference: "TRF456789",
    },
    {
      id: 4,
      date: "2024-01-13",
      description: "Pago Servicios - Electricidad",
      amount: -220.00,
      type: "debit",
      category: "Servicios",
      account: "Cuenta Corriente",
      balance: 11650.75,
      reference: "SVC123456",
    },
    {
      id: 5,
      date: "2024-01-12",
      description: "Cajero Automático - Retiro",
      amount: -300.00,
      type: "debit",
      category: "Efectivo",
      account: "Cuenta Corriente",
      balance: 11870.75,
      reference: "ATM789012",
    },
    {
      id: 6,
      date: "2024-01-11",
      description: "Compra Online - Amazon",
      amount: -89.99,
      type: "debit",
      category: "Compras",
      account: "Tarjeta Crédito",
      balance: 12170.75,
      reference: "ONL345678",
    },
    {
      id: 7,
      date: "2024-01-10",
      description: "Intereses Cuenta Ahorros",
      amount: 45.50,
      type: "credit",
      category: "Intereses",
      account: "Cuenta Ahorros",
      balance: 12260.74,
      reference: "INT901234",
    },
    {
      id: 8,
      date: "2024-01-09",
      description: "Gasolinera Shell",
      amount: -75.00,
      type: "debit",
      category: "Transporte",
      account: "Tarjeta Débito",
      balance: 12215.24,
      reference: "GAS567890",
    },
  ];

  const categories = [
    "Ingresos", "Alimentación", "Transferencias", "Servicios", 
    "Efectivo", "Compras", "Intereses", "Transporte"
  ];

  const accounts = [
    "Cuenta Corriente", "Cuenta Ahorros", "Tarjeta Débito", "Tarjeta Crédito"
  ];

  const filteredMovements = movements.filter((movement) => {
    const matchesSearch = movement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movement.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAccount = selectedAccount === "all" || movement.account === selectedAccount;
    const matchesCategory = selectedCategory === "all" || movement.category === selectedCategory;
    
    return matchesSearch && matchesAccount && matchesCategory;
  });

  const totalIncome = movements
    .filter(m => m.type === "credit")
    .reduce((sum, m) => sum + m.amount, 0);

  const totalExpenses = movements
    .filter(m => m.type === "debit")
    .reduce((sum, m) => sum + Math.abs(m.amount), 0);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Movimientos</h2>
            <p className="text-gray-600">Historial completo de transacciones</p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Ingresos del Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                +${totalIncome.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {movements.filter(m => m.type === "credit").length} transacciones
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Gastos del Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                -${totalExpenses.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                {movements.filter(m => m.type === "debit").length} transacciones
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Balance Neto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${
                totalIncome - totalExpenses >= 0 ? "text-green-600" : "text-red-600"
              }`}>
                {totalIncome - totalExpenses >= 0 ? "+" : "-"}${Math.abs(totalIncome - totalExpenses).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Diferencia mensual
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Descripción o referencia..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Cuenta</label>
                <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las cuentas</SelectItem>
                    {accounts.map(account => (
                      <SelectItem key={account} value={account}>{account}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Categoría</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Desde</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateFrom ? format(dateFrom, "dd/MM/yyyy") : "Fecha inicio"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateFrom}
                      onSelect={setDateFrom}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Hasta</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateTo ? format(dateTo, "dd/MM/yyyy") : "Fecha fin"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateTo}
                      onSelect={setDateTo}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Movements List */}
        <Card>
          <CardHeader>
            <CardTitle>Historial de Transacciones</CardTitle>
            <CardDescription>
              {filteredMovements.length} de {movements.length} transacciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMovements.map((movement, index) => (
                <div key={movement.id}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        movement.type === "credit" ? "bg-green-100" : "bg-red-100"
                      }`}>
                        {movement.type === "credit" ? (
                          <ArrowDownRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{movement.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{movement.date}</span>
                          <span>•</span>
                          <span>{movement.account}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {movement.category}
                          </Badge>
                          <span>•</span>
                          <span className="font-mono text-xs">{movement.reference}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        movement.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}>
                        {movement.type === "credit" ? "+" : "-"}${Math.abs(movement.amount).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Saldo: ${movement.balance.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {index < filteredMovements.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Movements;
