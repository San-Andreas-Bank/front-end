
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  DollarSign,
  FileText,
  Send,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { toast } from "@/hooks/use-toast";

const Payments = () => {
  const [transferData, setTransferData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    concept: "",
    email: "",
  });

  const [servicePayment, setServicePayment] = useState({
    service: "",
    account: "",
    amount: "",
    reference: "",
  });

  const accounts = [
    { id: "1", name: "Cuenta Corriente Principal", number: "**** 1234", balance: 15750.50 },
    { id: "2", name: "Cuenta de Ahorros Premium", number: "**** 5678", balance: 45200.00 },
    { id: "3", name: "Cuenta de Inversión Growth", number: "**** 9012", balance: 12800.75 },
  ];

  const services = [
    { id: "electricity", name: "Electricidad", company: "CFE" },
    { id: "water", name: "Agua", company: "CONAGUA" },
    { id: "gas", name: "Gas Natural", company: "Gas Natural Fenosa" },
    { id: "internet", name: "Internet", company: "Telmex" },
    { id: "phone", name: "Teléfono", company: "Telcel" },
    { id: "tv", name: "TV Cable", company: "Sky México" },
  ];

  const recentPayments = [
    {
      id: 1,
      type: "transfer",
      description: "Transferencia a María González",
      amount: 750.00,
      status: "completed",
      date: "2024-01-14 14:30",
      reference: "TRF456789",
    },
    {
      id: 2,
      type: "service",
      description: "Pago CFE - Electricidad",
      amount: 220.00,
      status: "completed",
      date: "2024-01-13 09:15",
      reference: "SVC123456",
    },
    {
      id: 3,
      type: "transfer",
      description: "Transferencia a Juan Pérez",
      amount: 1200.00,
      status: "pending",
      date: "2024-01-12 16:45",
      reference: "TRF789012",
    },
    {
      id: 4,
      type: "service",
      description: "Pago Telmex - Internet",
      amount: 599.00,
      status: "failed",
      date: "2024-01-11 10:22",
      reference: "SVC345678",
    },
  ];

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transferencia enviada",
      description: `Se ha enviado $${transferData.amount} exitosamente.`,
    });
    setTransferData({ fromAccount: "", toAccount: "", amount: "", concept: "", email: "" });
  };

  const handleServicePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pago procesado",
      description: `Se ha pagado el servicio por $${servicePayment.amount}.`,
    });
    setServicePayment({ service: "", account: "", amount: "", reference: "" });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completado</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendiente</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Fallido</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagos y Transferencias</h2>
          <p className="text-gray-600">Envía dinero y paga servicios de forma segura</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Send className="h-8 w-8 text-blue-600 mb-2" />
                  <h3 className="font-medium">Transferir</h3>
                  <p className="text-sm text-gray-500 text-center">A otra cuenta</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Nueva Transferencia</DialogTitle>
                <DialogDescription>
                  Transfiere dinero a otra cuenta bancaria
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleTransfer} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="from-account">Desde mi cuenta</Label>
                  <Select
                    value={transferData.fromAccount}
                    onValueChange={(value) => setTransferData({...transferData, fromAccount: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona cuenta origen" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name} - ${account.balance.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to-email">Email del destinatario</Label>
                  <Input
                    id="to-email"
                    type="email"
                    placeholder="destinatario@email.com"
                    value={transferData.email}
                    onChange={(e) => setTransferData({...transferData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Monto</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    value={transferData.amount}
                    onChange={(e) => setTransferData({...transferData, amount: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="concept">Concepto (opcional)</Label>
                  <Input
                    id="concept"
                    placeholder="Motivo de la transferencia"
                    value={transferData.concept}
                    onChange={(e) => setTransferData({...transferData, concept: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Transferencia
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <FileText className="h-8 w-8 text-green-600 mb-2" />
                  <h3 className="font-medium">Servicios</h3>
                  <p className="text-sm text-gray-500 text-center">Pagar recibos</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Pagar Servicio</DialogTitle>
                <DialogDescription>
                  Paga tus servicios básicos y recibos
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleServicePayment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Servicio</Label>
                  <Select
                    value={servicePayment.service}
                    onValueChange={(value) => setServicePayment({...servicePayment, service: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.company}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pay-account">Pagar desde</Label>
                  <Select
                    value={servicePayment.account}
                    onValueChange={(value) => setServicePayment({...servicePayment, account: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona cuenta" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name} - ${account.balance.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference">Número de referencia</Label>
                  <Input
                    id="reference"
                    placeholder="123456789"
                    value={servicePayment.reference}
                    onChange={(e) => setServicePayment({...servicePayment, reference: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service-amount">Monto</Label>
                  <Input
                    id="service-amount"
                    type="number"
                    placeholder="0.00"
                    min="0.01"
                    step="0.01"
                    value={servicePayment.amount}
                    onChange={(e) => setServicePayment({...servicePayment, amount: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Pagar Servicio
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <CreditCard className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-medium">Recargas</h3>
              <p className="text-sm text-gray-500 text-center">Tiempo aire</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <DollarSign className="h-8 w-8 text-orange-600 mb-2" />
              <h3 className="font-medium">Internacional</h3>
              <p className="text-sm text-gray-500 text-center">Envío global</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Payments */}
        <Card>
          <CardHeader>
            <CardTitle>Pagos Recientes</CardTitle>
            <CardDescription>
              Historial de tus últimas transacciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments.map((payment, index) => (
                <div key={payment.id}>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {payment.type === "transfer" ? (
                          <Send className="h-5 w-5 text-blue-600" />
                        ) : (
                          <FileText className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{payment.date}</span>
                          <span>•</span>
                          <span className="font-mono">{payment.reference}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">${payment.amount.toLocaleString()}</p>
                        {getStatusBadge(payment.status)}
                      </div>
                      {getStatusIcon(payment.status)}
                    </div>
                  </div>
                  {index < recentPayments.length - 1 && (
                    <hr className="border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
