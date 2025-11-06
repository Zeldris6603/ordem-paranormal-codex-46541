import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAgent } from "@/contexts/AgentContext";

export interface ClassifiedFile {
  id: string;
  title: string;
  category: string;
  content: string;
  classification: string;
  required_access_level: number;
  created_at: string;
}

export const useClassifiedFiles = () => {
  const { agent } = useAgent();

  return useQuery({
    queryKey: ["classified-files", agent?.id],
    queryFn: async () => {
      if (!agent) return [];

      const { data, error } = await supabase
        .from("files")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data as ClassifiedFile[];
    },
    enabled: !!agent,
  });
};

export const useAccessibleFiles = () => {
  const { agent } = useAgent();

  return useQuery({
    queryKey: ["accessible-files", agent?.id],
    queryFn: async () => {
      if (!agent) return [];

      // Get files the agent has explicit access to via agent_access table
      const { data: accessData, error: accessError } = await supabase
        .from("agent_access")
        .select("file_id")
        .eq("agent_id", agent.id);

      if (accessError) throw accessError;

      const fileIds = accessData.map((a) => a.file_id);

      if (fileIds.length === 0) return [];

      const { data: files, error: filesError } = await supabase
        .from("files")
        .select("*")
        .in("id", fileIds)
        .order("created_at", { ascending: false });

      if (filesError) throw filesError;

      return files as ClassifiedFile[];
    },
    enabled: !!agent,
  });
};

export const useFileAccess = (fileId: string) => {
  const { agent } = useAgent();

  return useQuery({
    queryKey: ["file-access", agent?.id, fileId],
    queryFn: async () => {
      if (!agent) return false;

      const { data, error } = await supabase
        .from("agent_access")
        .select("id")
        .eq("agent_id", agent.id)
        .eq("file_id", fileId)
        .maybeSingle();

      if (error) throw error;

      return !!data;
    },
    enabled: !!agent && !!fileId,
  });
};
