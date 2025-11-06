import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Agent {
  id: string;
  code_name: string;
  real_name: string;
  class: string;
  origin: string;
  theme_color: string;
  biography: string | null;
  strengths: string | null;
  weaknesses: string | null;
  access_level: number;
}

interface AgentContextType {
  user: User | null;
  session: Session | null;
  agent: Agent | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, agentCode: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  logActivity: (action: string, details?: string) => Promise<void>;
}

const AgentContext = createContext<AgentContextType | undefined>(undefined);

export const AgentProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Fetch agent data
          setTimeout(async () => {
            const { data: agentData, error } = await supabase
              .from("agents")
              .select("*")
              .eq("user_id", session.user.id)
              .single();
            
            if (error) {
              console.error("Error fetching agent:", error);
            } else {
              setAgent(agentData);
            }
            setLoading(false);
          }, 0);
        } else {
          setAgent(null);
          setLoading(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(async () => {
          const { data: agentData, error } = await supabase
            .from("agents")
            .select("*")
            .eq("user_id", session.user.id)
            .single();
          
          if (error) {
            console.error("Error fetching agent:", error);
          } else {
            setAgent(agentData);
          }
          setLoading(false);
        }, 0);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "ERRO DE AUTENTICAÇÃO",
        description: error.message,
        variant: "destructive",
      });
    }

    return { error };
  };

  const signUp = async (email: string, password: string, agentCode: string) => {
    // First, sign up the user
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
    });

    if (signUpError) {
      toast({
        title: "ERRO DE REGISTRO",
        description: signUpError.message,
        variant: "destructive",
      });
      return { error: signUpError };
    }

    // Link the user to the agent
    if (data.user) {
      const { error: updateError } = await supabase
        .from("agents")
        .update({ user_id: data.user.id })
        .eq("code_name", agentCode.toUpperCase());

      if (updateError) {
        toast({
          title: "ERRO DE VINCULAÇÃO",
          description: "Falha ao vincular agente. Código inválido.",
          variant: "destructive",
        });
        return { error: updateError };
      }
    }

    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setAgent(null);
  };

  const logActivity = async (action: string, details?: string) => {
    if (!agent) return;

    await supabase.from("activity_logs").insert({
      agent_id: agent.id,
      action,
      details: details || null,
    });
  };

  return (
    <AgentContext.Provider
      value={{
        user,
        session,
        agent,
        loading,
        signIn,
        signUp,
        signOut,
        logActivity,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgent = () => {
  const context = useContext(AgentContext);
  if (context === undefined) {
    throw new Error("useAgent must be used within an AgentProvider");
  }
  return context;
};
