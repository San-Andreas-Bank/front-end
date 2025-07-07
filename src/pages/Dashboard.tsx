
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  Banknote,
  CreditCard,
  DollarSign,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const accounts = [
    {
      name: "Cuenta Corriente",
      number: "**** 1234",
      balance: 15750.50,
      type: "checking",
    },
    {
      name: "Cuenta de Ahorros",
      number: "**** 5678",
      balance: 45200.00,
      type: "savings",
    },
    {
      name: "Cuenta de Inversión",
      number: "**** 9012",
      balance: 12800.75,
      type: "investment",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      description: "Depósito Nómina",
      amount: 3500.00,
      type: "credit",
      date: "2024-01-15",
      category: "Ingresos",
    },
    {
      id: 2,
      description: "Pago Supermercado",
      amount: -150.25,
      type: "debit",
      date: "2024-01-14",
      category: "Alimentación",
    },
    {
      id: 3,
      description: "Transferencia Recibida",
      amount: 750.00,
      type: "credit",
      date: "2024-01-14",
      category: "Transferencias",
    },
    {
      id: 4,
      description: "Pago Servicios",
      amount: -220.00,
      type: "debit",
      date: "2024-01-13",
      category: "Servicios",
    },
  ];

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Bienvenido de vuelta, Juan!
          </h2>
          <p className="text-gray-600">
            Aquí tienes un resumen de tu actividad financiera
          </p>
        </div>

        {/* Balance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Balance Total</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2.5%</span> desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4,750</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gastos Mensuales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,140</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">+5%</span> vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ahorros</CardTitle>
              <Banknote className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,610</div>
              <p className="text-xs text-muted-foreground">Meta mensual: $3,000</p>
              <Progress value={87} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Accounts Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Mis Cuentas</CardTitle>
                    <CardDescription>
                      Gestiona todas tus cuentas bancarias
                    </CardDescription>
                  </div>
                  <Link to="/accounts">
                    <Button variant="outline" size="sm">
                      Ver Todas
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accounts.map((account, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Banknote className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{account.name}</p>
                          <p className="text-sm text-gray-500">{account.number}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${account.balance.toLocaleString()}</p>
                        <Badge variant="secondary" className="text-xs">
                          {account.type === "checking" && "Corriente"}
                          {account.type === "savings" && "Ahorros"}
                          {account.type === "investment" && "Inversión"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Transacciones Recientes</CardTitle>
                    <CardDescription>
                      Últimas 4 transacciones
                    </CardDescription>
                  </div>
                  <Link to="/movements">
                    <Button variant="outline" size="sm">
                      Ver Todas
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={transaction.id}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-1 rounded-full ${
                            transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                          }`}>
                            {transaction.type === "credit" ? (
                              <ArrowDownRight className="h-4 w-4 text-green-600" />
                            ) : (
                              <ArrowUpRight className="h-4 w-4 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{transaction.description}</p>
                            <p className="text-xs text-gray-500">{transaction.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${
                            transaction.type === "credit" ? "text-green-600" : "text-red-600"
                          }`}>
                            {transaction.type === "credit" ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      {index < recentTransactions.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
              <CardDescription>
                Realiza operaciones comunes de forma rápida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/payments">
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm">Transferir</span>
                  </Button>
                </Link>
                <Link to="/payments">
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <DollarSign className="h-6 w-6" />
                    <span className="text-sm">Pagar Servicios</span>
                  </Button>
                </Link>
                <Link to="/movements">
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <FileText className="h-6 w-6" />
                    <span className="text-sm">Ver Movimientos</span>
                  </Button>
                </Link>
                <Link to="/support">
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <FileText className="h-6 w-6" />
                    <span className="text-sm">Soporte</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
