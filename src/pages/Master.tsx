import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Download, LogOut, Dices } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { criaturas } from "@/data/criaturas";
import { npcs } from "@/data/npcs";
import { localizacoes } from "@/data/localizacoes";

const Master = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMasterAuthenticated, setIsMasterAuthenticated] = useState(false);
  const [generatedEncounter, setGeneratedEncounter] = useState<any>(null);

  useEffect(() => {
    const masterSession = sessionStorage.getItem("master_session");
    if (!masterSession) {
      navigate("/master-gate");
      return;
    }
    setIsMasterAuthenticated(true);
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("master_session");
    localStorage.removeItem("master_login_time");
    toast({
      title: "Sessão Encerrada",
      description: "O véu entre mundos se fecha...",
    });
    navigate("/master-gate");
  };

  const generateRandomEncounter = () => {
    const randomCriaturas = criaturas
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 3) + 1);

    const randomNpc = npcs[Math.floor(Math.random() * npcs.length)];
    const randomLocation = localizacoes[Math.floor(Math.random() * localizacoes.length)];

    const encounter = {
      id: `encounter-${Date.now()}`,
      criaturas: randomCriaturas,
      npc: randomNpc,
      localizacao: randomLocation,
      hook: generateHook(randomLocation, randomCriaturas[0]),
      generatedAt: new Date().toLocaleString("pt-BR"),
    };

    setGeneratedEncounter(encounter);
    toast({
      title: "⚔️ Encontro Gerado",
      description: "Novo cenário narrativo criado",
    });
  };

  const generateHook = (location: any, criatura: any): string => {
    const hooks = [
      `Investigadores descobrem símbolos em ${location.nome}. ${criatura.nome} está conectado.`,
      `Uma vítima foge de ${location.nome} com histórias sobre ${criatura.nome}.`,
      `${criatura.nome} foi visto próximo a ${location.nome}. Algo precisa ser feito.`,
      `Evidências paranormais apontam para ${location.nome}. ${criatura.nome} pode estar envolvido.`,
    ];
    return hooks[Math.floor(Math.random() * hooks.length)];
  };

  const downloadAsJSON = (data: any, filename: string) => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.json`;
    link.click();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado para clipboard!" });
  };

  if (!isMasterAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-purple-500/30">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              PAINEL DO MESTRE
            </h1>
            <p className="text-gray-400 mt-2">Ordem Paranormal - Sistema de Narração</p>
          </div>
          <Button onClick={handleLogout} variant="destructive">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900 border-purple-500/30 p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">{criaturas.length}</div>
            <div className="text-sm text-gray-400">Criaturas</div>
          </Card>
          <Card className="bg-gray-900 border-blue-500/30 p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{npcs.length}</div>
            <div className="text-sm text-gray-400">NPCs</div>
          </Card>
          <Card className="bg-gray-900 border-pink-500/30 p-4 text-center">
            <div className="text-3xl font-bold text-pink-400">
              {npcs.reduce((sum, npc) => sum + npc.dialogos.length, 0)}
            </div>
            <div className="text-sm text-gray-400">Diálogos</div>
          </Card>
          <Card className="bg-gray-900 border-green-500/30 p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{localizacoes.length}</div>
            <div className="text-sm text-gray-400">Localizações</div>
          </Card>
        </div>

        {/* Encounter Generator */}
        <Card className="bg-gray-900 border-yellow-500/50 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">Gerador de Encontros</h2>
              <p className="text-gray-400 mt-2">Crie cenários aleatórios para sua sessão</p>
            </div>
            <Button onClick={generateRandomEncounter} className="bg-yellow-600 hover:bg-yellow-700">
              <Dices className="w-4 h-4 mr-2" />
              Gerar Encontro
            </Button>
          </div>

          {generatedEncounter && (
            <div className="mt-6 space-y-4 bg-gray-800/50 p-4 rounded border border-yellow-500/20">
              <h3 className="text-lg font-bold text-yellow-300">Encontro Gerado:</h3>
              
              <div>
                <h4 className="text-purple-400 font-bold">Criatura(s):</h4>
                {generatedEncounter.criaturas.map((c: any) => (
                  <div key={c.id} className="text-gray-300 ml-4">
                    {c.nome} ({c.tipo}) - HP: {c.hp}
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-blue-400 font-bold">NPC: {generatedEncounter.npc.nome}</h4>
                <p className="text-gray-300 ml-4">{generatedEncounter.npc.profissao}</p>
              </div>

              <div>
                <h4 className="text-green-400 font-bold">Localização: {generatedEncounter.localizacao.nome}</h4>
                <p className="text-gray-300 ml-4">Perigo: {generatedEncounter.localizacao.perigo}/10</p>
              </div>

              <div>
                <h4 className="text-yellow-300 font-bold">Hook Narrativo:</h4>
                <p className="text-gray-300 ml-4 italic">{generatedEncounter.hook}</p>
              </div>

              <div className="flex gap-2 mt-4">
                <Button onClick={() => copyToClipboard(JSON.stringify(generatedEncounter, null, 2))} size="sm">
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar
                </Button>
                <Button onClick={() => downloadAsJSON(generatedEncounter, `encontro-${Date.now()}`)} size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="criaturas" className="space-y-4">
          <TabsList className="bg-gray-800 border border-purple-500/30">
            <TabsTrigger value="criaturas">Criaturas</TabsTrigger>
            <TabsTrigger value="npcs">NPCs</TabsTrigger>
            <TabsTrigger value="localizacoes">Localizações</TabsTrigger>
          </TabsList>

          {/* Criaturas Tab */}
          <TabsContent value="criaturas" className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-300">Criaturas Paranormais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {criaturas.map((criatura) => (
                <Card key={criatura.id} className="bg-gray-900 border-purple-500/30 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-purple-300">{criatura.nome}</h3>
                    <Badge className="bg-purple-600">{criatura.tipo}</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">HP: {criatura.hp} | Armor: {criatura.armor}</p>
                  <p className="text-gray-300 text-sm mb-3">{criatura.descricao.substring(0, 100)}...</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => copyToClipboard(criatura.descricao)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" onClick={() => downloadAsJSON(criatura, `criatura-${criatura.id}`)}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* NPCs Tab */}
          <TabsContent value="npcs" className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-300">NPCs Paranormais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {npcs.map((npc) => (
                <Card key={npc.id} className="bg-gray-900 border-blue-500/30 p-4">
                  <h3 className="text-lg font-bold text-blue-300">{npc.nome}</h3>
                  <p className="text-gray-400 text-sm mb-3">{npc.profissao}</p>
                  <p className="text-gray-300 text-sm mb-3 italic">"{npc.dialogoApresentacao.substring(0, 100)}..."</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => copyToClipboard(npc.dialogoApresentacao)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" onClick={() => downloadAsJSON(npc, `npc-${npc.id}`)}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Localizações Tab */}
          <TabsContent value="localizacoes" className="space-y-4">
            <h2 className="text-2xl font-bold text-green-300">Localizações Paranormais</h2>
            <div className="grid grid-cols-1 gap-4">
              {localizacoes.map((loc) => (
                <Card key={loc.id} className="bg-gray-900 border-green-500/30 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-green-300">{loc.nome}</h3>
                    <Badge className={`
                      ${loc.zona === "Vermelha" ? "bg-red-600" : ""}
                      ${loc.zona === "Laranja" ? "bg-orange-600" : ""}
                      ${loc.zona === "Amarela" ? "bg-yellow-600" : ""}
                      ${loc.zona === "Verde" ? "bg-green-600" : ""}
                    `}>
                      {loc.zona} - Perigo {loc.perigo}/10
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{loc.descricaoAmbiente.substring(0, 150)}...</p>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => copyToClipboard(loc.descricaoAmbiente)}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" onClick={() => downloadAsJSON(loc, `localizacao-${loc.id}`)}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Master;
