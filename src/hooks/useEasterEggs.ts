import { useState, useEffect } from "react";
import { useAgent } from "@/contexts/AgentContext";
import { supabase } from "@/integrations/supabase/client";

export interface EasterEgg {
  id: string;
  title: string;
  description: string;
  secret: string;
  discovered_at?: string;
}

const EASTER_EGGS: Omit<EasterEgg, "discovered_at">[] = [
  {
    id: "konami_code",
    title: "Código Secreto da Ordo",
    description: "Sequência de comandos ancestral",
    secret: "O Código Konami foi usado pelos fundadores da Ordo Realitas como senha de emergência. Apenas os agentes mais veteranos conhecem sua origem nos primeiros sistemas de segurança digitais.",
  },
  {
    id: "triple_click_logo",
    title: "O Terceiro Olho",
    description: "Ver além do véu",
    secret: "O símbolo da Ordo guarda mais do que aparenta. Três cliques revelam a verdade: a organização monitora anomalias paranormais desde 1952, muito antes da fundação oficial em 1985.",
  },
  {
    id: "hidden_terminal",
    title: "Terminal Oculto",
    description: "Interface de acesso restrito",
    secret: "Existem 13 níveis de acesso na Ordo Realitas. Os agentes de campo só conhecem até o nível 5. Veríssimo opera no nível 9. Ninguém sabe quem tem acesso ao nível 13.",
  },
  {
    id: "classified_sequence",
    title: "Protocolo 13-Omega",
    description: "Sequência de ativação",
    secret: "O Protocolo 13-Omega não é apenas uma ameaça. É um plano de contingência que permite eliminar toda evidência da Ordo em menos de 24 horas, incluindo agentes comprometidos.",
  },
  {
    id: "shadow_click",
    title: "Nas Sombras",
    description: "O que espreita no escuro",
    secret: "O Coletivo das Sombras não é uma organização rival. É uma facção dissidente da própria Ordo que discorda dos métodos de Veríssimo. Alguns agentes ativos servem aos dois lados.",
  },
];

export const useEasterEggs = () => {
  const { agent } = useAgent();
  const [discovered, setDiscovered] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDiscoveredEggs();
  }, [agent]);

  const loadDiscoveredEggs = async () => {
    if (!agent) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("activity_logs")
        .select("details")
        .eq("agent_id", agent.id)
        .eq("action", "EASTER_EGG_DISCOVERED");

      if (error) throw error;

      const eggIds = new Set(
        data?.map((log) => log.details?.replace("Easter egg discovered: ", "")) || []
      );
      setDiscovered(eggIds);
    } catch (error) {
      console.error("Error loading easter eggs:", error);
    } finally {
      setLoading(false);
    }
  };

  const discoverEgg = async (eggId: string) => {
    if (!agent || discovered.has(eggId)) return null;

    const egg = EASTER_EGGS.find((e) => e.id === eggId);
    if (!egg) return null;

    try {
      await supabase.from("activity_logs").insert({
        agent_id: agent.id,
        action: "EASTER_EGG_DISCOVERED",
        details: `Easter egg discovered: ${eggId}`,
      });

      setDiscovered((prev) => new Set([...prev, eggId]));
      return egg;
    } catch (error) {
      console.error("Error saving easter egg:", error);
      return null;
    }
  };

  const getDiscoveredEggs = (): EasterEgg[] => {
    return EASTER_EGGS.filter((egg) => discovered.has(egg.id)).map((egg) => ({
      ...egg,
      discovered_at: new Date().toISOString(),
    }));
  };

  const getProgress = () => {
    return {
      discovered: discovered.size,
      total: EASTER_EGGS.length,
      percentage: Math.round((discovered.size / EASTER_EGGS.length) * 100),
    };
  };

  return {
    discovered,
    loading,
    discoverEgg,
    getDiscoveredEggs,
    getProgress,
    allEggs: EASTER_EGGS,
  };
};
