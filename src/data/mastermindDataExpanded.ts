// Dados expandidos para o Painel do Mestre - Ordem Paranormal
// Importações dos arquivos especializados
import { criaturas } from './criaturas';
import { npcs } from './npcs';
import { localizacoes } from './localizacoes';

export const mastermindDataExpanded = {
  // ===== CRIATURAS =====
  criaturas,
  totalCriaturas: criaturas.length,
  criaturasPorTipo: {
    sangue: criaturas.filter(c => c.tipo === "Sangue").length,
    morte: criaturas.filter(c => c.tipo === "Morte").length,
    energia: criaturas.filter(c => c.tipo === "Energia").length,
    conhecimento: criaturas.filter(c => c.tipo === "Conhecimento").length,
  },
  criaturasPorRaridade: {
    comum: criaturas.filter(c => c.raridade === "Comum").length,
    raro: criaturas.filter(c => c.raridade === "Raro").length,
    epico: criaturas.filter(c => c.raridade === "Épico").length,
    mitico: criaturas.filter(c => c.raridade === "Mítico").length,
  },

  // ===== NPCs =====
  npcs,
  totalNPCs: npcs.length,
  npcsComDialogos: npcs.filter(npc => npc.dialogos.length > 0).length,

  // ===== LOCALIZAÇÕES =====
  localizacoes,
  totalLocalizacoes: localizacoes.length,
  localizacoesPorZona: {
    vermelha: localizacoes.filter(l => l.zona === "Vermelha").length,
    laranja: localizacoes.filter(l => l.zona === "Laranja").length,
    amarela: localizacoes.filter(l => l.zona === "Amarela").length,
    verde: localizacoes.filter(l => l.zona === "Verde").length,
  },
  periguemMedia: Math.round(
    localizacoes.reduce((sum, l) => sum + l.perigo, 0) / localizacoes.length
  ),

  // ===== ESTATÍSTICAS GERAIS =====
  estatisticas: {
    totalEntidades: criaturas.length + npcs.length + localizacoes.length,
    locaisInvestigaveis: localizacoes.length,
    dialogosDisponiveis: npcs.reduce((sum, npc) => sum + npc.dialogos.length, 0),
    tiposAtaque: Array.from(
      new Set(criaturas.flatMap(c => c.ataques.map(a => a.dados)))
    ).length,
  },

  // ===== FUNÇÕES ÚTEIS =====
  buscarCriatura: (id: string) => {
    return criaturas.find(c => c.id === id);
  },

  buscarNPC: (id: string) => {
    return npcs.find(n => n.id === id);
  },

  buscarLocalizacao: (id: string) => {
    return localizacoes.find(l => l.id === id);
  },

  criaturasPorPerigo: (nivelMinimo: number) => {
    return criaturas.filter(c => {
      const hp = c.hp;
      return hp >= nivelMinimo * 25;
    });
  },

  npcsPorProfissao: (profissao: string) => {
    return npcs.filter(npc => 
      npc.profissao.toLowerCase().includes(profissao.toLowerCase())
    );
  },

  localizacoesPorPerigo: (nivelMinimo: number, nivelMaximo: number) => {
    return localizacoes.filter(l => l.perigo >= nivelMinimo && l.perigo <= nivelMaximo);
  },

  gerarEncontroAleatorio: () => {
    const criaturaAleatoria = criaturas[Math.floor(Math.random() * criaturas.length)];
    const npcAleatorio = npcs[Math.floor(Math.random() * npcs.length)];
    const localizacaoAleatoria = localizacoes[Math.floor(Math.random() * localizacoes.length)];
    
    return {
      criatura: criaturaAleatoria,
      npc: npcAleatorio,
      localizacao: localizacaoAleatoria,
      dificuldadeEstimada: Math.round(
        (criaturaAleatoria.hp / 50 + localizacaoAleatoria.perigo) / 2
      ),
      hooks: [
        `${npcAleatorio.nome} pede investigação de ${localizacaoAleatoria.nome}`,
        `${criaturaAleatoria.nome} foi avistado próximo ${localizacaoAleatoria.nome}`,
        `Manifestação em ${localizacaoAleatoria.nome} requer equipe com ${npcAleatorio.profissao}`,
      ]
    };
  },

  gerarEncontroTemático: (tipo: "Sangue" | "Morte" | "Energia" | "Conhecimento") => {
    const criaturasDoTipo = criaturas.filter(c => c.tipo === tipo);
    if (criaturasDoTipo.length === 0) return null;
    
    const criatura = criaturasDoTipo[Math.floor(Math.random() * criaturasDoTipo.length)];
    const npc = npcs[Math.floor(Math.random() * npcs.length)];
    const localizacao = localizacoes[Math.floor(Math.random() * localizacoes.length)];
    
    return {
      tipo,
      criatura,
      npc,
      localizacao,
      narrativa: `Investigação de manifestação do tipo ${tipo} em ${localizacao.nome}. ${npc.nome} solicita assistência.`
    };
  },

  // ===== EXPORTAÇÃO PARA DOWNLOAD =====
  exportarCompleto: () => {
    return {
      versao: "2.0-EXPANDIDA",
      dataExportacao: new Date().toISOString(),
      conteudo: {
        criaturas,
        npcs,
        localizacoes,
      },
      totais: {
        criaturas: criaturas.length,
        npcs: npcs.length,
        localizacoes: localizacoes.length,
      }
    };
  }
};

// Exportar também os tipos para TypeScript
export type { Criatura } from './criaturas';
export type { NPC } from './npcs';
export type { Localizacao } from './localizacoes';

// Função para download direto
export function downloadMasterData() {
  const data = mastermindDataExpanded.exportarCompleto();
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Ordem-Paranormal-MasterData-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
}
