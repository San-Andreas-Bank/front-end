
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Banknote,
  CreditCard,
  TrendingUp,
  Plus,
  Eye,
  EyeOff,
  Download,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "@/hooks/use-toast";

const Accounts = () => {
  const [showBalances, setShowBalances] = useState(true);
  const [newAccountData, setNewAccountData] = useState({
    name: "",
    type: "",
    initialDeposit: "",
  });

  const accounts = [
    {
      id: 1,
      name: "Cuenta Corriente Principal",
      number: "0123-4567-8901",
      balance: 15750.50,
      type: "checking",
      status: "active",
      openDate: "2022-03-15",
      interestRate: 0.5,
    },
    {
      id: 2,
      name: "Cuenta de Ahorros Premium",
      number: "0987-6543-2109",
      balance: 45200.00,
      type: "savings",
      status: "active",
      openDate: "2021-08-20",
      interestRate: 3.5,
    },
    {
      id: 3,
      name: "Cuenta de Inversión Growth",
      number: "5647-3829-1056",
      balance: 12800.75,
      type: "investment",
      status: "active",
      openDate: "2023-01-10",
      interestRate: 5.2,
    },
    {
      id: 4,
      name: "Cuenta Joven",
      number: "9876-5432-1098",
      balance: 2500.30,
      type: "youth",
      status: "active",
      openDate: "2023-06-01",
      interestRate: 2.0,
    },
  ];

  const creditCards = [
    {
      id: 1,
      name: "Tarjeta Clásica",
      number: "**** **** **** 1234",
      limit: 5000.00,
      used: 1250.50,
      available: 3749.50,
      dueDate: "2024-02-15",
      minPayment: 62.25,
      status: "active",
    },
    {
      id: 2,
      name: "Tarjeta Platinum",
      number: "**** **** **** 5678",
      limit: 15000.00,
      used: 3800.75,
      available: 11199.25,
      dueDate: "2024-02-20",
      minPayment: 190.04,
      status: "active",
    },
  ];

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud enviada",
      description: "Tu solicitud de nueva cuenta está siendo procesada. Te contactaremos pronto.",
    });
    setNewAccountData({ name: "", type: "", initialDeposit: "" });
  };

  const getAccountTypeLabel = (type: string) => {
    switch (type) {
      case "checking": return "Corriente";
      case "savings": return "Ahorros";
      case "investment": return "Inversión";
      case "youth": return "Joven";
      default: return type;
    }
  };

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "investment": return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "checking": return <CreditCard className="h-5 w-5 text-blue-600" />;
      default: return <Banknote className="h-5 w-5 text-purple-600" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Mis Cuentas</h2>
            <p className="text-gray-600">Gestiona todas tus cuentas y tarjetas</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowBalances(!showBalances)}
            >
              {showBalances ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showBalances ? "Ocultar" : "Mostrar"} Saldos
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Cuenta
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Abrir Nueva Cuenta</DialogTitle>
                  <DialogDescription>
                    Completa la información para solicitar una nueva cuenta
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateAccount} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Nombre de la Cuenta</Label>
                    <Input
                      id="account-name"
                      placeholder="Mi nueva cuenta"
                      value={newAccountData.name}
                      onChange={(e) => setNewAccountData({...newAccountData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-type">Tipo de Cuenta</Label>
                    <Select
                      value={newAccountData.type}
                      onValueChange={(value) => setNewAccountData({...newAccountData, type: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Cuenta Corriente</SelectItem>
                        <SelectItem value="savings">Cuenta de Ahorros</SelectItem>
                        <SelectItem value="investment">Cuenta de Inversión</SelectItem>
                        <SelectItem value="youth">Cuenta Joven</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="initial-deposit">Depósito Inicial</Label>
                    <Input
                      id="initial-deposit"
                      type="number"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      value={newAccountData.initialDeposit}
                      onChange={(e) => setNewAccountData({...newAccountData, initialDeposit: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Solicitar Cuenta
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="accounts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="accounts">Cuentas Bancarias</TabsTrigger>
            <TabsTrigger value="cards">Tarjetas de Crédito</TabsTrigger>
          </TabsList>

          <TabsContent value="accounts">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {accounts.map((account) => (
                <Card key={account.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getAccountIcon(account.type)}
                        <div>
                          <CardTitle className="text-lg">{account.name}</CardTitle>
                          <CardDescription>
                            {account.number} • Abierta el {account.openDate}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        {getAccountTypeLabel(account.type)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Saldo Disponible</span>
                        <span className="text-2xl font-bold">
                          {showBalances ? `$${account.balance.toLocaleString()}` : "****"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Tasa de Interés</span>
                        <span className="text-sm font-medium text-green-600">
                          {account.interestRate}% anual
                        </span>
                      </div>
                      <div className="flex space-x-2 pt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Estado
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Transferir
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cards">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {creditCards.map((card) => (
                <Card key={card.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-orange-600" />
                        <div>
                          <CardTitle className="text-lg">{card.name}</CardTitle>
                          <CardDescription>{card.number}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">Activa</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">Límite</span>
                          <p className="text-lg font-semibold">
                            {showBalances ? `$${card.limit.toLocaleString()}` : "****"}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Disponible</span>
                          <p className="text-lg font-semibold text-green-600">
                            {showBalances ? `$${card.available.toLocaleString()}` : "****"}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-600">Usado</span>
                          <p className="text-sm font-medium">
                            {showBalances ? `$${card.used.toLocaleString()}` : "****"}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Pago Mínimo</span>
                          <p className="text-sm font-medium text-red-600">
                            {showBalances ? `$${card.minPayment.toLocaleString()}` : "****"}
                          </p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Fecha de corte:</strong> {card.dueDate}
                        </p>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Pagar
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Estado
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Configurar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Accounts;
